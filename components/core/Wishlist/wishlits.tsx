import { IoIosHeartEmpty } from "react-icons/io";
import { toggleSidebar } from "@/store/ui/index";
import { useAppDispatch } from "@/hooks/hooks";
import Sidebar from "@/components/core/Sidebar/sidebar";
const MiniCart = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <button
        name="cart"
        className="p-2 hover:text-gray-500 relative"
        onClick={() => dispatch(toggleSidebar("whishList"))}
      >
        <IoIosHeartEmpty />
      </button>
      <Sidebar side="right" sidebarId="whishList">
        <h1>WhishList</h1>
      </Sidebar>
    </>
  );
};
export default MiniCart;
