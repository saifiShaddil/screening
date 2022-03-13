import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAIL,
    API_ERROR,
    Regsiter_User
  } from "./types"
  
  const initialState = {
    email: "",
    name: "",
    registered:false,
    isAuthenticated: false,
    error: false,
    errorMessage: ''
  }
  
  const authReducer = (state = initialState, action) => {

    const { payload } = action;
  
    if( action.type === LOGOUT_USER_SUCCESS) {
      localStorage.removeItem('token')
    }
   
  
    switch (action.type) {
  
      case LOGIN_USER_SUCCESS:
        return {
          ...state,
          email: payload,
          isAuthenticated: true,
        }
        
      case REGISTER_USER_SUCCESS:
        return {
          ...state,
          name: payload,
          registered: true
        }
      case API_ERROR:
        return {
          ...state,
          error: action.payload,
        }
      case LOGOUT_USER_SUCCESS:
        return {
          ...state,
          isAuthenticated: false,
          registered: false
        }

      case REGISTER_USER_FAIL:
      case LOGIN_USER_FAIL:
      case LOGOUT_USER_FAIL:
      default:
        return state
    }
    
  }
  
  export default authReducer
  