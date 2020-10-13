import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../Bibliotheque/bibliotheque.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

class Bibliotheque extends Component {
    render(){
        return (
            
       <div className='bibliotheque'>
           <div id="loader">
                <Loader
                    type="ThreeDots"//Oval Rings
                    color="#660099"
                    visible={true}
                    height={80}
                    width={80}
                    timeout={3000} //3 secs
                />
           </div>
           
           <div>
           <div className='biblio_header sticky'>
                <button className="button navbar-brand" data-toggle="dropdown" style={{backgroundColor:"white",}}>
                    <a style={{color:'#660099',textTransform:'uppercase',fontSize:11}}>Catégories <span className="caret"></span></a>
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
                    <a style={{color:'#660099',textTransform:'uppercase',fontSize:11}}>Niveau<span className="caret"></span></a>
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
                    <a style={{color:'#660099',textTransform:'uppercase',fontSize:11}}>Ecole<span className="caret"></span></a>
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


            <div className="row">
                <div className="col-md-6">
                    <div className="biblio_card">
                        <div className="image-card">
                            <img  alt="concours au cameroun online-school" src={require("../../images/chimie.jpg")} style={{borderTopRightRadius:20,borderTopLeftRadius:20}} className="img-responsive"></img>
                        </div>
                        <div className="content-card">
                            <h5 style={{color:'black'}}>jkdsdks</h5>
                        </div>                     
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="biblio_card">
                        <div className="image-card">
                            <img  alt="concours au cameroun online-school" src={require("../../images/chimie.jpg")} style={{borderTopRightRadius:20,borderTopLeftRadius:20}} className="img-responsive"></img>
                        </div>
                        <div className="content-card">
                            <h5 style={{color:'black'}}>jkdsdks</h5>
                        </div>                     
                    </div>
                </div>
            </div>
        </div>
            
       </div>
        );
    }
}

export default Bibliotheque