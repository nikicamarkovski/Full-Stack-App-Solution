import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import PostContext from '../../context/postActions/PostContext';
 const PostItems = ({post}) => {
    const postContext = useContext(PostContext);
   const { post_id , title , content , category } = post 
   const sortByCategory = (e) => {
    postContext.FilterPosts(e.target.innerHTML);
    }
    return (
       
        <div className="post-content">
            <p>Id: {post_id}</p>
            <p> Title: {title}</p>
            <p>Content: {content}</p>
            <Link to='/category' onClick={sortByCategory} >{category}</Link>
            
        </div>
   
    )
}



export default PostItems;