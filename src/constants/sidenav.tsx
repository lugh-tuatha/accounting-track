import { SideNavItemTypes } from "@/types/sidenav";
import { ActivityLogIcon, BarChartIcon, DashboardIcon, FileTextIcon, HomeIcon } from "@radix-ui/react-icons";

export const SIDENAV_ITEMS: SideNavItemTypes[] = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <DashboardIcon />
    },
    {
        title: "Sales",
        path: "/sales",
        icon: <BarChartIcon />
    },
    {
        title: "Expenses",
        path: "/expenses",
        icon: <ActivityLogIcon />
    },
    {
        title: "Maintenance",
        path: "/maintenance/cards",
        icon: <FileTextIcon />,
        submenu: true,
        subMenuItems: [
            { title: "Cards", path: "/maintenance/cards" },
            { title: "Contacts", path: "/maintenance/contacts" },
        ]
    }
]