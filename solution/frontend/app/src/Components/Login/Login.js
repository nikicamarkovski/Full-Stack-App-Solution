  import React, { useState, useContext, useEffect } from 'react'
  import AuthContext from "../../context/auth/AuthContext";
  import PostContext from '../../context/postActions/PostContext';
  import CategoryContext from '../../context/categoryActions/CategoryContext'
 
  const Login = props => {
  const authContext = useContext(AuthContext);
  const postContext = useContext(PostContext)
  const categoryContext = useContext(CategoryContext);
     const  { error , Login , isAuthenticated , user} = authContext;
     const { getPosts } = postContext;
     const { getAllCagerories } = categoryContext;
    const [state , setState] = useState({
    
        username:'',
        password:'',
  
    });

    useEffect(()=> {
        
        if(isAuthenticated) {
            props.history.push('/homepage');
            getPosts();
            getAllCagerories();
        }
           // eslint-disable-next-line
     } , [ error , isAuthenticated , user])
    const { username , password } = state;

    const onChange = (e)=>{
        setState({...state , [e.target.name]:e.target.value})

     }

     const onSubmit = (e)=> {
        e.preventDefault();
         Login({
            username ,
            password
        })
       
     }


     
    return (
        <div>
            <h2>Login</h2>
            <div className="formPage">
            <form className="login-form " onSubmit={onSubmit}>
            <input className="input-style" type="text" name="username" value={username} placeholder="Enter Username" onChange={onChange} ></input>
            
            <input className="input-style" type="password" name="password" value={password} placeholder="Enter Password" onChange={onChange}></input>
            <button type="submit" className="button">Login</button>
            { error != null && <p>{error}</p> }
            </form>
            
            </div>
        </div>
     
    )
}


export default Login;