import prisma from "./prisma";

export async function getAllExpenses() {
    try {
        const expenses = await prisma.expense.findMany({
            include: {
                payment_account: true
            }
        })
        return { expenses }
    } catch (error) {
        return { error }
    }
} 

export async function getExpenseBySlug(params: any) {
    try {
        const expense = await prisma.expense.findUnique({
            where: {
                slug: params.slug
            },
            include: {
                payment_account: true
            }
        })
    
        return { expense }
    } catch (error) {
        return { error }
    }
}
