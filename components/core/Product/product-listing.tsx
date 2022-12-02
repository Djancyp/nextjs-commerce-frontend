import Image from "next/image";
import Stars from "@/components/core/Product/stars";
import Link from "next/link";
import { IoIosHeartEmpty } from "react-icons/io";
interface Props {
  products: any;
}
const ProductListing = ({ products }: Props) => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="w-full sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5  m-2 p-2  shadow-md"
          >
            <Link href={`/product/${product.id}`}>
              <div
                className="overflow-hidden justify-center flex self-center h-full relative"
                style={{ height: "300px" }}
              >
                <Image
                  src={product.image}
                  alt="Picture of the author"
                  width={200}
                  height={200}
                  onLoad={() => <div>Loading</div>}
                  className="hover:scale-125 duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
                <div className="z-[1] bg-purple-600 text-white absolute text-xs px-2 py-1 right-2">
                  New
                </div>
              </div>
              <div className="flex items-center">
                <Stars rating={product.rating.rate} />
                <IoIosHeartEmpty className="ml-auto" />
              </div>
              <div className="flex flex-col mt-[1rem] text-sm">
                <p className="">{product.title}</p>
                <p className="mt-[1rem]">${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default ProductListing;
