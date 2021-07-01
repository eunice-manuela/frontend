import React, { Component } from 'react';
import axios from 'axios'
import logo from '../../images/logo.jpg';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import Platform from 'react-platform-js'
import { nanoid } from 'nanoid'



        
const screenWith = window.innerWidth
export class Accueil extends Component {

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

        

        // pseudo
       /* if(!fields["pseudo"]){
            formIsValid = false;
            errors["pseudo"] = "le pseudo doit être renseigné";
         }
        if(typeof fields["pseudo"] !== "undefined"){
            if(fields["pseudo"].length<3){
                formIsValid = false;
                errors["pseudo"] = "le pseudo doit avoir aumoins 3 caractères"
            }
        } */
         /*
         if(typeof fields["pseudo"] !== "undefined"){
            if(!fields["pseudo"].match(/^[a-zA-Z]+$/)){
               formIsValid = false;
               errors["pseudo"] = "Uniquement des lettres";
            }        
         }
         */
            //phone
       /* if(!fields["phone"]){
            formIsValid = false;
            errors["phone"]="L'adresse mail doit être renseignée";
        }

        if(fields["phone"].length!==9){
            formIsValid = false;
            errors["phone"]= "Numéro incorrect"
        }
        if(!(/^\d+$/.test(fields["phone"]))){
            formIsValid = false;
            errors["phone"]= "Veillez utiliser uniquement des nombres"
        }else{
            let StringNumber = fields["phone"].trim()
            let firstLetter = StringNumber.substr(0,1)
            if(firstLetter!=="6"){
                errors["phone"]="Le numero de télephone doit commencer par 6"
            }
        } */

        //Operateur
        
      /*  if(this.state.operateur==="Opérateur"){
            errors["operateur"]="Veillez renseigner L'opérateur"
        }  */

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

        this.setState({errors: errors})

        return formIsValid
    }

    handleChange(field, e){  
        

        let fields = this.state.fields;
        fields[field] = e.target.value;
                
        this.setState({fields});
    }

    handleSubmit=(e)=>{
        console.log(this.state.fields)
        let errors= {}
        let startTime = Date.now()

        e.preventDefault();
        
        this.setState({loading: true})
        localStorage.setItem('isconnect', true)
        this.refreshNavBar()
        
        
        if(this.handleValidation()){
            axios.post('user/', JSON.stringify(this.state.fields))
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
                            errors["password"]= "ce password existe"
                        }else{
                            errors["form"] = "échec, veillez reéssayer"
                        }  
                    }
                }else{
                    errors["form"] = "connexion mauvaise ou le serveur ne répond pas, reéssayez plus tard"
                }
                
                this.setState({errors: errors, loading: false})
            })
            
        }

           

    }

    

    form=()=>{
        if(localStorage.disabled){
            return <h4 style={{color:"green", marginTop:100,marginBottom:100,textAlign:'center'}}>Compte créé avec success.</h4>
        }else{
            if (!localStorage.isconnect){
                return(
                    <form onSubmit= {this.handleSubmit.bind(this)} className="needs-validation">
                       
                       
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
    }


    render(){

        
        

        return(
            <div style={{marginTop:50,justifyContent:'center',marginBottom:50}}>
                <div style={{marginTop:50,marginBottom:50}} className="enTeteAmbassadeur">
                    <h1 style={{textAlign:'center', fontWeight:'bold', textTransform:'uppercase'}}>BIENVENUE!!!!</h1>
                </div>
                {this.form()}
            </div>
        );
    }
}