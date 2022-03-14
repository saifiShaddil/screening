import {
    GET_DATA, POST_DATA, API_ERROR_FAIL,
    GET_DATA1, POST_DATA1, API_ERROR_FAIL1
} from "./types"
  
  const initialState = {
    data:[],
    data1: [],
    error: '',
    errorPieData: ''
  }
  
  const dataReducer = (state = initialState, action) => {

    const { payload } = action;
  
    switch (action.type) {
      case GET_DATA:
        return {
          ...state,
          data: payload,
        }
      case POST_DATA:
        return {
          ...state,
          data: payload.data,
        }

      case GET_DATA1:
        return {
          ...state,
          data1: payload,
        }
      case POST_DATA1:
        return {
          ...state,
          data1: payload.data,
        }

      case API_ERROR_FAIL:
        return {
          ...state,
          error: payload,
        }
      case API_ERROR_FAIL1:
        return {
          ...state,
          errorPieData: payload,
        }


      default:
        return state
    }
    
  }
  
  export default dataReducer
  