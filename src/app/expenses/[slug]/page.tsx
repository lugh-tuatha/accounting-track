import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { getExpenseBySlug } from "@/lib/expenses"

import { Pencil2Icon } from "@radix-ui/react-icons"
import Image from "next/image"

export default async function page({ params }: {params: any}) {
    const { expense } = await getExpenseBySlug(params)

    return (
        <main className="px-8 py-4">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-3xl font-medium">Expense Number: {expense?.expense_number}</h1>
                    <p>{expense?.payment_date.toDateString()}</p>
                </div>

                <Button className="space-x-2">
                    <Pencil2Icon width={20} height={20}/>
                    <span>Edit</span>
                </Button>
            </div>

            <div className="mt-4 flex gap-8">
                <div className="w-3/4 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Product/Services</CardTitle>
                        </CardHeader>
                        <CardContent className="flex gap-6">
                            <Image src="/default-image.jpg" height={150} width={150} className="aspect-square" alt="product image"/>

                            <div className="w-full flex flex-col justify-between">
                                <div>
                                    <p>{expense?.category}</p>
                                    <h2 className="text-2xl font-bold">{expense?.product}</h2>
                                    <p>{expense?.product_description}</p>
                                </div>
                                <p className="text-end font-bold">₱ {expense?.amount}</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="border-b">
                            <div className="text-xs grid grid-cols-5 opacity-50">
                                <p>Product/Services</p>
                                <p>Category</p>
                                <p>Description</p>
                                <p>Qty.</p>
                                <p className="text-right">Amount</p>
                            </div>
                            <div className="mt-2 mb-4 grid grid-cols-5">
                                <p>{expense?.product}</p>
                                <p>{expense?.category}</p>
                                <p>{expense?.product_description}</p>
                                <p>1</p>
                                <p className="text-right">₱ {expense?.amount}</p>
                            </div>
                            <div className="flex justify-between font-bold">
                                <p>Total</p>
                                <p>₱ {expense?.amount}</p>
                            </div>
                        </CardContent>
                        <CardFooter className="pt-2">
                            <p><span className="font-bold">Paid by:</span> Ace</p>
                        </CardFooter>
                    </Card>
                </div>

                <div className="w-1/4 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Memo/Notes</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{expense?.memo}</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Vendors/Customer</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{expense?.payee}</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Payment Account</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                <li>
                                    <span className="font-bold">Account Name: </span> 
                                    {expense?.payment_account.account_name}
                                </li>
                                <li>
                                    <span className="font-bold">Account Number: </span> 
                                    {expense?.payment_account.account_number}
                                </li>
                                <li>
                                    <span className="font-bold">Account Type: </span> 
                                    {expense?.payment_account.account_type}
                                </li>
                                <li>
                                    <span className="font-bold">Provider: </span> 
                                    {expense?.payment_account.provider}
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div>
                <h2 className="mt-4 mb-2 font-bold text-xl">Receipt</h2>
                <Image src="/default-image.jpg" height={800} width={150} className="h-64 w-52" alt="receipt"/>
            </div>
            
        </main>
    )
}
