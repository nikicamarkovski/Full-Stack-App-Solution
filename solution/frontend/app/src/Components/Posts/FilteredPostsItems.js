import React from 'react'


 const FilteredPostsItems = ({post}) => {
    const { post_id , title , content , category } = post 
    return (
        
        <div className="post-content">
            <p>Id: {post_id}</p>
            <p>Title: {title}</p>
            <p>Content: {content}</p>
            <p>{category}</p>
      
        </div>
       
    )
}

export default FilteredPostsItems