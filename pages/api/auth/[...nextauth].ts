import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { type NextApiRequest, type NextApiResponse } from "next";
import { setCookie } from "nookies";
type NextAuthOptionsCallback = (req: any, res: any) => NextAuthOptions;

export const nextAuthOptions: NextAuthOptionsCallback = (req, res) => {
  return {
    providers: [
      CredentialsProvider({
        credentials: {},
        async authorize(credentials: any): Promise<any> {
          try {
            const data = await fetch("http://localhost:1337/api/auth/local", {
              method: "POST",
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" },
            });
            const { user, jwt } = await data.json();

            setCookie({ res }, "AUTH_TOKEN", jwt, {
              maxAge: 2 * 24 * 60 * 60,
              path: "/",
              httpOnly: true,
            });
            const newUser = {
              email: user.email,
              name: user.username,
              image: "test",
              accessToken: jwt,
            };
            if (user) {
              return newUser;
            }
          } catch (error) {
            console.log(error);
          }
        },
      }),
    ],
    secret: "hello",
    pages: {
      signIn: "/login",
    },
  };
};
export default (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, nextAuthOptions(req, res));
};
