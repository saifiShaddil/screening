import { createStore, applyMiddleware, compose } from "redux"
import { composeWithDevTools } from "@redux-devtools/extension"
import createSagaMiddleware from "redux-saga"
import thunk from 'redux-thunk'

import rootReducer from "./reducer"

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleWare = [thunk]

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware),applyMiddleware(...middleWare)),
  // composeWithDevTools()
)

export default store
