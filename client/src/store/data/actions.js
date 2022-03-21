import {
    GET_DATA, GET_DATA_ERROR, UPDATE_DATA, UPDATE_DATA_ERROR
  } from "./types"
  
  
  export const getData = () => dispatch => {
        fetch(`${import.meta.env.VITE_API_VERSION}/user/`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      }).then(response => response.json()).then(text=>{
        if(text.error){
          dispatch({
            type: GET_DATA_ERROR,
            payload: text.error
          })
        }
        if(text.length === 0 || text.length > 0) {
          dispatch({
            type: GET_DATA,
            payload: text
          })
        }
      }).catch(error => {
        dispatch({
          type: GET_DATA_ERROR,
          payload: error
        })
      })
  }
  
  export const update_data = (data) => async dispatch => {
    const body = JSON.stringify({ data: data.toString()})
      fetch(`${import.meta.env.VITE_API_VERSION}/user/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: body
      }).then(response => {
        return response.json()
      }).then(text=>{
          dispatch({
              type: UPDATE_DATA,
              payload: text
          })
      }).catch(error => {
        dispatch({
          type: UPDATE_DATA_ERROR,
          payload: error
        })
      }) 
      
  
  }


  
