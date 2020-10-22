import React , {Component }from 'react';
import './Style.scss';
import AuthState from './context/auth/AuthState';
import PostState from './context/postActions/PostState';
import CategoryState from './context/categoryActions/CategoryState';
import setAuthToken from './utils/setAuthToken';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Navbar from './Components/Navbar/NavBar';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Posts from './Components/Posts/Posts';
import FilteredPosts from './Components/Posts/FilteredPosts';

if(localStorage.token) {

  setAuthToken(localStorage.token)
}

class App extends Component{


render() {
  return(
    <AuthState>
    <PostState>  
    <CategoryState>
   <Router>
   <Navbar/>
      <Switch>
      <Route exact path='/login' component={Login}/>
    <Route exact path = "/register" component={Register}/>
    <PrivateRoute exact path = '/homepage' component={Posts}/>
    <PrivateRoute exact path = '/category' component={FilteredPosts}/>
     </Switch>
  </Router>
  </CategoryState>
  </PostState>
    </AuthState>
  )
}
}

export default App;
