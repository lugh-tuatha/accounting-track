import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client";
import { connectDB } from "@/utils/connect-db";

const prisma = new PrismaClient()

export async function GET() {   
    try {
        const customers = await prisma.customer.findMany();
        return NextResponse.json(customers, { status: 200 })
    } catch (error) {
        console.error("Error fetching customers:", error);
    }
}

export const POST = async (req: Request) => {
    try {
        const body = await req.json();
        console.log(body)
        const { name, phone_number, bank_account_number } = body;
    } catch (error) {
        
    }
}