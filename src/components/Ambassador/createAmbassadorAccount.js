import React, { Component } from 'react';
import axios from 'axios'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import Platform from 'react-platform-js'
import { nanoid } from 'nanoid'

export class createAmbassadorAccount extends Component {
    constructor(props){
        super(props);
   
        this.state = {
            fields: {},
            errors: {},
            loading:false,
            operateur:"Opérateur",
            success:""
        }
    }

    refreshNavBar=()=> {
        window.location.reload(false)
    }

    

    handleValidation=()=>{

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;


        // id_user
        if(!fields["id_user"]){
            formIsValid = false;
            errors["id_user"] = "l'id user doit être renseigné";
         }
        if(typeof fields["id_user"] !== "undefined"){
            if(fields["id_user"].length<3){
                formIsValid = false;
                errors["id_user"] = "l'id user doit avoir aumoins 3 caractères"
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
       /* if(fields["password"] !== fields["confirmPassword"]){
            formIsValid = false;
            errors["confirmPassword"] = "echec de confirmation du mot de passe"
        }*/

        this.setState({errors: errors})

        return formIsValid
    }

    handleChange(field, e){  
        

        let fields = this.state.fields;
        fields[field] = e.target.value;
                
        this.setState({fields});
        console.log(fields)
    }

    handleSubmit=(e)=>{
        console.log(this.state.fields)
        let errors= {}
        let startTime = Date.now()

        e.preventDefault();
        
        this.setState({loading: true})
        
        
        if(this.handleValidation()){

            axios.post('user/', this.state.fields)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('expiresIn' ,res.data.expiresIn)
                localStorage.setItem('userId', res.data.userId)
                localStorage.setItem('deviceId', res.data.deviceId)
                localStorage.setItem('startTime', startTime)
                localStorage.setItem('disabled',true)
                //this.props.data.saveUser()
                this.setState({loading: false})
                this.refreshNavBar()
            })
            .catch(err => {
                if(typeof err.response !== "undefined"){
                    if(err.response.data.message.toString().toUpperCase() === "MAIL EXIST"){
                        errors["email"] = "L'adresse mail existe";
                    }else{
                        if(err.response.data.message.toString().toUpperCase() === "id_user EXIST"){
                            errors["id_user"]= "cet id_user existe"
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

    form=()=>{
        if(localStorage.disabled){
            return <h4 style={{color:"green", marginTop:100,marginBottom:100,textAlign:'center'}}>Compte créé avec success.</h4>
        }else{
            return(
                <form onSubmit= {this.handleSubmit.bind(this)} className="needs-validation">
                    <div className='AmbassadorButtonModal'>
                        <h3 style={{color:"black", marginBottom:50, textAlign:'center'}}>Connectez vous avec votre compte Administateur</h3>
                        <p style={{color: "red", textAlign: "center"}}>{this.state.errors["form"]}</p>
                    </div>

                    <div className='AmbassadorButtonModal'>
                        <label>id user:</label>
                        <input type='text' placeholder ='id_user' className ="form-control" name='id user'
                        onChange={this.handleChange.bind(this, "id_user")} value={this.state.fields["id_user"] || ''} required />
                        <span style={{color: "red"}}>{this.state.errors["id_user"]}</span>
                    </div>

                    <div className='AmbassadorButtonModal'>
                        <label>name:</label>
                        <input type='text' placeholder ='name' className ="form-control" name='name'
                        onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"] || ''} required />
                        <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                    </div>

                    <div className='AmbassadorButtonModal'>
                        <label>Prenom</label>
                        <input type='text' placeholder ='prenom' className ="form-control" name='prenom'
                        onChange={this.handleChange.bind(this, "prenom")} value={this.state.fields["prenom"] || ''} required />
                        <span style={{color: "red"}}>{this.state.errors["prenom"]}</span>
                    </div>

                    <div className='AmbassadorButtonModal'>
                        <label>Email:</label>
                        <input type='email' placeholder ='Email' className ="form-control" name='email'
                        onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"] || ''} required />
                        <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                    </div>
                    
                    <div className='AmbassadorButtonModal'>
                        <label>Mot de passe:</label>
                        <input type='password' placeholder ='Mot de passe (aumoins 8 caractères)' className ="form-control" name='password'
                        onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"] || ''} required />
                        <span style={{color: "red"}}>{this.state.errors["password"]}</span>
                    </div>
        

                    <div className='AmbassadorButtonModal'>
                        <label>Type user:</label>
                        <input type='text' placeholder ='Type user' className ="form-control" name='Type user'
                        onChange={this.handleChange.bind(this, "type_user")} value={this.state.fields["type_user"] || ''} required />
                        <span style={{color: "red"}}>{this.state.errors["type_user"]}</span>
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
                    <div className='submitAmbassador'>
                        <input type="submit" className="btn btn-primary form-control" value="Soumettre" disabled={localStorage.disabled} />
                    </div>
                </form>
            )
        }
    }
    render(){
        return (
            <div style={{marginTop:50,justifyContent:'center',marginBottom:50}}>
                <div style={{marginTop:50,marginBottom:50}} className="enTeteAmbassadeur">
                    <h1 style={{textAlign:'center', fontWeight:'bold', textTransform:'uppercase'}}>Administateur</h1>
                </div>
                {this.form()}
            </div>
        );
    }
}

