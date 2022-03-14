import {
    GET_DATA, POST_DATA, API_ERROR_FAIL ,
    GET_DATA1, POST_DATA1, API_ERROR_FAIL1
  } from "./types"
  
  
  export const getData = () => dispatch => {
        fetch(`http://localhost:5000/api/user-data/`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      }).then(response => response.json()).then(text=>{
        if(text.error){
          dispatch({
            type: API_ERROR_FAIL,
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
          type: API_ERROR_FAIL,
          payload: error
        })
      })
  }
  
  export const postData = (data) => async dispatch => {
    const body = JSON.stringify({ data: data.toString()})
      fetch(`http://localhost:5000/api/user-data/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: body
      }).then(response => {
        return response.json()
      }).then(text=>{
          dispatch({
              type: POST_DATA,
              payload: text
          })
      }).catch(error => {
        dispatch({
          type: API_ERROR_FAIL,
          payload: error
        })
      }) 
      
  
  }

export const PieChartGet = () => dispatch => {
  fetch(`http://localhost:5000/api/user-data-pie/`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
  }).then(response => response.json()).then(text=>{
    if(text.error){
      dispatch({
        type: API_ERROR_FAIL1,
        payload: text.error
      })
    }
    if(text.length === 0 || text.length > 0) {
      dispatch({
        type: GET_DATA1,
        payload: text
      })
    }
  }).catch(error => {
    dispatch({
      type: API_ERROR_FAIL1,
      payload: error
    })
  })
}

export const postPieChart = () => async dispatch => {
  const body = JSON.stringify({ data: data.toString()})
  fetch(`http://localhost:5000/api/user-data-pie/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: body
      }).then(response => {
        return response.json()
      }).then(text=>{
          dispatch({
              type: POST_DATA1,
              payload: text
          })
      }).catch(error => {
        dispatch({
          type: API_ERROR_FAIL1,
          payload: error
        })
      })

}
  
