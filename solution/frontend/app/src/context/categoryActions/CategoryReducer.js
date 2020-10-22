
import {
    CLEAR_ERRORS,
    CREATE_CATEGORY,
    GET_CATEGORIES,
    CATEGORY_ERROR
  }from '../types';

export default (state , action) => {
    switch(action.type) {

      
      case GET_CATEGORIES : 
        return {
            ...state,
            categories : action.payload
        }
      case  CATEGORY_ERROR : 
        return {
            ...state,
            error : action.payload
        }
      case CLEAR_ERRORS : 
         return {
          ...state,
          error: null
        }
      case CREATE_CATEGORY :
        return {
            ...state ,
            createCategoryMessage : action.payload
        } 
    }
   
    
}