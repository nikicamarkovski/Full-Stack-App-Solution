import React, { useState, useContext, useEffect } from 'react';

import AuthContext from "../../context/auth/AuthContext";
export const Register = (props) => {

    const authContext = useContext(AuthContext);
    const {registerUser ,  registerSuccess , register , error} = authContext;
    const [state , setState] = useState({
    
        username:'',
        password:'',
  
    });
    const { username , password } = state;

    const onChange = (e)=>{
        setState({...state , [e.target.name]:e.target.value})

     }

     const onSubmit = (e)=> {
        e.preventDefault();
        registerUser({username , password})
    
     }
    useEffect(()=> {
        
       console.log(register);
       console.log(error);
     } , [ registerSuccess , error])

    return (
        <div>
            <h2>Register</h2>
        <div className="formPage">
          
        <form className="login-form " onSubmit={onSubmit}>
        <input className="input-style" type="text" name="username" value={username} placeholder="Enter Username" onChange={onChange} ></input>
        
        <input className="input-style" type="password" name="password" value={password} placeholder="Enter Password" onChange={onChange}></input>
        <button type="submit" className="button">Login</button>
    { error ? <span>{error}</span> : <span>{register}</span>}
        </form>
        
    </div>
    </div>
    )
}

export default Register;
