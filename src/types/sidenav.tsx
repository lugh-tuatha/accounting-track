export type SubMenuItemTypes = {
    title: string,
    path: string,
}

export type SideNavItemTypes = {
    title: string,
    path: string,
    icon?: JSX.Element;
    submenu?: boolean;
    subMenuItems?: SubMenuItemTypes[]
}