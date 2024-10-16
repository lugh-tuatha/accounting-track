"use client"
import React, { useEffect, useMemo, useState } from "react";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import { SideNavItemTypes } from '@/types/sidenav'

import { ChevronDownIcon } from '@radix-ui/react-icons';

import SubmenuItems from "./submenu-items";

export default function SidebarItems({ item }: { item: SideNavItemTypes } ) {
    const { title, path, subMenuItems, icon } = item;
    const [expanded, setExpanded] = useState(false)

    const router = useRouter()
    const pathname = usePathname()
    
    const onClick = () => {
        if(subMenuItems && subMenuItems.length > 0){
            setExpanded(!expanded)
        }
        router.push(path)
    }

    const isActive = useMemo(() => {
        if(subMenuItems && subMenuItems.length > 0) {
            if(subMenuItems.find((item) => item.path === pathname)){
                return subMenuItems.some((subItem) => subItem.path === pathname);
            }
        }
        return path === pathname
    }, [path, [pathname]])

    useEffect(() => {
        if (isActive) {
            setExpanded(true);
        }
    }, [isActive]);

    return (
        <li className={`cursor-pointer`}>
            <div className={`px-3 py-2 flex items-center justify-between hover:font-semibold rounded-sm ${isActive && "text-sidebar-active bg-sidebar-background"}`} onClick={onClick}>
                <div className="flex gap-2 items-center">
                    {icon}
                    <span>{title}</span>
                </div>

                {subMenuItems && subMenuItems.length > 0 && (
                    <ChevronDownIcon width={20} height={20} className={expanded ? "rotate-180 duration-200" : ""}/>
                )}
            </div>

            <ul>
                {expanded && subMenuItems && subMenuItems.length > 0 && (subMenuItems.map(item => (
                    <li className="px-8 py-1 text-sm" key={item.path}>
                        <SubmenuItems item={item}/>
                    </li>
                )))}
            </ul>
        </li>
    )
}
