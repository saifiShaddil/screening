import {
    GET_DATA, GET_DATA_ERROR, UPDATE_DATA_ERROR, UPDATE_DATA
} from "./types"
  
  const initialState = {
    data:[],
    error: '',
    updateError: '',
  }
  
  const dataReducer = (state = initialState, action) => {

    const { payload } = action;
  
    switch (action.type) {
      case GET_DATA:
        return {
          ...state,
          data: payload,
        }
      case UPDATE_DATA:
        return {
          ...state,
          data: payload.data,
        }

      case GET_DATA_ERROR:
        return {
          ...state,
          error: payload,
        }
      case UPDATE_DATA_ERROR:
        return {
          ...state,
          updateError: payload,
        }


      default:
        return state
    }
    
  }
  
  export default dataReducer
  