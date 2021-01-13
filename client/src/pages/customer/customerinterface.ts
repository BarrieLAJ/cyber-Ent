export interface Customer  {
    _id: string;
    name:string;
    address: string;
    phone_number:string;
    status?: string;
    __v?: number
}



export interface CustomerReducerState {
    customers: Array<Customer>;
    loading: boolean;
    error: boolean;
}