import React, { Component } from 'react';

class Logout extends Component{
    componentDidMount(){
        sessionStorage.clear(); 
        window.location.pathname = '/login';
    }

    render(){
        return(
            <div>
             {}
            </div>
        )
    }
}
export default Logout;