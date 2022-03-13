import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAIL,
    API_ERROR,
    LOGOUT,
  } from "./types"
  // import jwt_decode from "jwt-decode"
  // import { stop_loading, start_loading } from "../actions"

  
  
  
  export const loginUserManual = ({ email, password }, history) => dispatch => {
    const body = JSON.stringify({ email, password })
  
      fetch(`http://localhost:5000/api/auth/login/`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: body
      }).then(response => response.json()).then(text=>{
        if(text.error){
          dispatch({
            type: API_ERROR,
            payload: text.error
          })
        } else if(text.token) {
          dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: email
          })
          localStorage.setItem("token", text.token)
          history('/dashboard')
        }
      }).catch(error => {
        dispatch({
          type: API_ERROR,
          payload: error
        })
      })
  }
  
  export const registerUserManual = ({username, email, password }, history) => dispatch => {
  
    const body = JSON.stringify({
      username, email, password
    })
  
    fetch(`http://localhost:5000/api/auth/signup/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: body
      }).then(response => response.json()).then(text=>{
          dispatch({
              type: REGISTER_USER_SUCCESS,
              payload: username
          })

          setTimeout(() =>{
            history('/')
          }, 1500)
      }).catch(error => {
        dispatch({
          type: API_ERROR,
          payload: error
        })
        setTimeout(()=>{
          dispatch({
            type: API_ERROR,
            payload: ''
          })
        }, 2000)
      })
  
  }
  
  export const loadUserManual = () => async (dispatch) => {
    if(localStorage.getItem('token')){
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: jwt_decode(localStorage.getItem('token'))
      })
    }
  }
  
  
  export const logoutUserManual = () => async dispatch => {
    dispatch(start_loading());
    try {
      localStorage.removeItem("token");
      dispatch({
        type: LOGOUT_USER_SUCCESS
      })
    } catch (error) {
      dispatch({
        type: LOGOUT_USER_FAIL
      })
    }
    dispatch(stop_loading());
  }
  
  export const apiError = error => {
    return {
      type: API_ERROR,
      payload: error,
    }
  }
  
  export const logoutJWT = () => async dispatch =>{
    
    fetch(`${process.env.REACT_APP_API_URL}/logout/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => response.json())
    .catch(error => console.log(error))
  }
