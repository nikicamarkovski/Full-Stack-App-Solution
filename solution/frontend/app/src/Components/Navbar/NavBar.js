import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';
 const NavBar = () => {
    
    const authContext = useContext(AuthContext);
    const { isAuthenticated , Logout} = authContext;

    const guestLinks = (
         
        <> 
          
       
          <div className="navbar">
            <ul>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </ul>
        </div>
        </>
    
        )
    

        const authLinks = (
            <>
             <div className="navbar">
            <ul>
                <Link to="/login"  onClick={Logout}>Logout</Link>
               
            </ul>
        </div>
            </>
        )
    return (
        <div>
        {isAuthenticated ? authLinks : guestLinks}
        </div>
    )
}


export default NavBar;