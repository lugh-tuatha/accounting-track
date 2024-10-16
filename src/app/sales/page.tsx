import React from 'react'

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
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export default function page() {
    return (
        <main className='px-8 py-4'>
            <Breadcrumb className='mt-2 mb-4'>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Sales</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <Tabs defaultValue="overview">
                <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="sales">All Sales</TabsTrigger>
                    <TabsTrigger value="invoices">Invoices</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">Make changes to your account here.</TabsContent>
                <TabsContent value="sales">
                    <Table>
                        <TableCaption>A list of all your sales.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>No.</TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead>Memo</TableHead>
                                <TableHead>Due Date</TableHead>
                                <TableHead>Balanace</TableHead>
                                <TableHead>Total</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                            <TableCell className="font-medium">09/28/2024</TableCell>
                            <TableCell>Invoice</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>Dukes Basketball Camp</TableCell>
                            <TableCell>Monthly Payment</TableCell>
                            <TableCell>09/30/2024</TableCell>
                            <TableCell>$1.00</TableCell>
                            <TableCell>$49.00</TableCell>
                            <TableCell>Open</TableCell>
                            <TableCell className="text-right">
                                Receive Payment
                            </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TabsContent>
                <TabsContent value="invoices">Change your password here.</TabsContent>
            </Tabs>
        </main>
    )
}
