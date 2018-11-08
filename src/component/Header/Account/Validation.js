import $ from 'jquery'; 
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
import React, { Component}  from 'react';


$(function() {
	 
	$("#topicname_error_message").hide();
	$("#subtopicname_error_message").hide();
	
	var error_topicname=false;	
	var error_subtopicname=false;

	$("#topicname").focusout(function() { 

		check_topicname();
		
	});

	$("#subtopicname").focusout(function() { 

		check_subtopicname();
		
	});

	function check_topicname() {
		
		var pattern = new RegExp(/[a-zA-Z.-]+[a-zA-Z]/);

		
		if(pattern.test($("#topicname").val())) {
			$("#topicname_error_message").hide();
		
		} else {
			
			$("#topicname_error_message").html("* please enter topics name");
			$("#topicname_error_message").show();
			
			error_topicname = true;
			}
	}

	function check_subtopicname() {
		
		var pattern = new RegExp(/[a-zA-Z.-]+[a-zA-Z]/);

		
		if(pattern.test($("#subtopicname").val())) {
			$("#subtopicname_error_message").hide();
		
		} else {
			
			$("#subtopicname_error_message").html("* please enter topics name");
			$("#subtopicname_error_message").show();
			
			error_subtopicname = true;
			}
	}

	
$("#topic_form").submit(function() {
		
		error_topicname = false;
	
	    check_topicname();
	
	if(error_topicname == false ) {
			

		
return true;
		} else {
			return false;	
		}

	});



$("#subtopic_form").submit(function() {
		
	error_subtopicname = false;

	check_subtopicname();

if(error_subtopicname == false ) {
		return true;
	} else {
		return false;	
	}

});

});
