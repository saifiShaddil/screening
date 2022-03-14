import { combineReducers } from "redux"

import authReducer from './auth/reducer'
import dataReducer from './data/reducer'


const rootReducer = combineReducers({
    authReducer,
    dataReducer
})

export default rootReducer