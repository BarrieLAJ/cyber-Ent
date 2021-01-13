import { createSelector } from "reselect";


const productsSelector = state => state.products.products

const loadStateSelector = state => state.products.loading


const activeProductSelector = createSelector(
    productsSelector,
    products => products.filter(product => product.status !== "deleted")
    )

// const loadingStateSelector = createSelector(
//     productsSelector,
//     )


export {
    productsSelector,
    loadStateSelector,
    activeProductSelector
}