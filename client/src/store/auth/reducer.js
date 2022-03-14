import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAIL,
    API_ERROR,
    API_ERROR_NULL
  } from "./types"
  
  const initialState = {
    id: '',
    email: "",
    name: "",
    registered:false,
    isAuthenticated: false,
    error: '',
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
          id: payload.id,
          name: payload.username,
          email: payload.email,
          isAuthenticated: true,
          registered: false,
        }
        
      case REGISTER_USER_SUCCESS:
        return {
          ...state,
          name: payload,
          registered: true,
        }
      case API_ERROR:
        return {
          ...state,
          error: action.payload,
        }

      case API_ERROR_NULL:
        return {
          ...state,
          error: '',
        }

      case LOGOUT_USER_SUCCESS:
        return {
          ...state,
          id: '',
          name: '',
          email: '',
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
  