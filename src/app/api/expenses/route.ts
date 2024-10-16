import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET() {
    try {
        const expenses = await prisma.expense.findMany();
        return NextResponse.json(expenses, { status: 200 })
    } catch (error) {
        console.error("Error fetching expenses:", error);
    }
}

export async function POST(request: NextResponse, { params }: any) {
    const body = await request.json()
    console.log(body)

    return NextResponse.json(body)
}