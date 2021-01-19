// import {createStore, applyMiddleware, compose} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import  rootReducer  from '../reducers'


// const initialState = {}


// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : compose;

// const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(
//     rootReducer,
//     initialState,
//     compose(applyMiddleware(thunk))
//     )
export const store = configureStore({
    reducer: rootReducer,
    })
    // compose(applyMiddleware(thunk))
    // )



export type AppStoreInterFace = ReturnType <typeof rootReducer>