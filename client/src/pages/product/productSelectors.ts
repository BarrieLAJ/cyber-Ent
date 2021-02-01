import { createSelector } from "reselect";
import Product from "./productInterface";


const productsSelector = (state: { products: { products: any; }; }) => state.products.products

const loadStateSelector = (state: { products: { loading: any; }; }) => state.products.loading


const activeProductSelector = createSelector(
    productsSelector,
    products => products.filter((product: Product) => product.status !== "deleted")
    )

// const loadingStateSelector = createSelector(
//     productsSelector,
//     )


export {
    productsSelector,
    loadStateSelector,
    activeProductSelector
}