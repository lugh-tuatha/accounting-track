"use server"

import axios from 'axios';
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function createExpense(formData: FormData) {
    const expensesCount = await prisma.expense.count()
    const rawFormData = {
        payee: formData.get("payee") as string,
        slug: (formData.get("product-description") as string).replace(/\s+/g, "-").toLowerCase(),
        payment_date: "2030-07-03T16:00:00.000+00:00",
        mode_of_payment: formData.get("payment-method") as string,
        expense_number: expensesCount + 1,
        category: formData.get("category") as string,
        product: formData.get("product") as string,
        product_description: formData.get("product-description") as string,
        amount: Number(formData.get("amount")),
        total: Number(formData.get("amount")),
        memo: formData.get("memo") as string,
        payment_account: {
            connect: {
                id: formData.get("payment-account") as string,
            }
        }, 
    }

    await prisma.expense.create({
        data: rawFormData
    })

    revalidatePath("/expenses")

    const externalApiData = {
        product_name: rawFormData.product,
        notes: rawFormData.memo,
        purchase_cost: rawFormData.amount,
    };
    
    saveToInventory(externalApiData)
}

export async function saveToInventory(data: any) {
    try {
        const externalApiResponse = await axios.post('http://localhost:8000/v1/assets/hardware', data, {
            headers: {
                'Content-Type': 'application/json'
            },
        });
    
        console.log('Successfully posted to external API:', externalApiResponse.data);
    } catch (error) {
        console.error('Error posting to external API:', error);
    }
}

export async function editExpense(formData: FormData, id: string) {
    await prisma.expense.update({
        where: { id },
        data: {
            
        }
    })
}

export async function deleteExpense(id: string) {
    await prisma.expense.delete({ where: { id } })
}