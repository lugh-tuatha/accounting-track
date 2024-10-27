
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableCaption
} from "@/components/ui/table"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import prisma from "@/lib/prisma"

import AddContactDialog from "./_components/add-contact-dialog"

export default async function page() {
    const customers = await prisma.customer.findMany()

    return (
        <main className="px-8 py-4">
            <Breadcrumb className='mt-2'>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Maintenance</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Contacts</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <Tabs defaultValue="customer" className="w-full mt-4">
                <div className='flex justify-between'>
                    <TabsList>
                        <TabsTrigger value="customer">Customer</TabsTrigger>
                        <TabsTrigger value="suplier">Suplier</TabsTrigger>
                        <TabsTrigger value="employee">Employee</TabsTrigger>
                    </TabsList>
                    
                    <AddContactDialog />
                </div>

                <TabsContent value="customer">
                    <Table>
                        <TableCaption>A list of all customer.</TableCaption>
                        <TableHeader>   
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Company Name</TableHead>
                                <TableHead>Phone Number</TableHead>
                                <TableHead>Open Balance</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {customers.map((customer, index) => (
                                <TableRow key={index}>
                                    <TableCell>{customer.name}</TableCell>
                                    <TableCell>{customer.company_name}</TableCell>
                                    <TableCell>{customer.phone_number}</TableCell>
                                    <TableCell>₱ {customer.open_balance}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TabsContent>

                <TabsContent value="suplier">
                    <Table>
                        <TableCaption>A list of all supplier.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Product</TableHead>
                                <TableHead>Phone Number</TableHead>
                                <TableHead>Card ID</TableHead>
                                <TableHead>Company</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Mary Jairelle Mangune</TableCell>
                                <TableCell>Printer</TableCell>
                                <TableCell>09083034095</TableCell>
                                <TableCell>566433333</TableCell>
                                <TableCell>Accenture</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TabsContent>
                <TabsContent value="employee">
                    <Table>
                        <TableCaption>A list of all employee.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Phone Number</TableHead>
                                <TableHead>Card ID</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>John Doe</TableCell>
                                <TableCell>(123) 456-7890</TableCell>
                                <TableCell>553332211</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TabsContent>
            </Tabs>
        </main>
    )
}
