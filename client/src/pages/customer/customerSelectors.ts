import {createSelector} from 'reselect'


const customersSelector = state => state.customers.customers
const getCustomerId = (state,props) => props.match.params.id
const paymentsSelector = state => state.payments.payments
const ordersSelector = state => state.orders.orders

const ordersCount = createSelector([ordersSelector,getCustomerId], (orders,id) => orders.filter(order => order.customer._id === id).length)

//const ordersCount = createSelector(ordersCusSelector, orders => orders.length)

const loadStateSelector = state => state.customers.loading

const customerSelector = createSelector(
    [customersSelector, getCustomerId],
    (customers, id) => customers.find(cus => cus._id === id)
    )

const cuspaymentFilter = createSelector(
    [paymentsSelector,getCustomerId],
    (payments, cus_id) => payments.filter(payment => payment.customer._id === cus_id)
)

const cusPaymentAriasFilter = createSelector(cuspaymentFilter,
    payments => payments.filter((payment) => payment.balance >= 1))



// const customerSelector = createSelector(customersSelector,
//     customers => customer)


export {
    getCustomerId,
    loadStateSelector,
    cuspaymentFilter,
    customersSelector,
    customerSelector,
    ordersSelector,
    ordersCount,
    cusPaymentAriasFilter,
    paymentsSelector
}