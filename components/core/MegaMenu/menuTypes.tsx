export interface MenuType {
  id: number;
  displayName: string;
  path: string;
  children?: MenuType[];
  type?: string;
}
export interface MenuProps {
  Menus: MenuType[];
}
