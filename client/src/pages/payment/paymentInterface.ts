export interface Payment {
    _id?: string
    amount: number
    balance: number
    payment_type: string
    customer?:  string
    order?: string
    status?:  string
}

export interface PaymentReducerInterface {
 payments: Payment[]
 loading: boolean
 error: boolean
}