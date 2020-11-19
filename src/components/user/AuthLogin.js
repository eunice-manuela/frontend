import React, { Component } from 'react';
import '../user/auth.css'
import axios from 'axios'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import GoogleLogin from 'react-google-login';


export class AuthLogin extends Component {

    constructor(props){
        super(props)
        this.state={
            loading: false,
            failed: false,
            errors: {},
            googleProfile:{}
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        let errors ={}
        let startTime = Date.now()
        this.setState({loading: true})

        const data = {
            pseudo : this.pseudo,
            password: this.password
        }

        axios.post('users/login', data)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('userId', res.data.userId)
                localStorage.setItem('startTime', startTime)
                localStorage.setItem('expiresIn' ,res.data.expiresIn)

                this.props.data.saveUser()
                this.setState({loading: false})
            })
            .catch(err => {
                if(typeof err.response !== "undefined"){
                    errors["form"] = "échec, veillez reéssayer"
                }else{
                    errors["form"] = "connexion mauvaise ou le serveur ne répond pas, reéssayez plus tard"
                }
                this.setState({ loading: false, errors: errors})
            })
    };

    onFailed=()=>{
        if(this.state.failed){
            return(   
                    <span>mot de passe ou pseudo incorrect</span> 
            )
        }
    }
    render(){

        return (
            <div style={{marginTop:250}}>   
                <form  onSubmit={this.handleSubmit} className="needs-validation"> 
                    <div >
                        <p style={{color: "red", textAlign: "center"}}>{this.state.errors["form"]}</p>
                    </div>           
                    <div  className='buttonModal'>
                        <input type='text' placeholder ='Pseudo' className ="form-control" name='Pseudo'
                        onChange={e => this.pseudo = e.target.value } required />
                    </div>
                    <div  className='buttonModal'>
                        <input type='password' placeholder ='Mot de passe' className ="form-control" name='Password'
                        onChange={e => this.password = e.target.value} required />
                    </div> 
                    <div style={{color: 'red', textAlign: "center",marginBottom: 10 }}>
                        {this.onFailed()}
                    </div>
                    <div id='loader'>
                        <Loader
                        type="ThreeDots"//Oval Rings
                        color="#660099"
                        visible={this.state.loading}
                        height={40}
                        width={40}
                    />  
                    </div> 
                    <div  className='buttonModal'>
                        <input type="submit" className="btn btn-primary form-control" value="Se connecter" />
                    </div>
                </form>


            </div>
        );
    }
}

