import React , {useReducer} from 'react'
import axios from 'axios';
import AuthContext from './AuthContext';  // import na contactContext
import authReducer from './AuthReducer'; 

import {
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  REGISTER_SUCCESS
}from '../types';

const AuthState = props=>{
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated : null,
    user:null,
    error:null,
    registerSuccess : null ,
    register : null
  }
  const [state , dispatch] = useReducer(authReducer , initialState);


  const config = {
    headers : {
      'Content-Type' : 'application/json'
    }
  }

   const  Login = async formData =>{
          try {
         
            const res = await axios.post('/login' , formData , config);
            
            dispatch({
              type: LOGIN_SUCCESS,
              payload : res.data
            })
          } catch (error) {
           
              dispatch({
                type: LOGIN_FAIL ,
                payload : error.response.data
              })
             
                
          }
        }

        const ClearError = ()=> {
          dispatch({
            type : CLEAR_ERRORS
          })
        }

        const registerUser = async formData => {
        
          try {
            const res = await axios.post('/register' , formData , config);
            ClearError()
            dispatch({
              type: REGISTER_SUCCESS,
              payload : res.data
            })
            
          } catch (error) {
            dispatch({
              type : AUTH_ERROR ,
              payload : error.response.data.error.message
            })
          }
        }
        const Logout = () => {
          dispatch({
            type: LOGOUT
          })
        }
  
  
  return(

      <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated : state.isAuthenticated,
        user : state.user,
        error: state.error,
        registerSuccess : state.registerSuccess,
        register : state.register,

        Login,
        registerUser ,
        Logout

      }}
      >
          {props.children}
      </AuthContext.Provider>
  )
}


export default AuthState