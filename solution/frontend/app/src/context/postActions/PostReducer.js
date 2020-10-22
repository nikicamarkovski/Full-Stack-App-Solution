
import {
    GET_OWN_POSTS,
    FILTER_POSTS
  }from '../types';

export default (state , action) => {
    switch(action.type) {

       case GET_OWN_POSTS : 
        return {
            ...state,
            userPosts : action.payload
        }
        case FILTER_POSTS :
            return {
                ...state,
                ...state ,
                filteredPosts : state.userPosts.filter(post => (post.category === action.payload))
            }
      default :
       return state
    }
   
    
}