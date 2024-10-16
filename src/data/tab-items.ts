import { TabItemTypes } from "@/types/sidenav";

export const transaction_items: TabItemTypes[] = [
    { 
        icon: '/images/icons/sales.png', 
        title: 'sales',
        link: 'transaction/sales' 
    },
    { 
        icon: '/images/icons/purchase.png', 
        title: 'purchase',
        link: 'transaction/purchase' 
    },
]

export const maintenance_items: TabItemTypes[] = [
    { 
        icon: '/images/icons/card.png',
        title: 'cards',
        link: 'maintenance/cards'
    },
    { 
        icon: '/images/icons/contacts.png', 
        title: 'contacts',
        link: 'maintenance/contacts' 
    },
]