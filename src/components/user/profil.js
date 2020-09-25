import React, { Component } from 'react';
import '../user/profil.css'
import avatar from '../../images/avatar.jpg'

export class profil extends Component {
    render(){
        return (
        <div>
            <div className="card">
                <div>                   
                    <img alt="concours au cameroun online-school" src={avatar} className='avatar'></img>                   
                </div>  
                <div className="name">                   
                   <h3>TchoffoJean007</h3>                   
                </div> 
                <div className="about">                   
                   <h3>à propos de moi</h3> 
                   <div style={{marginTop:30}}>
                        <div className="span">
                            <span>Nom: </span>
                            <span className='text-justify'>Tchoffo</span>
                        </div>
                        <div className="span">
                            <span>Prénom: </span>
                            <span className='text-justify'>Jean Aristote</span>
                        </div>
                        <div className="span">
                            <span>Date de Naissance: </span>
                            <span className='text-justify'>12/09/2000</span>
                        </div>
                        <div className="span">
                            <span>Télephone: </span>
                            <span className='text-justify'>000000000</span>
                        </div>
                   </div>                  
                </div>

                <div className="biographie">                   
                   <h3>Biographie</h3> 
                   <div style={{marginTop:30}}>
                        <div className="span">
                            <span>biographie</span>
                        </div>
                   </div>                  
                </div>

                <div className="biographie">                   
                   <h3>Information sur le compte</h3> 
                   <div style={{marginTop:30}}>
                        <div className="span">
                            <span>Date d'inscription: </span>
                            <span className='text-justify'>25/10/2021</span>
                        </div>
                        <div className="span">
                            <span>Dernière connexion: </span>
                            <span className='text-justify'>28/10/2021</span>
                        </div>
                   </div>                  
                </div>                      
            </div>
        </div>
        );
    }
}

