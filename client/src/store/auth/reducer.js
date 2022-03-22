import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAIL,
    API_ERROR,
    API_ERROR_NULL,
    UPDATE_USER_FAIL,
    UPDATE_USER,
    GET_USER,
    GET_USER_FAIL
  } from "./types"
  
  const initialState = {
    id: '',
    email: "",
    name: "",
    age: "",
    gender: "",
    dob: "",
    mobile: "",
    registered:false,
    isAuthenticated: false,
    error: '',
    errorMessage: '',
    fetched: false,
    updated: false,
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
          id: payload._id,
          name: payload.name,
          email: payload.email,
          dob: payload.dob,
          age: payload.age,
          gender: payload.gender, 
          mobile: payload.mobile,
          isAuthenticated: true,
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
          email: "",
          name: "",
          age: "",
          gender: "",
          dob: "",
          mobile: "",
          registered:false,
          isAuthenticated: false,
          error: '',
          errorMessage: '',
          fetched: false,
          updated: false,
        }

        case GET_USER:
        return {
          ...state,
          name: payload.name,
          email: payload.email,
          dob: payload.dob,
          age: payload.age,
          gender: payload.gender, 
          mobile: payload.mobile,
          fetched : true,
        }
        case UPDATE_USER:
          return {
            ...state,
            name: payload.name,
            email: payload.email,
            dob: payload.dob,
            age: payload.age,
            gender: payload.gender,
            mobile: payload.mobile,
            updated:true
        }

      case GET_USER_FAIL:
        return {
          ...state,
          error: payload,
          fetched: false

        }
      case UPDATE_USER_FAIL:
        return {
          ...state,
          updateError: payload,
          updated: false
        }
      case REGISTER_USER_FAIL:
      case LOGIN_USER_FAIL:
      case LOGOUT_USER_FAIL:
      default:
        return state
    }
    
  }
  
  export default authReducer
  