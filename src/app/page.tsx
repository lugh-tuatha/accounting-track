import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'

import { maintenance_items, transaction_items } from "@/data/tab-items";

export default function Home() {
    return (
        <div>
            <h2 className='my-2'>Transaction</h2>
            <div className="flex gap-4">
                {transaction_items.map((transaction, index) => (
                    <Link href={transaction.link} key={index}>
                        <div className="min-w-28 border-2 rounded-md p-3">
                            <Image className="mx-auto" src={transaction.icon} width={60} height={60} alt={transaction.title + ' icon'}/>
                            <h1 className="uppercase text-md font-bold text-center">{transaction.title}</h1>
                        </div>
                    </Link>
                ))}
            </div>
            
            <h2 className='my-2'>Maintenance</h2>
            <div className="flex gap-4">
                {maintenance_items.map((maintenance, index) => (
                    <Link href={maintenance.link} key={index}>
                        <div className="min-w-28 border-2 rounded-md p-3">
                            <Image className="mx-auto" src={maintenance.icon} width={60} height={60} alt={maintenance.title + ' icon'}/>
                            <h1 className="uppercase text-md font-bold text-center">{maintenance.title}</h1>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
