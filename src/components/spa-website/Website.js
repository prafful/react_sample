import React from 'react';
import {HashRouter, NavLink, Route} from 'react-router-dom'

import Youtube from './Youtube';
import Profile from './Profile';
import Friends from './Friends';
import Home from './Home';

import './spa.css'


class Website extends React.Component {
    

    render() { 
        return (
            <HashRouter>
            <div>
                <h1>SPA Website</h1>
                <ul className="menuheader" id="menuone">
                    <li><NavLink exact to="/">Home</NavLink> </li>
                    <li><NavLink to="/youtube">Youtube</NavLink> </li>
                    <li><NavLink to="/profile">Profile </NavLink></li>
                    <li><NavLink to="/friends">Friends </NavLink></li>
                </ul>    
                <div className="content">
                    <Route exact path="/" component={Home} /> 
                    <Route path="/youtube" component={Youtube} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/friends" component={Friends} />

                </div>    
            </div> 
            </HashRouter>   
          );
    }
}
  
export default Website;