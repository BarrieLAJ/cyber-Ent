export interface Payment {
    _id: string
    amount: number
    balance: string
    payment_type: string
    customer?:  string
    order?: string
    status?:  string
}

export interface PaymentReducerInterface {
 payments: Payment[]
}