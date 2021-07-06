import React, { Component } from 'react';
import '../user/profil.css'
import axios from 'axios';
import reinitializeToken from '../../reinitialize_token';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

export class profil extends Component {

    constructor(props){
        super(props)
        this.state={
            display_propos:"none",
            display_bio:"none",
            display_info:"none",
            user: {},
            loading:false
        }
    }

    componentDidMount(){

        this.setState({
            loading: true
        })
        if(localStorage.getItem('userId')!==null){
            reinitializeToken().then(()=>{
                axios.get('users/'+ localStorage.getItem('userId'),{
                    headers: {
                      Authorization: 'Bearer ' + localStorage.getItem('token')
                    }}).then(
                    res => {
                        this.setState({
                            user: res.data.user,
                            loading:false
                        })
                    },
                    err => {
                        if(err.response.statusText){
                            if(err.response.statusText === 'Unauthorized'){
                                localStorage.clear()
                            }
                        }
                        
                        console.log(err.response)
                    }
                )
            })
        }      
    }
    render(){
        return (
        <div>
            <div className="profil"> 
                    <Loader
                        type="Oval"//Oval Rings
                        color="#660099"
                        visible={this.state.loading}
                        height={40}
                        width={40}
                    />
                <div>
                    <div className="navbar-brand profil_propos" style={{backgroundColor:"white",}} onClick={()=>{
                        if(this.state.display_propos==="none"){
                            this.setState({
                                display_propos: "inline-block"
                            })
                        }
                        if(this.state.display_propos==="inline-block"){
                            this.setState({
                                display_propos:"none"
                            })
                        }
                    }}>
                        <span style={{textTransform:'uppercase', color:"black", fontWeight:'bold',paddingLeft:20}}>
                            à propos de moi</span>
                    </div>                       
                    <div className="about" style={{display:this.state.display_propos}}> 
                    
                        <div style={{marginTop:30}}>
                            <div className="span">
                                <span>Nom: </span>
                                <span className='text-justify'>{this.state.user.lastName}</span>
                            </div>
                            <div className="span">
                                <span>Prénom: </span>
                                <span className='text-justify'>{this.state.user.firstName}</span>
                            </div>
                            <div className="span">
                                <span>Pseudo: </span>
                                <span className='text-justify'>{this.state.user.pseudo}</span>
                            </div>
                            <div className="span">
                                <span>Email: </span>
                                <span className='text-justify'>{this.state.user.email}</span>
                            </div>
                            <div className="span">
                                <span>Ville: </span>
                                <span className='text-justify'>{this.state.user.ville}</span>
                            </div>
                            <div className="span">
                                <span>Télephone: </span>
                                <span className='text-justify'>{this.state.user.mobileMoney}, {this.state.user.provider}</span>
                            </div>
                            <div className="span">
                                <span>Date de Naissance: </span>
                                <span className='text-justify'>{this.state.user.naissance}</span>
                            </div>
                        </div>                  
                    </div>
                </div>
                <div>
                    <div className="navbar-brand profil_bio" style={{backgroundColor:"white",}} onClick={()=>{
                        if(this.state.display_bio==="none"){
                            this.setState({
                                display_bio: "inline-block"
                            })
                        }
                        if(this.state.display_bio==="inline-block"){
                            this.setState({
                                display_bio:"none"
                            })
                        }
                    }}>
                        <span style={{textTransform:'uppercase', color:"black", fontWeight:'bold',paddingLeft:20, cursor:"pointer"}}>
                            Biographie</span>
                    </div>
                    <div className="biographie" style={{display:this.state.display_bio}}>                   
                        <div style={{marginTop:30}}>
                            <div className="span">
                                <span>Biographie</span>
                                <span className='text-justify'>{this.state.user.biographie}</span>
                            </div>
                        </div>                  
                    </div>
                </div>
                <div>
                    <div className="navbar-brand profil_propos" style={{backgroundColor:"white",}} onClick={()=>{
                        if(this.state.display_info==="none"){
                            this.setState({
                                display_info: "inline-block"
                            })
                        }
                        if(this.state.display_info==="inline-block"){
                            this.setState({
                                display_info:"none"
                            })
                        }
                    }}>
                        <span style={{textTransform:'uppercase', color:"black", fontWeight:'bold',paddingLeft:20}}>
                            Information sur le compte</span>
                    </div>
                    <div className="info" style={{display:this.state.display_info}}>                   
                        <div style={{marginTop:30}}>
                            <div className="span">
                                <span>Date d'inscription: </span>
                                <span className='text-justify'>{this.state.user.created_at}</span>
                            </div>
                            <div className="span">
                                <span>type: </span>
                                <span className='text-justify'>{this.state.user.type}</span>
                            </div>
                        </div>                  
                    </div> 
                </div> 
                <div>
                    <button id="update" className="navbar-brand profil_propos button" style={{backgroundColor:"white"}} onClick={()=>{
                        if(this.state.display_info==="none"){
                            this.setState({
                                display_info: "inline-block"
                            })
                        }
                        if(this.state.display_info==="inline-block"){
                            this.setState({
                                display_info:"none"
                            })
                        }
                        }}>
                        <span style={{color:"black", fontWeight:'bold',textAlign:'center'}}>
                            Mise à jour</span>
                    </button>
                </div>               
            </div>
        </div>
        );
    }
}

