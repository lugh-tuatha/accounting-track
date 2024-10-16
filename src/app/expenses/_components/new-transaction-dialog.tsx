import React, { useState } from "react"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { PlusIcon, TrashIcon } from "@radix-ui/react-icons"
import { Textarea } from "@/components/ui/textarea"

import { createExpense } from "@/server/actions/expenses"
import { DialogClose } from "@radix-ui/react-dialog"
import { getAllPaymentAccounts } from "@/lib/payment-account"
import prisma from "@/lib/prisma"

export default async function NewTransactionDIalog() {
    const { paymentAccounts } = await getAllPaymentAccounts()

    const expensesCount = await prisma.expense.count()

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <span>New Transaction</span> 
                    <PlusIcon className="ml-2 w-4 h-4"/>
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-full w-full h-full block">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">New Transaction</DialogTitle>
                    <DialogDescription>
                        Please fill out the details below to create a new transaction.
                    </DialogDescription>
                </DialogHeader>
                <form className="mt-4" action={createExpense}>
                    <div className="flex">
                        <div className="flex gap-4 w-1/2">
                            <div className="w-1/2">
                                <Label htmlFor="payee">Payee</Label>
                                <Input type="text" id="payee" name="payee" placeholder="Who did you pay?"/>
                            </div>
                            <div className="w-1/2">
                                <Label htmlFor="payment-account">Payment Account</Label>
                                <Select name="payment-account">
                                    <SelectTrigger>
                                        <SelectValue placeholder="What account did you use?"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {paymentAccounts?.map(paymentAccount => (
                                            <SelectItem key={paymentAccount.id} value={paymentAccount.id}>
                                                {paymentAccount.provider} - {paymentAccount.account_number} - {paymentAccount.account_name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="w-1/2 text-end">
                            <h1 className="text-md">Amount</h1>
                            <p className="font-bold text-4xl">₱0.00</p>
                        </div>
                    </div>

                    <div className="flex gap-4 w-1/2 mb-4 my-2">
                        <div className="w-1/2">
                            <Label htmlFor="payment-date">Payment Date</Label>
                            <Input type="text" id="payment-date" placeholder="When did you pay?"/>
                            
                        </div>
                        <div className="w-1/2">
                            <Label htmlFor="payment-method">Payment Method</Label>
                            <Input name="payment-method" type="text" id="payment-method" placeholder="What did you pay with?"/>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                        <Checkbox id="include-inventory"/>
                        <label htmlFor="include-inventory" className="text-sm font-medium">
                            Include in Inventory
                        </label>
                    </div>
                    
                    <Table className="border-y mt-2">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-8">#</TableHead>
                                <TableHead className="w-52">Product/Services</TableHead>
                                <TableHead className="w-52">Category</TableHead>
                                <TableHead className="w-52">Description</TableHead>
                                <TableHead className="text-right w-52">Amount</TableHead>
                                <TableHead className="w-8"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">
                                    {expensesCount + 1} 
                                </TableCell>
                                <TableCell>
                                    <Input type="text" name="product" placeholder="Enter product or service"/>
                                </TableCell>
                                <TableCell>
                                    <Select name="category">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a Category"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Meals and Entertainment">Meals and Entertainment</SelectItem>
                                            <SelectItem value="Bills">Bills</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </TableCell>
                                <TableCell>
                                    <Input type="text" name="product-description" placeholder="Item Description"/>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Input type="text" name="amount" placeholder="Enter Amount (₱)"/>
                                </TableCell>
                                <TableCell> 
                                    <TrashIcon width={25} height={25} color="red" className="cursor-pointer"/> 
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                    <div className="mt-2 flex justify-between">
                        <Button type="button" variant="outline">Add Lines</Button>
                        
                        <div className="font-bold flex gap-8">
                            <h1>Total:</h1>
                            <span>₱ 0</span>
                        </div>
                    </div>
                    
                    <div className="w-1/2 flex items-center gap-4">
                        <div>
                            <Label htmlFor="product-image">Product Image</Label>
                            <Input type="file" id="product-image"></Input>
                        </div>
                        <div>
                            <Label htmlFor="receipt">Receipt</Label>
                            <Input type="file" id="receipt"></Input>
                        </div>
                    </div>

                    <div className="w-1/2">
                        <Label htmlFor="memo">Memo</Label>
                        <Textarea name="memo" placeholder="Brief Description of Purchase." id="memo"/>
                    </div>

                    <div className="flex justify-between mt-4">
                        <DialogClose asChild>
                            <Button type="submit">Save and Close</Button>
                        </DialogClose>
                        <div className="flex gap-4">
                            <Button variant="outline" type="button">Clear</Button>
                            <DialogClose asChild>
                                <Button variant="outline" type="button">Cancel</Button>
                            </DialogClose>
                        </div>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}