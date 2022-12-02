import { MenuProps } from "./menuTypes";
import Link from "next/link";
interface SubMenuProps extends MenuProps {
  depth?: number;
}
const SubMenu = ({ Menus, depth = 0 }: SubMenuProps) => {
  return (
    <ul
      className={`${
        depth === 0 ? "flex-row justify-around" : "flex-col"
      } max-w-7xl ml-auto mr-auto flex text-sm z-40 font-normal`}
    >
      {Menus.map((menu) => (
        <li
          key={menu.id}
          className={`${depth === 0 ? "flex-col" : "flex-row"} flex`}
        >
          <Link
            href={menu.path}
            className={`${
              depth === 0 ? "mb-1 font-semibold" : ""
            } px-4 py-2 hover:underline`}
          >
            {menu.displayName}
          </Link>
          {menu.children && menu.children.length > 0 && (
            <SubMenu Menus={menu.children} depth={1} />
          )}
        </li>
      ))}
      {depth === 0 && (
        <div className=" p-2 border">
          <img src="https://picsum.photos/200/250" alt="menu" />
        </div>
      )}
    </ul>
  );
};
export default SubMenu;
