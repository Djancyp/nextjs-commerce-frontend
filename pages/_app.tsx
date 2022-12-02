import "@/styles/global.scss";
import { type AppType } from "next/dist/shared/lib/utils";
import Layout from "@/layouts/layout";
import { Provider } from "react-redux";
import { store } from "../store/index";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo/apolloClient";
import { SessionProvider } from "next-auth/react";
import NextProgress from "next-progress";
import { GetServerSidePropsContext } from "next";
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  console.log("ctx", ctx);
  const data = await fetch("https://fakestoreapi.com/products");
  const dataJson = await data.json();
  return {
    props: { dataJson },
  };
}
const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}: any) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <ApolloProvider client={apolloClient}>
          <NextProgress height={3} color="rgb(147, 51, 234)" />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </SessionProvider>
    </Provider>
  );
};
export default MyApp;
