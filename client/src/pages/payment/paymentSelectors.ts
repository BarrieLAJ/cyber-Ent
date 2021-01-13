import {createSelector} from 'reselect'



export const totalAmoutselector = createSelector(
    state => state.payments.payments,
    payments => payments.reduce((a,b)=> (a + (+b.amount)),0)
)

export const loadStateSelector = state => state.payments.loading

export const totalBalanceSelector = createSelector(
    state => state.payments.payments,
    payments => payments.reduce((a,{balance})=>(
        a + (+balance)
      ),0)
)