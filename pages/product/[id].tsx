import Quantity from "@/components/core/Quantity/quantity";
import Image from "next/image";

const Product = ({ Product }: any) => {
  const setQty = (qty: number) => {
    console.log(qty);
  };
  return (
    <div className="flex flex-wrap   m-h-[600px]">
      <div className="w-full md:w-1/2 flex p-5 relative">
        <Image
          src={Product.image}
          alt="Picture of the author"
          width={400}
          height={400}
          onLoad={() => <div>Loading</div>}
          className="w-full"
        />
        <div className="z-[1] bg-purple-600 text-white absolute  px-2 py-1 right-2">
          New
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 flex-col p-5">
        <h1 className="text-[25px] font-semibold">{Product.title}</h1>
        <p>{Product.description}</p>
        <p className="p-2 font-bold text-white bg-purple-600 max-w-[100px] text-center mt-2 rounded shadow">
          £{Product.price}
        </p>
        <Quantity onChange={setQty} />
      </div>
    </div>
  );
};

export async function getServerSideProps(params: any) {
  const { id } = params.query;
  const data = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await data.json();
  return {
    props: { Product: product }, // will be passed to the page component as props},
  };
}
export default Product;
