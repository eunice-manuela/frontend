import React, { Component } from 'react';
import '../user/auth.css'
import axios from 'axios'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import Platform from 'react-platform-js'

export class AuthSignUp extends Component {

    constructor(props){
        super(props);
   
        this.state = {
            fields: {},
            errors: {},
            loading:false,
        }
     }

    handleValidation=()=>{

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/")
        let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /)
        let time = "date: "+date+"/"+month+"/"+year+" à "+hour+":"+minute+":"+second

        let deviceType=""

        if(Platform.DeviceType){
            deviceType=Platform.DeviceType
        }
        let device = Platform.OS+"-"+deviceType+"-"+Platform.Browser+Platform.BrowserVersion+" "+time
        
       
        fields["mydevice"] = device

        // pseudo
        if(!fields["pseudo"]){
            formIsValid = false;
            errors["pseudo"] = "le pseudo doit être renseigné";
         }
        if(typeof fields["pseudo"] !== "undefined"){
            if(fields["pseudo"].length<3){
                formIsValid = false;
                errors["pseudo"] = "le pseudo doit avoir aumoins 3 caractères"
            }
        }
         /*
         if(typeof fields["pseudo"] !== "undefined"){
            if(!fields["pseudo"].match(/^[a-zA-Z]+$/)){
               formIsValid = false;
               errors["pseudo"] = "Uniquement des lettres";
            }        
         }
         */

          //Email
        if(!fields["email"]){
            formIsValid = false;
            errors["email"] = "L'adresse mail doit être renseignée";
         }
   
         if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
               formIsValid = false;
               errors["email"] = "Adresse mail non valide";
             }
        } 

        // mot de passe

        if(!fields["password"]){
            formIsValid = false;
            errors["password"] = "Un mot de passe doit être renseigné"
        }
        if(typeof fields["password"] !== "undefined"){
            if(fields["password"].length < 8){
                formIsValid = false;
                errors["password"] = "le mot de passe doit avoir aumoins 8 caractères"
            }
        }
        if(fields["password"] !== fields["confirmPassword"]){
            formIsValid = false;
            errors["confirmPassword"] = "echec de confirmation du mot de passe"
        }

        this.setState({errors: errors})
        return formIsValid
    }

    handleChange(field, e){  
        

        let fields = this.state.fields;
        fields[field] = e.target.value;
                
        this.setState({fields});
    }

    handleSubmit=(e)=>{

        let errors= {}
        let startTime = Date.now()

        e.preventDefault();
        
        this.setState({loading: true})
        
        
        if(this.handleValidation()){

            axios.post('users/signup', this.state.fields)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('expiresIn' ,res.data.expiresIn)
                localStorage.setItem('userId', res.data.userId)
                localStorage.setItem('deviceId', res.data.deviceId)
                localStorage.setItem('startTime', startTime)
                console.log(res.data)
                this.props.data.saveUser()
                this.setState({loading: false})
            })
            .catch(err => {
                if(typeof err.response !== "undefined"){
                    if(err.response.data.message.toString().toUpperCase() === "MAIL EXIST"){
                        errors["email"] = "L'adresse mail existe";
                    }else{
                        if(err.response.data.message.toString().toUpperCase() === "PSEUDO EXIST"){
                            errors["pseudo"]= "ce pseudo existe"
                        }else{
                            errors["form"] = "échec, veillez reéssayer"
                        }  
                    }
                }else{
                    errors["form"] = "connexion mauvaise ou le serveur ne répond pas, reéssayez plus tard"
                }
                
                this.setState({errors: errors, loading: false})
            })

        }else{
           console.log(this.state.errors)
        }
    }

    render(){
        return (
            <div style={{marginTop:250,justifyContent:'center',display:'flex'}}>
                <form onSubmit= {this.handleSubmit.bind(this)} className="needs-validation">
                    <div >
                        <p style={{color: "red", textAlign: "center"}}>{this.state.errors["form"]}</p>
                    </div>
                    <div className='buttonModal'>
                        <input type='email' placeholder ='Email' className ="form-control" name='email'
                        onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"] || ''} required />
                        <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                    </div>
                    <div className='buttonModal'>
                        <input type='text' placeholder ='Pseudo' className ="form-control" name='pseudo'
                        onChange={this.handleChange.bind(this, "pseudo")} value={this.state.fields["pseudo"] || ''} required />
                        <span style={{color: "red"}}>{this.state.errors["pseudo"]}</span>
                    </div>
                    <div className='buttonModal'>
                        <input type='password' placeholder ='Mot de passe (aumoins 8 caractères)' className ="form-control" name='password'
                        onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"] || ''} required />
                        <span style={{color: "red"}}>{this.state.errors["password"]}</span>
                    </div>
                    <div className='buttonModal'>
                        <input type='password' placeholder ='Confirmation du mot de passe' className ="form-control" name='confirmPassword'
                        onChange={this.handleChange.bind(this, "confirmPassword")} value={this.state.fields["confirmPassword"] || ''} required />
                        <span style={{color: "red"}}>{this.state.errors["confirmPassword"]}</span>
                    </div>
                    <div style={{justifyContent:'center',display:'flex'}}>
                        <Loader
                        type="ThreeDots"//Oval Rings
                        color="#660099"
                        visible={this.state.loading}
                        height={40}
                        width={40}
                    />  
                    </div>
                    <div className='buttonModal'>
                        <input type="submit" className="btn btn-primary form-control" value="S'abonner" />
                    </div>
                </form>
            </div>
        );
    }
}

