import Head from "next/head";
import Header from "@/components/Template/Header/header";
import Logo from "@/components/Template/Logo/logo";
import MiniCart from "@/components/core/Cart/mini-cart";
import Wishlist from "@/components/core/Wishlist/wishlits";
import Overlay from "@/components/core/Overlay/overlay";
import MegaMenu from "@/components/core/MegaMenu/menu";
import Notifications from "@/components/core/Notifications/notifications";
import { IoMdPerson, IoIosSearch } from "react-icons/io";
import MockMenu from "@/mock-data/menu";
import { setNotification } from "@/store/ui/index";
import { useAppDispatch } from "@/hooks/hooks";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";
import { useEffect, useState } from "react";
interface PageLayout {
  children: React.ReactNode;
}
export default function Layout({ children }: PageLayout) {
  const { data: session } = useSession();
  const [cart, setCart] = useState([]);

  const dispatch = useAppDispatch();
  const fetchCart = async () => {
    const data = await fetch("https://fakestoreapi.com/products?limit=5");
    const cart = await data.json();
    setCart(cart);
  };
  useEffect(() => {
    fetchCart();
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Overlay />
      <Notifications />
      <div className="h-0.5 w-full" />
      <Header className="bg-white  h-auto flex flex-col items-center">
        <div className=" flex items-center w-full max-w-7xl p-2">
          <Logo />
          <div className="ml-auto text-2xl md:text-2xl">
            <button
              onClick={() =>
                dispatch(
                  setNotification({
                    message: "test",
                    id: 0,
                    timeout: 3000,
                  })
                )
              }
              className="p-2 bg-white text-black m-2"
            ></button>

            <button
              name="search"
              className="p-2 hover:text-gray-500"
              title="Search"
            >
              <IoIosSearch />
            </button>
            <Wishlist />
            <button name="profile" className="p-2 hover:text-gray-500">
              {!session && (
                <Link href="/login" className="">
                  <IoMdPerson />
                </Link>
              )}
              {session && (
                <>
                  <IoMdPerson />
                  <ul className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1  m-0 bg-clip-padding border-none">
                    <li className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                      <Link href="/profile">Profile</Link>
                    </li>
                    <li
                      className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      onClick={() => signOut()}
                    >
                      Logout
                    </li>
                  </ul>
                </>
              )}
            </button>
            <MiniCart cart={cart} />
          </div>
        </div>
        <MegaMenu Menus={MockMenu} />
      </Header>
      <main className="w-full max-w-7xl ml-auto mr-auto">{children}</main>
    </>
  );
}
