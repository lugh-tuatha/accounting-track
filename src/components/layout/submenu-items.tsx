"use client"

import { SubMenuItemTypes } from '@/types/sidenav'
import { usePathname, useRouter } from 'next/navigation';
import React, { useMemo } from 'react'

export default function SubmenuItems({ item }: { item: SubMenuItemTypes }) {
    const { title, path } = item; 

    const router = useRouter()
    const pathname = usePathname()

    const onclick = () => {
        router.push(path)
    }

    const isActive = useMemo(() => {
        return path === pathname
    }, [path, [pathname]])

    return (
        <div className={`hover:font-semibold ${isActive && "text-sidebar-active font-semibold"}`} onClick={onclick}>
            {title}
        </div>
    )
}
