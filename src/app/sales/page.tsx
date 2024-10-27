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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '@/components/ui/button'

import NewInvoiceDialog from './_components/new-invoice-dialog'
import { Cross1Icon, EyeClosedIcon, FileTextIcon } from '@radix-ui/react-icons'

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
                    <h1 className="font-bold text-2xl">Sales (1)</h1>
                    <Table>
                        <TableCaption>A list of all your sales.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>No.</TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead>Memo</TableHead>
                                <TableHead className='text-right'>Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>09/28/2024</TableCell>
                                <TableCell>Invoice</TableCell>
                                <TableCell>1</TableCell>
                                <TableCell>Dukes Basketball Camp</TableCell>
                                <TableCell>Monthly Payment</TableCell>
                                <TableCell className='text-right'>₱ 49.00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TabsContent>
                <TabsContent value="invoices">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-2xl">Invoices (1)</h1>

                        <div className="space-x-4">
                            <Button>New Invoice +</Button>
                            {/* <NewInvoiceDialog /> */}
                        </div>
                    </div>

                    <Table>
                        <TableCaption>A list of all your invoices.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>No.</TableHead>
                                <TableHead>Customer/Project</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className='text-right'>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>10/27/2024</TableCell>
                                <TableCell>1</TableCell>
                                <TableCell>Clayton Yan</TableCell>
                                <TableCell>₱ 3,2045</TableCell>
                                <TableCell>Due tomorrow</TableCell>
                                <TableCell className='text-right'>
                                    <Drawer direction="right">
                                        <DrawerTrigger className='underline cursor-pointer'>View/Edit</DrawerTrigger>
                                        <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-[300px] rounded-none">
                                            <DrawerHeader className='flex items-center justify-between'>
                                                <DrawerDescription className='flex items-center'>Invoice No. 1</DrawerDescription>
                                                <DrawerClose>
                                                    <Cross1Icon />
                                                </DrawerClose>
                                            </DrawerHeader>

                                            <div className='p-4'>
                                                <h2 className='font-medium'>Total due</h2>
                                                <p className='text-4xl font-bold'>
                                                    <span className='text-xl'>₱</span>
                                                    3,2045
                                                </p>
                                                <h2 className='font-medium mt-2'>Invoice date</h2>
                                                <p className='opacity-50 text-sm'>10/27/2024</p>
                                                <h2 className='font-medium mt-2'>Due date</h2>
                                                <p className='opacity-50 text-sm'>10/28/2024</p>

                                                <h2 className='font-medium mt-6'>Invoice Activity</h2>
                                                <ul className='mt-2'>
                                                    <li className='flex gap-4'>
                                                        <span className='w-4 flex flex-col items-center gap-1 mt-1'>
                                                            <div className='w-0.5 h-4 bg-foreground/25'></div>
                                                            <div className='w-4 h-4 rounded-full bg-green-800/75'></div>
                                                            <div className='w-0.5 h-12 bg-foreground/25'></div>
                                                        </span>
                                                        <div>
                                                            <h2 className="font-medium mt-4 pt-0.5">Opened</h2>
                                                            <p className='opacity-70 text-sm mt-2'>10/27/24</p>
                                                        </div>
                                                    </li>
                                                    <li className='flex gap-4'>
                                                        <span className='w-4 flex flex-col items-center gap-1 mt-1'>
                                                            <div className='w-4 h-4 rounded-full border-2 border-foreground/25'></div>
                                                            <div className='w-0.5 h-12 bg-foreground/25'></div>
                                                        </span>
                                                        <div>
                                                            <h2 className="font-medium">Sent</h2>
                                                            <p className='opacity-70 text-sm mt-2'>-</p>
                                                        </div>
                                                    </li>
                                                    <li className='flex gap-4'>
                                                        <span className='w-4 flex flex-col items-center gap-1 mt-1'>
                                                            <div className='w-4 h-4 rounded-full border-2 border-foreground/25'></div>
                                                            <div className='w-0.5 h-12 bg-foreground/25'></div>
                                                        </span>
                                                        <div>
                                                            <h2 className="font-medium">Viewed</h2>
                                                            <p className='opacity-70 text-sm mt-2'>-</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <DrawerFooter>
                                                <Button>Edit Invoice</Button>
                                            </DrawerFooter>
                                        </DrawerContent>
                                    </Drawer>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TabsContent>
            </Tabs>
        </main>
    )
}
