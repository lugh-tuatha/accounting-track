import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { getAllExpenses } from "@/lib/expenses"
import NewTransactionDIalog from "./_components/new-transaction-dialog"
import prisma from "@/lib/prisma"
import { EyeOpenIcon, Pencil2Icon, TrashIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export default async function page() {
    const { expenses } = await getAllExpenses()

    const expensesCount = await prisma.expense.count()

    const expensesByPaymentAccount = await prisma.paymentAccount.findUnique({
        where: {
            account_number: "4834423009635648"
        },
        include: {
            expenses: true
        }
    })

    return (
        <main className="px-8 py-4">
            <Breadcrumb className='mt-2 mb-4'>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Expenses</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <Tabs defaultValue="expenses">
                <TabsList>
                    <TabsTrigger value="expenses">Expenses</TabsTrigger>
                    <TabsTrigger value="vendors">Vendors</TabsTrigger>
                </TabsList>
                <TabsContent value="expenses">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-2xl">Expense Transaction ({expensesCount})</h1>

                        <div className="space-x-4">
                            <Button>Print Checks</Button>
                            <NewTransactionDIalog />
                        </div>
                    </div>

                    <Table className="mt-4">
                        <TableCaption></TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Mode of Payment</TableHead>
                                <TableHead>No.</TableHead>
                                <TableHead>Payee</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Memo</TableHead>
                                <TableHead>Total</TableHead>
                                <TableHead className="text-right w-20">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {expenses?.map(expense => (
                                <TableRow key={expense.id}>
                                    <TableCell>10/1/2024</TableCell>
                                    <TableCell>{expense.mode_of_payment}</TableCell>
                                    <TableCell>{expense.expense_number}</TableCell>
                                    <TableCell>{expense.payee}</TableCell>
                                    <TableCell>{expense.category}</TableCell>
                                    <TableCell>{expense.memo}</TableCell>
                                    <TableCell>₱ {expense.amount}</TableCell>
                                    <TableCell className="text-right flex gap-3">
                                        <Link href={`/expenses/${expense.slug}`}>
                                            <EyeOpenIcon width={20} height={20} className="cursor-pointer"/>
                                        </Link>
                                        <Pencil2Icon width={20} height={20} className="cursor-pointer"/>
                                        <TrashIcon width={20} height={20} className="cursor-pointer"/>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TabsContent>
                <TabsContent value="vendors">
                    
                </TabsContent>
            </Tabs>
        </main>
    )
}
