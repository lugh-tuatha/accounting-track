
'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


import { Pie, PieChart } from "recharts"

const expensesChartData = [
    { category: "Meals", total: 755, fill: "var(--color-meals)" },
    { category: "Maintenance", total: 405, fill: "var(--color-maintenance)" },
    { category: "Automobile", total: 390, fill: "var(--color-automobile)" },
    { category: "Uncategorize Expenses", total: 636, fill: "var(--color-other)" },
]

const expensesChartConfig = {
    total: {
        label: "Total",
    },
    meals: {
        label: "Meals",
        color: "hsl(var(--chart-1))",
    },
    maintenance: {
        label: "Maintenance",
        color: "hsl(var(--chart-2))",
    },
    automobile: {
        label: "Automobile",
        color: "hsl(var(--chart-3))",
    },
    other: {
        label: "Uncategorize Expenses",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

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
                        <BreadcrumbPage>Expenses</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <h1 className='font-bold text-4xl'>LOGO</h1>

            <div className="grid grid-cols-4">
                <Card className="mt-4">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>EXPENSES</CardTitle>
                            <Select>
                                <SelectTrigger className="w-[130px]">
                                    <SelectValue placeholder="Time Range" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="365">All</SelectItem>
                                    <SelectItem value="this-month">This Month</SelectItem>
                                    <SelectItem value="7">Last 7 Days</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <h1 className="font-bold text-2xl">$2,186</h1>
                        <p className="font-light text-sm">Expenses for last 30 days</p>
                        <ChartContainer config={expensesChartConfig}>
                            <PieChart>
                                <ChartTooltip 
                                    cursor={false} 
                                    
                                    content={<ChartTooltipContent hideLabel />} 
                                />
                                <Pie data={expensesChartData} dataKey="total" cx={80} nameKey="category" innerRadius={35}/>
                            </PieChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}
