
import {
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
    REGISTER_SUCCESS
  }from '../types';

export default (state , action) => {
    switch(action.type) {

        case LOGIN_SUCCESS :
        
            localStorage.setItem('token' , 'Bearer '+ action.payload.token)
           
            return {
                ...state,
                ...action.payload,
                isAuthenticated : true ,
                user : action.payload
            };

         case LOGIN_FAIL :
         case LOGOUT :
                localStorage.removeItem('token')
                console.log('da')
                    return {
                        ...state ,
                        isAuthenticated : false ,
                        user : null ,
                        error : action.payload
                    } ;

            case  REGISTER_SUCCESS:
                 
                    return{
                        ...state,
                        registerSuccess : true ,
                        register : action.payload

                    }
                    
            case CLEAR_ERRORS :
                        return {
                            ...state ,
                            error : null
                        }
            case AUTH_ERROR : 
            return  {
                ...state,
                error : action.payload
            }
                
      
    }
    
}