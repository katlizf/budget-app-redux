import { createStore, combineReducers, applyMiddleware } from "redux"
import budgetReducer from "./budgetReducer"
import promiseMiddleware from 'redux-promise-middleware'

const rootReducer = combineReducers({budget: budgetReducer})

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))


export default store