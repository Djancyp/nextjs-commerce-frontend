import { MenuProps } from "./menuTypes";
import Link from "next/link";
import SubMenu from "./subMenu";
import { setMegaMenu } from "@/store/ui/index";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import type { RootState, AppDispatch } from "@/store/index";
const Menu = ({ Menus }: MenuProps) => {
  const dispatch: AppDispatch = useAppDispatch();
  const megaMenu = useAppSelector((state: RootState) => state.ui.megamenu);
  return (
    <div className="relative w-full">
      <nav className="hidden md:block w-full max-w-7xl ml-auto mr-auto">
        <ul className="flex items-center justify-center">
          {Menus.map((menu) => (
            <div key={menu.id}>
              <li
                onMouseEnter={() =>
                  dispatch(setMegaMenu(menu.children ? menu.path : ""))
                }
                onMouseLeave={() => dispatch(setMegaMenu(""))}
                className="px-4 py-3  hover:underline menu cursor-pointer line-through"
              >
                <Link href={menu.path}>{menu.displayName}</Link>
                {megaMenu === menu.path && menu.children && (
                  <div className="absolute top-full left-0 h-80 w-full z-20 bg-white pt-4  border-t border-t-purple-700 border-b border-b-gray-200">
                    <SubMenu Menus={menu.children} />
                  </div>
                )}
              </li>
            </div>
          ))}
          {megaMenu && (
            <div
              className={`overlay w-full z-10 bg-black bg-opacity-75 h-screen  absolute top-full left-0 `}
            />
          )}
        </ul>
      </nav>
    </div>
  );
};
export default Menu;
