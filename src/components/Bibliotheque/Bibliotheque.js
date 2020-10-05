import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../Bibliotheque/bibliotheque.css'

class Bibliotheque extends Component {
    render(){
        return (
       <div className='bibliotheque'>
           <div>
           <div className='biblio_header sticky'>
                <button className="button navbar-brand" data-toggle="dropdown" style={{backgroundColor:"white",}}>
                    <a style={{color:'#660099'}}>Catégories <span className="caret"></span></a>
                </button>
                <ul className="dropdown-menu ul_categories">
                    <li className="li_dropdown" activeClassName="main-nav">
                    </li>
                    <li class="divider"></li>
                    <li className="li_dropdown" activeClassName="main-nav">
                        <NavLink exact to="/Parameters"><span class="glyphicon glyphicon-cog"></span>
                            Mon compte </NavLink>
                    </li>
                            
                    <li className="li_dropdown" activeClassName="main-nav">
                        <NavLink exact to="/Notifications"><span  class="glyphicon glyphicon-bell"></span>
                            Notifications </NavLink>
                    </li>
                            
                    <li className="li_dropdown" activeClassName="main-nav">
                        <a><span  className="glyphicon glyphicon-log-out"></span>
                        Déconnexion </a>
                    </li>
                </ul>
            </div>
           <div className='biblio_header sticky'>
                <button className="button navbar-brand" data-toggle="dropdown" style={{backgroundColor:"white",}}>
                    <a style={{color:'#660099'}}>Catégories <span className="caret"></span></a>
                </button>
                <ul className="dropdown-menu ul_niveau">
                    <li className="li_dropdown" activeClassName="main-nav">
                        <a style={{cursor:'default'}}><span className="glyphicon glyphicon-user"></span>
                        Tchoffo Jean Aristote</a>
                    </li>
                    <li class="divider"></li>
                    <li className="li_dropdown" activeClassName="main-nav">
                        <NavLink exact to="/Parameters"><span class="glyphicon glyphicon-cog"></span>
                            Mon compte </NavLink>
                    </li>
                            
                    <li className="li_dropdown" activeClassName="main-nav">
                        <NavLink exact to="/Notifications"><span  class="glyphicon glyphicon-bell"></span>
                            Notifications </NavLink>
                    </li>
                            
                    <li className="li_dropdown" activeClassName="main-nav">
                        <a><span  className="glyphicon glyphicon-log-out"></span>
                        Déconnexion </a>
                    </li>
                </ul>
           </div>
           <div className='biblio_header sticky'>
                <button className="button navbar-brand" data-toggle="dropdown" style={{backgroundColor:"white",}}>
                    <a style={{color:'#660099'}}>Catégories <span className="caret"></span></a>
                </button>
                <ul className="dropdown-menu ul_school">
                    <li className="li_dropdown" activeClassName="main-nav">
                        <a style={{cursor:'default'}}><span className="glyphicon glyphicon-user"></span>
                        Tchoffo Jean Aristote</a>
                    </li>
                    <li class="divider"></li>
                    <li className="li_dropdown" activeClassName="main-nav">
                        <NavLink exact to="/Parameters"><span class="glyphicon glyphicon-cog"></span>
                            Mon compte </NavLink>
                    </li>
                            
                    <li className="li_dropdown" activeClassName="main-nav">
                        <NavLink exact to="/Notifications"><span  class="glyphicon glyphicon-bell"></span>
                            Notifications </NavLink>
                    </li>
                            
                    <li className="li_dropdown" activeClassName="main-nav">
                        <a><span  className="glyphicon glyphicon-log-out"></span>
                        Déconnexion </a>
                    </li>
                </ul>
           </div>
           </div>
           <div className='biblio_body'>
           </div>
            
       </div>
        );
    }
}

export default Bibliotheque