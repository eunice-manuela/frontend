import React, { Component } from 'react';
import '../footer/footer.css'

export default class Footer extends Component {
    render(){
        return (    
            <footer> 
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-12 segment-one md-mb-30 sm-mb-30">
                                <h2>contactez nous</h2>
                                    <ul>
                                        <li key="number"><span className="glyphicon glyphicon-earphone" style={{marginRight:15}}></span>+237 678093445</li>
                                        <li key="email"><a href="#"><span className="glyphicon glyphicon-envelope" style={{marginRight:15}}></span>Email</a></li>
                                        <li key="RS_number"><span className="glyphicon glyphicon-send" style={{marginRight:15}}></span>678093445</li>
                                    </ul>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 segment-two md-mb-30 sm-mb-30">
                                <h2>Choisir une langue</h2>
                                <div className="row langue">
                                    <div className="col-md-2">
                                        <span className="glyphicon glyphicon-globe globe"></span>
                                    </div>
                                    <div className="col-md-2 dropup">
                                            <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Français
                                                <span className="caret"></span>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li key="français"><a href="#">Français</a></li>
                                                <li key="divider" className="divider"></li>
                                                <li key="anglais"><a href="#">Anglais</a></li>
                                            </ul>
                                    </div>
                                    </div>                                              
                            </div>

                            <div className="col-md-3 col-sm-6 col-xs-12 segment-three md-mb-30 sm-mb-30">
                                <h2>réseaux sociaux</h2>
                                <a href="#" className="social_facebook"><i className="fa fa-facebook"></i></a>
                                <a href="#" className="social_twitter"><i className="fa fa-twitter"></i></a>
                                <a href="#" className="social_instagram"><i className="fa fa-instagram"></i></a>
                                
                            </div>

                            <div className="col-md-3 col-sm-6 col-xs-12 segment-four md-mb-30 sm-mb-30">
                                <h2>Online-School</h2>
                                <ul>
                                    <li key="About"><a href="#">A propos de nous</a></li>
                                    <li key="politique"><a href="#">Politique de protection des données personnelle</a></li>
                                    <li key="Ambassadeur"><a href="#">Devenir ambassadeur</a></li>
                                </ul>
                            </div>                            
                        </div>
                    </div>
                </div>
                <p className="footer-bottom-text">Tous droits réservés, <span className="glyphicon glyphicon-copyright-mark"></span> copyright 2021</p>
            </footer>            
        );
    }
}

