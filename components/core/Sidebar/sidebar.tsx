import { toggleSidebar } from "@/store/ui/index";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
import { IoMdCloseCircle } from "react-icons/io";
interface customPropType {
  children: React.ReactNode;
  side?: string;
  sidebarId: string;
}

const Sidebar = ({ children, side = "left", sidebarId }: customPropType) => {
  const sidebar = useAppSelector((state) => state.ui.sidebar);
  const SidebarId = useAppSelector((state) => state.ui.sidebarId);
  const dispatch = useAppDispatch();
  return (
    <>
      {sidebar && SidebarId === sidebarId && (
        <div
          className={`
absolute top-0  shadow-md w-full h-full overflow-hidden  bg-white z-10 transition 
duration-500 ease-in-out  md:max-w-[450px] 
${
  side == "left"
    ? sidebar && SidebarId === sidebarId
      ? "translate-x-0 opacity-100"
      : "-translate-x-full opacity-0"
    : sidebar && SidebarId === sidebarId
    ? "-translate-x-0 opacity-100"
    : "translate-x-full opacity-0"
}
${side === "left" ? "left-0" : "right-0"}
`}
        >
          <div className="flex w-full flex-col">
            <div className="relative">
              <button
                onClick={() => dispatch(toggleSidebar(""))}
                className="absolute right-1 top-1 "
              >
                <IoMdCloseCircle />
              </button>
            </div>
            <main>{children}</main>
          </div>
        </div>
      )}
    </>
  );
};
export default Sidebar;
