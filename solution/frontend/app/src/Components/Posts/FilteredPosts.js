import React, { useContext, useEffect, useState  } from 'react'
import PostContext from '../../context/postActions/PostContext';
import CategoryContext from '../../context/categoryActions/CategoryContext';
import FilteredPostsItems from './FilteredPostsItems';
 const FilteredPosts = () => {
     const postContext = useContext(PostContext);
     const categoryContext = useContext(CategoryContext);
     const {filteredPosts } = postContext;
     const {createCategory , error , createCategoryMessage} = categoryContext;
    const [category , setCategory] = useState("");

        const onChange = (e)=> {
             setCategory(e.target.value)   
        }
        const onSubmit = (e)=> {
            e.preventDefault()

            createCategory({name: category});
        }
        useEffect(()=> {
            console.log(createCategoryMessage)
            console.log(error)
        }, [])
    return (
        <div>
            <h2>Create Category</h2>
            <div className="form-handle">
           <form className="login-form" onSubmit={onSubmit}> 
            <input placeholder="Name of Category" className="input-style" type="text" name="category" value={category} onChange={onChange}></input>
            <button className="button" type="submit">Submit</button>
             { error? <p>{error}</p> : <p>{createCategoryMessage}</p> }
            </form>
            </div>
            <div className='posts-holder'>
            {filteredPosts !== null && filteredPosts.map((post)=>(
                <FilteredPostsItems key={post.post_id} post={post}/>
            ))}
            </div>
        </div>
    )
}


export default FilteredPosts;