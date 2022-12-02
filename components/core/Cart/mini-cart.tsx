import {
  IoMdBasket,
  IoIosAddCircle,
  IoIosRemoveCircle,
  IoIosRemove,
  IoIosCloseCircle,
  IoIosClose,
  IoIosAdd,
} from "react-icons/io";
import { toggleSidebar } from "@/store/ui/index";
import { useAppDispatch } from "@/hooks/hooks";
import Sidebar from "@/components/core/Sidebar/sidebar";
import Image from "next/image";

const MiniCart = ({ cart = { products: [] } }: any) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <button
        name="cart"
        className="p-2 hover:text-gray-500 relative"
        onClick={() => dispatch(toggleSidebar("mini-cart"))}
      >
        <IoMdBasket />
        {cart?.length > 0 && (
          <span className="bg-purple-600 text-[10px] w-[20px] h-[20px] leading-[21px] font-semibold  text-white rounded-full absolute -top-1">
            {cart?.length}
          </span>
        )}
      </button>
      <Sidebar side="right" sidebarId="mini-cart">
        <div className="mt-10 mx-4  h-full">
          <button className="px-4 py-2 bg-purple-600 text-white w-full shadow-lg">
            Checkout
          </button>
          <div className="mt-5 w-full overflow-y-auto h-full max-h-[600px]">
            <ul className="bg-white">
              {cart.map((product: any) => (
                <li key={product.id} className="relative flex mb-2 w-full">
                  <div className="flex flex-wrap w-full border-b pb-3 justify-between">
                    <div className="w-1/4 relative">
                      <Image
                        src={product.image}
                        alt="Picture of the author"
                        width={50}
                        height={50}
                        onLoad={() => <div>Loading</div>}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                    <div className=" text-lg relative w-2/3 mr-5">
                      <IoIosClose className="text-4xl text-red-400 ml-auto mb-2" />
                      <h2 className="font-semibold text-sm mb-1  text-slate-500">
                        {product.title}
                      </h2>
                      <span className="font-semibold text-sm">
                        ${product.price}
                      </span>
                      <div className="flex flex-nowrap items-center justify-end mt-5">
                        <span className="bg-slate-100 p-2 rounded-full shadow">
                          <IoIosRemove className="text-purple-600 text-1xl" />
                        </span>
                        <input
                          className="w-[27px] border-b border-slate-800 text-[15px] text-md text-center mx-2 leading-[25px]"
                          type="number"
                          value="1"
                        />
                        <span className="bg-slate-100 p-2 rounded-full shadow">
                          <IoIosAdd className="text-purple-600 text-1xl" />
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Sidebar>
    </>
  );
};
export default MiniCart;
