'use client'

import { UserButton } from "@clerk/nextjs";
import { useTheme } from "@emotion/react";
import { BellIcon, GearIcon, HamburgerMenuIcon, MoonIcon } from "@radix-ui/react-icons";

export default function Header() {
    // const { setTheme } = useTheme()

    return (
        <header className="bg-primary-foreground py-4 flex items-center justify-between px-8">
            <div className="flex gap-4 font-bold">
                <HamburgerMenuIcon width={25} height={25}/>
                <h1>Company Name</h1>
            </div>

            <div className="flex items-center gap-4">
                <MoonIcon width={25} height={25}/>
                <BellIcon width={25} height={25}/>
                <GearIcon width={25} height={25}/>
                <UserButton />
            </div>
        </header>
    )
}
