import React, { Component } from "react";
import * as request from 'superagent'
import { url } from '../constants'



export default class Signup extends Component {
    state = {
        username: '',
        password: ''
    }
    onChangeUsername = (event) => {
        console.log('change username');
        this.setState({username: event.target.value})
    }
    onChangePassword = (event) => {
        console.log('change password');
        this.setState({password: event.target.value})
    }
    onSubmit = (event) => {
        event.preventDefault()
        console.log('username:', 
        this.state.username, 'password:', 
        this.state.password);
        request.post(`${url}/user`)
        .send({
            email: this.state.username,
            password: this.state.password
        })
        .catch(error => console.log('error', error))
        
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
            <input name="username" 
            type="text" 
            onChange={this.onChangeUsername} 
            value={this.state.username}
             placeholder="Type your username here"></input>
            <input name="password" 
            type="password" 
            onChange={this.onChangePassword}
            placeholder="Type your password here"></input>
        <button 
        type="submit" 
        value={this.state.message}>
            Signup</button>
        </form>
        );
    }
}