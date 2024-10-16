import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

import { SIDENAV_ITEMS } from "@/constants/sidenav";
import SidebarItems from "./sidebar-items";

export default function Sidebar() {

    return (
        <div className="py-4 bg-primary-foreground w-[12%] h-screen">
            <h1 className="font-bold mx-8">Logos</h1>
            <Button variant="outline" className="rounded-full px-6 gap-2 ml-8 my-8">
                Create New <PlusIcon />
            </Button>

            <ul className="w-full px-2">
                {SIDENAV_ITEMS.map(item => (
                    <SidebarItems key={item.path} item={item}/>
                ))}
            </ul>
        </div>
    )
}