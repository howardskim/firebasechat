import React, {Component} from 'react';
import './chat.css';
import {Link} from 'react-router-dom';
class Chat extends Component {
    render(){
        return (
            <div>
                <h1 className="center">Chat Room</h1>
                <div className="row right-align">
                    <Link className="btn blue darken-5" to="/">Home</Link>
                </div>
            </div>
        )
    }
}

export default Chat;