import React, {Component} from 'react'
import {url} from '../constants'
import {connect} from 'react-redux'
import {addMessages} from '../actions'



 class Chatroom extends Component {

    source = new EventSource(`${url}/Stream`)

    state = {
        messages: []
    }

    componentDidMount(){
        console.log("component did mount from chat room")
       this.source.onmessage = event => {
           console.log("Got a message! ", event)
           const messages = JSON.parse(event.data)
           this.setState({
               messages
           })
           this.props.addMessages(messages)
       }
       console.log('source: ', this.source)
    
    }

    render(){
        // console.log("local state", this.setState)
        if(!this.props.messages) return "wait for messages"
        return <div>
            <ul>
                {
                    this.props.messages.map(message => 
                    <li key={message.id}> 
                    {message.message}
                    </li>)
                }
            </ul>
        </div>
    }
}
function mapStateToProps ( reduxState) {
    console.log('mstp of chatroom component', reduxState)
    return {
        messages: reduxState.message
    }
}

const mapDispatchToProps = {
    addMessages
}


export default connect(mapStateToProps, mapDispatchToProps)(Chatroom)