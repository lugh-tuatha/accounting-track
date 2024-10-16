import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableCaption
} from "@/components/ui/table"

import prisma from "@/lib/prisma"

export default async function page() {
    const cards = await prisma.paymentAccount.findMany()

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
                        <BreadcrumbPage>Cards</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <Table>
                <TableCaption>A list of all of your Payment Option</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Provider</TableHead>
                        <TableHead>Account Name</TableHead>
                        <TableHead>Account Number</TableHead>
                        <TableHead className="text-right">Type</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {cards.map(card => (
                        <TableRow key={card.id}>
                            <TableCell>{card.provider}</TableCell>
                            <TableCell>{card.account_name}</TableCell>
                            <TableCell>{card.account_number}</TableCell>
                            <TableCell className="text-right">{card.account_type}</TableCell>
                        </TableRow>
                    ))}
                    
                </TableBody>
            </Table>

        </main>
    )
}