import $ from 'jquery';
import React, {Component} from 'react';
import axios from "axios";

import {  Change } from './Change';




class Next extends React.Component {


  state = { 
    email:'',
    password:'',
    newPassword:'',

   }
   

   handleemailChange = event => {
   
    this.setState({ email: event.target.value });
  }

  handlepasswordChange = event => {
   
    this.setState({ password: event.target.value });
  }

  handlenewPasswordChange = event => {
   
    this.setState({ newPassword: event.target.value });
  }


  handleSubmit = event => {
    event.preventDefault();
    var self=this;

    const token = localStorage.getItem('token');    

  axios.post(`http://localhost:8080/Adaptive/secure/changePassword`, {
     
    input: 
      {
    email:this.state.email,

    password:this.state.password,
   
    newPassword:this.state.newPassword}})
  
  

 
    .then(res => {
      console.log(res);
     
      self.state . authenticated= true;
      if(res.data.status="200"){
      this.props.history.push('/');
     
     
      alert("you have changed your password successfully");
      }
    
      })
      .catch(function (error, res) {
        // only get error that gives 400, but not error msg here, res isn't here
        console.log(error);
        console.log("Enter A Valid Email or Password");
        alert("Enter A Valid Email or Password");
      });
    }
  

    



  render()
   {
   
    return (
     
    <div className="bod">
   
<div >

   <div >
      <div class="container">
      <div class="row">
      <div class="col-sm-3">
      
    </div>
    
    <div align="center" class="col-sm-6">
    <br/>
    <br/>
    <div class="shadow-none p-3 mb-5 bg-light rounded">
   
    <form onSubmit={this.handleSubmit}>
         <form class="form-signin">
         
         <br/>
        
       

        <h><b>CHANGE PASSWORD</b></h>
     <br/>
     <br/>
     <br/>
       <h>Enter your Email</h>
       <label for="inputEmail" class="sr-only" >Email or Phone</label>
        <input type="text" name="email" onChange={this.handleemailChange} class="form-control" id="form_change_email" placeholder="* Email or Phone" required autofocus/>
        <span class="error_form" id="change_email_error_message"></span>
         
     <br/>
       <h>Enter Current password</h>
       <label for="inputPassword" class="sr-only">Password</label><br/>
       <input type="password" name="password" onChange={this.handlepasswordChange} id="form_change_password" class="form-control"  required autofocus />
       <span class="error_form" id="change_password_error_message"></span>

   
   <br/>
       <h>Enter New password</h>
       <label for="inputPassword" class="sr-only">Password</label><br/>
       <input type="password" name="password" onChange={this.handlenewPasswordChange} id="form_change_new_password" class="form-control"  required autofocus />
       <span class="error_form" id="change_new_password_error_message"></span>
   
   <br/>
   <br/>

           <button class="btn btn-primary" type="Submit">Submit</button>
   <br/>
   <br/>
     
</form>
        
</form>
    </div>
    </div>
    <div class="col-sm-3">
      {/*side we can use the space later*/}
    </div>
  </div>
</div>
   
    </div>

</div>

</div>

    );
  }
}

  export default Next;