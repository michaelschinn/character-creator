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
            },
            "uAuth":{}
        }
        this.response = {};
    }

    componentDidUpdate(){
        console.log("component update fired!");
        if(this.response !== {}){
            console.log("authenticated");
            this.setState({
                "uAuth": this.response
            });
            sessionStorage.setItem('uAuth', JSON.stringify(this.state.uAuth));
            this.response = {};
        }
    }

    attemptLogin =  async (e) => {
        e.preventDefault();
        this.response = await Axios_Connect(this.state,'login');
    }

    render(){
        return(
            <>
                <form id='loginForm' onSubmit={this.attemptLogin}>
                    <input name="username" type='text' placeholder='username' />
                    <input name="password" type='password' placeholder='password' />
                    <button name="login" type="submit">Login</button>
                </form>
            </>
        )
    }
}