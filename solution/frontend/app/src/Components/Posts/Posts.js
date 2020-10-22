import React, { useContext , useState} from 'react'
import PostItems from './PostItems';
import PostContext from '../../context/postActions/PostContext';
import CategoryContext from '../../context/categoryActions/CategoryContext';
 const Posts = () => {
     const postContext = useContext(PostContext);
     const categoryContext = useContext(CategoryContext);
     const {userPosts , createPosts , getPosts} = postContext;
     const { categories } = categoryContext;
     
    const [state , setState] = useState({
    
        title:'',
        content:'',
        
  
    });
         const [category, setCategory] = useState("");
        const {title, content } = state;

    const onChange = (e)=> {
        setState({...state , [e.target.name]:e.target.value})

    }
    const onSubmin = (e)=> {
        e.preventDefault();
        createPosts({
            title,
            content,
            category
        })
        getPosts();
        
       

    }
    const Category = (e) => {
        setCategory(
          e.target.value)
    }

    return (
        <div>
            <div className="formPage">
            
            <form className="login-form" onSubmit={onSubmin}>
            <h4>Create Post</h4>
            <input className="input-style" type="text" placeholder="Title" name="title" value={title} onChange={onChange}></input> 
            <textarea className="input-style" type="text" name="content" value={content} placeholder="Content" onChange={onChange} ></textarea>
            <select className="input-style" value={category} onChange={Category}>
            { categories !== null && categories.map((category)=>(
                <option key={category.category_id} value={category.name}>{category.name}</option>
            )) }
            </select>
            <button className="button"type="submit">Submit</button>
            </form>
            
            
            </div>
        <div className="posts-holder">
            {userPosts != null && 
                userPosts.map((post)=>(
                    <PostItems key={post.post_id} post={post}/>
                ))
            }
         </div>
        </div>
    )
}



export default Posts