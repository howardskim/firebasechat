import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import {Route} from 'react-router-dom';
import Home from './home';
import Chat from './chat';

const App = () => (
    <div className="container">
        <Route path="/" exact component ={Home} />
        <Route path="/chat" component = {Chat} />
    </div>
);

export default App;
