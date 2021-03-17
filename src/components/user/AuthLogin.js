import React, { Component } from 'react';
import '../user/auth.css'
import axios from 'axios'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import Platform from 'react-platform-js'


export class AuthLogin extends Component {

    constructor(props){
        super(props)
        this.state={
            failed: false,
            errors: {},
            newPasswordErrors:{},
            emailErrors:{},
            googleProfile:{},
            connectedDevice:[],
            userId:'',
            disconnectLoading:false,
            form:"connexion",
            loading: false,
            loadingVerifyEmail:false,
            loadingChangePassword:false,
            text:"mot de passe oublié?",
            userIdPassword:"",
        }
    }

    handleSubmitPassword = e =>{

        let newPasswordErrors={}
        let formIsValid = true
        this.setState({
            newPasswordErrors: newPasswordErrors,
        })
        
        e.preventDefault();
        if(this.newPassword.length<8){
            formIsValid=false
            newPasswordErrors["length"]="mot de passe trop court"
            
        }
        if(this.newPassword !== this.confirmNewPassword){
            formIsValid=false
            newPasswordErrors["newPassword"]="echec de confirmation du nouveau mot de passe"
        }
        this.setState({
            newPasswordErrors: newPasswordErrors
        })
        if(formIsValid){
            this.setState({
                loadingChangePassword:true
            })
            const data = {
                newPassword : this.newPassword,
            }
            axios.patch('/users/update/password/'+this.state.userIdPassword, data)
                .then(res=>{
                    newPasswordErrors["success"]="Mot de passe changé avec succèss"
                    this.setState({
                        loadingChangePassword:false,
                    })
                    console.log('========================================',res.data)
                })
        }
        
    }
    handleSubmitEmail = e => {
        this.setState({
            loadingVerifyEmail:true
        })
        e.preventDefault();
        let emailErrors ={}
        const data = {
            email : this.email,
        }
        console.log(data)
        axios.post('users/login/verifyEmail', data)
            .then(res =>{
                console.log(res.data)
                this.setState({
                    loadingVerifyEmail:false,
                    form:"changePassword",
                    userIdPassword:res.data.userId,
                })
            })
            .catch(err=>{
                emailErrors['form']='adresse mail incorrect'
                this.setState({
                    loadingVerifyEmail:false,
                    emailErrors:emailErrors
                })
            })
    }
    handleSubmit = e => {

        let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/")
        let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /)
        let time = "date: "+date+"/"+month+"/"+year+" à "+hour+":"+minute+":"+second

        let deviceType=""

        if(Platform.DeviceType){
            deviceType=Platform.DeviceType
        }
        let device = Platform.OS+"-"+deviceType+"-"+Platform.Browser+Platform.BrowserVersion+" "+time
      
        e.preventDefault();
        let errors ={}
        let startTime = Date.now()
        this.setState({loading: true})

        const data = {
            pseudo : this.pseudo,
            password: this.password,
            mydevice: device,
        }

        axios.post('users/login', data)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('userId', res.data.userId)
                localStorage.setItem('deviceId', res.data.deviceId)
                localStorage.setItem('startTime', startTime)
                localStorage.setItem('expiresIn' ,res.data.expiresIn)
                console.log(res.data)
                this.props.data.saveUser()
                this.setState({loading: false})
            })
            .catch(err => {
                if(err.response.data){
                    if(err.response.data.message==="maximun de connexion atteind"){
                        this.setState(
                            { 
                                connectedDevice : err.response.data.connectedDevice,
                                userId: err.response.data.userId,
                            }
                        )
                    }
                }
                if(typeof err.response !== "undefined"){
                    errors["form"] = "échec, veillez reéssayer"
                    if(err.response.data){
                        if(err.response.data.message==="maximun de connexion atteind"){
                            errors["form"] = "échec, maximun de connexion atteind"
                        }
                    }
                }else{
                    errors["form"] = "connexion mauvaise ou le serveur ne répond pas, reéssayez plus tard"
                }
                this.setState({ loading: false, errors: errors})
            })
    };
    connectedDevice=(connectedDevice)=>{
        if(connectedDevice.length>=1){
            const devices = connectedDevice.map((device)=>
                <table>
                    <tr>
                        <td style={{padding:5}}>{device.device} <button onClick={()=>{
                            let data ={
                                    id:device._id
                                }
                                this.setState({
                                    disconnectLoading:true
                                })
                                axios.patch('/users/update/connectedDevice/'+this.state.userId, data)
                                    .then(res=>{
                                        this.setState({
                                            connectedDevice:res.data.connectedDevice,
                                            disconnectLoading:false,
                                        })
                                        console.log('========================================',res.data.connectedDevice)
                                    })
                        }}> Déconnecter</button>
                        </td> 
                    </tr>
                </table>
            )
            return(
                <div style={{textAlign:'center',color:"#660099",marginBottom:25}}>
                    <h5>Appareils connectés</h5>
                    {devices}
                        <Loader
                            type="ThreeDots"//Oval Rings
                            color="#660099"
                            visible={this.state.disconnectLoading}
                            height={40}
                            width={40}
                        /> 
                </div>
            )
        }
    }
    onFailed=()=>{
        if(this.state.failed){
            return(   
                    <span>mot de passe ou pseudo incorrect</span> 
            )
        }
    }
    form=()=>{
        if(this.state.form==="connexion"){
            return(
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
                    <div style={{justifyContent:'center',display:'flex'}}>
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
            )
        }else{
            if(this.state.form==="email"){
                return(
                    <>
                        <p style={{marginLeft:"2%",color:"#660099"}}>Nous avons besoin de votre adresse mail</p>
                        <div >
                            <p style={{color: "red", textAlign: "center"}}>{this.state.emailErrors["form"]}</p>
                        </div> 
                        <form  onSubmit={this.handleSubmitEmail} className="needs-validation">           
                            <div  className='buttonModal'>
                                <input type='email' placeholder ='email' className ="form-control" name='email'
                                onChange={e => this.email = e.target.value } required />
                            </div>
                            <div style={{justifyContent:'center',display:'flex'}}>
                                <Loader
                                type="ThreeDots"//Oval Rings
                                color="#660099"
                                visible={this.state.loadingVerifyEmail}
                                height={40}
                                width={40}
                                />  
                            </div>
                            <div  className='buttonModal'>
                                <input type="submit" className="btn btn-primary form-control" value="soumettre"/>
                            </div>
                        </form>
                    </>
                )
            }else{
                if(this.state.form==="changePassword"){
                    return(
                        <form  onSubmit={this.handleSubmitPassword} className="needs-validation"> 
                            <div >
                                <p style={{color: "green", textAlign: "center"}}>{this.state.newPasswordErrors["success"]}</p>
                            </div>
                            <div >
                                <p style={{color: "red", textAlign: "center"}}>{this.state.newPasswordErrors["length"]}</p>
                            </div>
                            <div  className='buttonModal'>
                                <input type='password' placeholder ='Mot de passe' className ="form-control" name='newPassword'
                                onChange={e => this.newPassword = e.target.value} required />
                            </div> 
                            <div >
                                <p style={{color: "red", textAlign: "center"}}>{this.state.newPasswordErrors["newPassword"]}</p>
                            </div>
                            <div  className='buttonModal'>
                                <input type='password' placeholder ='confirmer le mot de passe"' className ="form-control" name='confirmNewPassword'
                                onChange={e => this.confirmNewPassword = e.target.value} required />
                            </div>
                            <div style={{justifyContent:'center',display:'flex'}}>
                                <Loader
                                type="ThreeDots"//Oval Rings
                                color="#660099"
                                visible={this.state.loadingChangePassword}
                                height={40}
                                width={40}
                            />  
                            </div> 
                            <div  className='buttonModal'>
                                <input type="submit" className="btn btn-primary form-control" value="Soumettre"/>
                            </div>
                        </form>
                    )
                }
            }
           
        }
    }
    render(){

        return (
            <div style={{marginTop:250,justifyContent:'center'}}>   
                   {this.connectedDevice(this.state.connectedDevice)}
                    {this.form()}
                <p style={{cursor:"pointer", color:"blue"}} onClick={()=>{
                    this.setState({
                        form:!this.state.form
                    })
                    if(this.state.form==="connexion"){
                        this.setState({
                            text:"Se connecter",
                            form:"email"
                        })
                    }
                    if(this.state.form==="email"){
                        this.setState({
                            text:"mot de passe oublié?",
                            form:"connexion"
                        })
                    }
                    if(this.state.form==="changePassword"){
                        this.setState({
                            text:"mot de passe oublié?",
                            form:"connexion",
                        })
                    }
                }}>{this.state.text}</p>
            </div>
        );
    }
}

