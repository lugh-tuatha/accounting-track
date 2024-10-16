import React from 'react'

import { SignUp } from "@clerk/nextjs";

export default function page() {
    return (
        <div className="pt-4 flex items-center justify-center">
            <SignUp />
        </div>
    )
}
