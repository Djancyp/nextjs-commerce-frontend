import { GetServerSidePropsContext } from "next";
import { useState } from "react";
import ProductListing from "@/components/core/Product/product-listing";
import Carousel from "@/components/Template/Carousel/carousel";
export default function Home({ Products }: any) {
  const [products, _] = useState<any>(Products ? Products : []);

  return (
    <>
      <Carousel />
      <ProductListing products={products} />
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const data = await fetch("https://fakestoreapi.com/products?limit=8");
  const products = await data.json();
  return {
    props: { Products: products }, // will be passed to the page component as props},
  };
}
