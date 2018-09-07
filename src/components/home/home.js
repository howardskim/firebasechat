import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';

export default (props) => {
    return (
        <div>
            <h1 className="center">🔥FIREBASECHAT🔥</h1>
            <div className="home-container">
                <Link to="/chat" className="btn btn-large red darken-2">Start Chat</Link>
            </div>
        </div>
    )
}