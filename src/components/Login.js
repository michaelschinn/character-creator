import { Component } from 'react';
import Axios_Connect from './Axios_Connect';
export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            "user":{
                "grant_type": "password",
                "client_id": "2",
                "client_secret": "hLsOkd8UU2AMsfYaYKQ1gG2RaVqw5ejjqxHHv4Jl",
                "password": "changeme",
                "username": "jhalljhall1@gmail.com",
                "scope": ""
            },
            "headers": {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
                "Access-Control-Allow-Credentials": true
            }
        }
    }

    attemptLogin =  async (e) => {
        e.preventDefault();
        let response = await Axios_Connect(this.state,'login');
        console.log(response);
    }

    render(){
        return(
            <>
            <form id='loginForm' onSubmit={this.attemptLogin}>
                <input type='text' placeholder='username' />
                <input type='password' placeholder='password' />
                <button type="submit">Login</button>
            </form>
            </>
        )
    }
}