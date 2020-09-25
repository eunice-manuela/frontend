import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink} from 'react-router-dom';
import {profil} from '../user/profil';
import {updateInfos} from '../user/updateInfos';
import {dashboard} from '../user/dashboard';

export class Parameters extends Component {
    
    render(){
        return(
            <Router>
                <ul className="nav navbar-nav" style={{marginLeft:'35%'}}>
                    <li>
                        <NavLink sytle={{margin: 30}} exact to="/dashboard">Tableau de bord</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profil">Mon profil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/updateInfos">Modifier mes infos</NavLink>
                    </li>
                </ul>               
            <Route>
                <Route exact path="/dashboard" component={dashboard}/>
                <Route path="/profil" component={profil}/>
                <Route path="/updateInfos" component={updateInfos}/>
            </Route>
            </Router>
        
    );
    }
}