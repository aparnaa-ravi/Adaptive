import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Next from './Next';
import { Script } from './script';

import $ from 'jquery';
//import Logout from './Logout';
//import "bootstrap/dist/css/bootstrap.min.css";
//import App from './App.css';


$(function() {
     
 
  $("#change_email_error_message").hide();
  $("#change_password_error_message").hide();
  $("#change_new_password_error_message").hide();
  
  
  var error_change_email = false;
  var error_change_password = false;
  var error_change_new_password = false;
  



  $("#form_change_email").focusout(function() {

      check_change_email();
      
  });

  $("#form_change_password").focusout(function() {

    check_change_password();
    
});

  $("#form_change_new_password").focusout(function() {

      check_change_new_password();
      
  });

  


  
  function check_change_email() {

    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

    if(pattern.test($("#form_change_email").val())) {
        $("#change_email_error_message").hide();
    } else {
        $("#change_email_error_message").html("* Invalid email address");
        $("#change_email_error_message").show();
        error_change_email = true;
    }

}

  function check_change_password() {
  
    var changepassword_length = $("#form_change_password").val().length;
    
    if(changepassword_length < 8) {
        $("#change_password_error_message").html("* At least 8 characters");
        $("#change_password_error_message").show();
        error_change_password = true;
    } else {
        $("#change_password_error_message").hide();
    }

}


  
function check_change_new_password() {
  
    var changepassword_length = $("#form_change_new_password").val().length;
    
    if(changepassword_length < 8) {
        $("#change_new_password_error_message").html("* At least 8 characters");
        $("#change_new_password_error_message").show();
        error_change_new_password = true;
    } else {
        $("#change_new_password_error_message").hide();
    }

}
  


  $("#show_hide_password a").on('click', function(event) {
      event.preventDefault();
      if($('#show_hide_password input').attr("type") == "text"){
          $('#show_hide_password input').attr('type', 'password');
          $('#show_hide_password i').addClass( "fa-eye-slash" );
          $('#show_hide_password i').removeClass( "fa-eye" );
      }
      else if($('#show_hide_password input').attr("type") == "password"){
          $('#show_hide_password input').attr('type', 'text');
          $('#show_hide_password i').removeClass( "fa-eye-slash" );
          $('#show_hide_password i').addClass( "fa-eye" );
      }
  });


  $("#change_password_registration_form").submit(function() {
      
      
      error_change_email = false;
      error_change_password = false;
      error_change_new_password = false;
      
                  
      
      check_change_email();
      check_change_password();
      check_change_new_password();
      

     
      
      if(error_change_email == false && error_change_password == false && error_change_new_password == false) {
          return true;
      } else {
          return false;   
      }

  });

});

class Change extends Component  {
 

    
    render()      {
        

    return(
      
        <React.Fragment>

                  
        </React.Fragment>
        
    
    );
  
    }
    
}


export default Change;
