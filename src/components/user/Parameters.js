import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink} from 'react-router-dom';
import {profil} from '../user/profil';
import {dashboard} from '../user/dashboard';
import './parameters.css';

export class Parameters extends Component {
    
    render(){
        return(
                <Router>
                    <ul className="nav navbar-nav param-navbar">
                        <li>
                            <NavLink  exact to="/">Tableau de bord</NavLink>
                        </li>
                        <li>
                            <NavLink to="/profil">Mon profil</NavLink>
                        </li>
                    </ul>               
                    <Route>
                        <Route exact path="/" component={dashboard}/>
                        <Route path="/profil" component={profil}/>
                    </Route>
                </Router>
        );
    }
}