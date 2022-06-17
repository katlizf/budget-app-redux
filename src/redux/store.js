import { createStore, combineReducers, applyMiddleware } from "redux"
import budgetReducer from "./budgetReducer"
import promiseMiddleware from 'redux-promise-middleware'
import reducer from "./userReducer"

const rootReducer = combineReducers({
    budget: budgetReducer,
    user: reducer
})

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))


export default store