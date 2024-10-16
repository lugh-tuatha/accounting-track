import prisma from "./prisma";

export async function getAllPaymentAccounts(){
    try {
        const paymentAccounts = await prisma.paymentAccount.findMany({})

        return { paymentAccounts }
    } catch (error) {
        return { error }
    }
}