import React , {useReducer} from 'react'
import axios from 'axios';
import CategoryContext from './CategoryContext'; 
import categoryReducer from './CategoryReducer'; 

import {
  GET_CATEGORIES,
  CREATE_CATEGORY ,
  CATEGORY_ERROR,
  CLEAR_ERRORS
}from '../types';

const CategoryState = props=>{
  const initialState = {
   categories: null ,
   error : null,
   createCategoryMessage : null
  }
  const [state , dispatch] = useReducer(categoryReducer , initialState);


  const config = {
    headers : {
      'Content-Type' : 'application/json'
    }
  }

 
  const getAllCagerories = async () => {
      try {
        let res = await axios.get('/categories');
        dispatch({
            type: GET_CATEGORIES,
            payload : res.data
        })
      } catch (error) {
          
      }
};
const createCategory = async (formData) => {
  try {
   let res = await axios.post('/categories' , formData , config);
   clearErrors();
    dispatch({
      type : CREATE_CATEGORY,
      payload : res.data
    })
  } catch (error) {
      dispatch({
        type : CATEGORY_ERROR,
        payload : error.response.data.error.message
      })
  }
};

const clearErrors =  ()=> {
    dispatch({
      type : CLEAR_ERRORS
    })
}
  
  return(

      <CategoryContext.Provider
      value={{
        categories : state.categories,
        error : state.error,
        createCategoryMessage : state.createCategoryMessage,

        getAllCagerories,
        createCategory

      }}
      >
           {props.children}
      </CategoryContext.Provider>
  )
}


export default CategoryState