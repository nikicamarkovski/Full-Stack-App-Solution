import React , {useReducer} from 'react'
import axios from 'axios';
import PostContext from './PostContext';  
import postReducer from './PostReducer'; 

import {
    GET_OWN_POSTS,
    FILTER_POSTS
}from '../types';

const PostState = props=>{
  const initialState = {
    userPosts : null,
   
    filteredPosts :null
  }
  const [state , dispatch] = useReducer(postReducer , initialState);


  const config = {
    headers : {
      'Content-Type' : 'application/json'
    }
  }

  const getPosts = async () => {
      try {
        const res = await axios.get('/posts/all')
         dispatch({
             type: GET_OWN_POSTS,
             payload: res.data
         })
      } catch (error) {
          
      }
  }

 const FilterPosts = (category)=> {

    // Or i can use route from the backend and query will be \
    //"select * from Post join Category on Post.category_id = Category.category_id where 
   // (select Category.category_id where Category.name = "category1")"
    dispatch({
        type: FILTER_POSTS,
        payload : category
    })
 }
const createPosts = async (formData)=> {
    try {
        let res = axios.post('/posts' , formData , config);
        console.log(res.data);
    } catch (error) {
      
    }
}
 
   
  
  
  return(

      <PostContext.Provider
      value={{
        userPosts : state.userPosts,
        filteredPosts: state.filteredPosts,
      

        getPosts,
        FilterPosts ,
        createPosts
      

      }}
      >
          {props.children}
      </PostContext.Provider>
  )
}


export default PostState