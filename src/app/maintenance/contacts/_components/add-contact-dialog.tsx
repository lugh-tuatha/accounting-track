import React from 'react'

import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function AddContactDialog() {
    return (
        <Dialog>
            <DialogTrigger className='mb-2 px-4 py-2 bg-slate-500 text-white rounded-md'>New Contact</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create New Contact</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    <Select name="payment-account">
                        <SelectTrigger>
                            <SelectValue placeholder="Select contact type"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="customer">
                                Customer
                            </SelectItem>
                            <SelectItem value="supplier">
                                Supplier
                            </SelectItem>
                            <SelectItem value="employee">
                                Employee
                            </SelectItem>
                        </SelectContent>
                    </Select>
                    <Input type="text" placeholder="Name" />
                    <Input type="text" placeholder="Phone Number" />
                    <Input type="text" placeholder="Card ID" />
                    <Textarea placeholder="Notes" />
                </div>

                <DialogFooter>
                    <Button>Add</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
