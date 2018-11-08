import React, { Component } from 'react';
import {BrowserRouter ,Route,Router,Link,Switch} from 'react-router-dom';
import ejylelogo from "./ejylelogo.png";
//import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import Login from "./Account/Login";
import About from './company/About';
import Home from "./company/Home";
import Register from "./Account/Register";
import Contact from './company/Contact';
import Change from '../../component/Header/Account/Change';
import Reset from './Account/Reset';
import Next from './Account/Next';
import Exam from './Account/Exam';
//import Createexam from './Createexam';
import { Redirect } from 'react-router-dom';
//import Taketest from '../Afterlogin_pages/Taketest';


class Heading extends Component {
  constructor(props){
    super(props);
        console.log(sessionStorage.authentication);
    this.state ={
        IsAuthenticated : sessionStorage.authentication ? sessionStorage.authentication : false,
        email:''
    }
  }

  componentDidMount(){
    if(sessionStorage.email){
      this.setState({email:sessionStorage.email})
    }
  }
  onLogout = () =>{
    sessionStorage.clear(); 
    window.location.pathname = '/login';
  }

  
  render() {
    return (
     <div>
 <BrowserRouter>
 
<div>
<div class="shadow-sm p-0 mb-1 bg-white rounded" >
      <nav  class="navbar navbar-expand-lg  navbar-light navbar-fixed-top" >
      
      <a class="navbar-brand"  href="/"> <img src={ejylelogo} className="App-logo" alt="Ejyle logo" /></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button> 
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav  ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/"><h5>Home</h5></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/about"><h5>About</h5></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/contact"><h5>Contact</h5></a>
          </li>  
          {
            
            this.state.IsAuthenticated === false ? (
              
            <li class="nav-item active">
            <a class="nav-link" href="/login"><h5>Login</h5></a>
          </li>    
           ): 
            <React.Fragment>
              
                <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" /* role="dropdown" */ data-animations="fadeInDown fadeInRight fadeInUp fadeInLeft" data-toggle="dropdown" /* aria-haspopup="true" aria-expanded="false"*/>
                 {this.state.email}
                </a>
              <ul  class="dropdown-menu"> 
              <i class="fa fa-caret-down"></i>
              <Link exact to={'/Exam'}  class="dropdown-item">Create exam</Link>
              <Link exact to={'/change'}  class="dropdown-item">Change password</Link>
              
              <li><div class="dropdown-divider"></div>
                  <li><a href="/login" onClick={this.onLogout}  class="dropdown-item">Logout</a></li>
                 
                </li>
              </ul>
              </li>
            </React.Fragment>
            }
           

               
            
        </ul>
        
      </div>
      </nav>
      </div>
<Route exact path="/" component={Home}/>
<Route exact path="/about" component={About}/>
<Route exact path="/login" component={Login}/>
<Route exact path="/register" component={Register}/>
<Route exact path="/contact" component={Contact}/>
<Route exact path="/reset" component={Reset}/>
<Route exact path="/change" component={Next}/>
<Route path="/Exam" component={Exam}/>


</div>
</BrowserRouter>
   </div>
    );
  }
}

export default Heading;