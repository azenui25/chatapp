import React, {Component} from 'react'
import * as request from 'superagent'
import { url } from '../constants'



export default class ChatroomForm extends Component {
    onSubmit = (event) => {
        console.log('onSubmit of chatroom')
        request
        .post(`${url}/message`)
        .send({message: this.state.message})
    }
    state =  {message: ""}

    onChange = event => {
        console.log('onCHANGE')
        this.setState({
            message: event.target.value
        })

    }



render() {

    return(
        <div>
            <form onSubmit={this.onSubmit}>
                <input
                name="messageForm"
                type="text"
                onChange={this.onChange}
                value={this.state.message}
                placeholder= "type your message here">
                </input>
                <button type="submit" value={this.state.message}>
                    Send message
                </button>
                
            </form>
        </div>
    )
}
}