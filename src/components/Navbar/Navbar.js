import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import Modal from 'react-modal';
import {AuthLogin} from '../user/AuthLogin';
import {AuthSignUp} from '../user/AuthSignUp';
import '../Navbar/navbar.css';
import reinitializeToken from '../../reinitialize_token'
import axios from 'axios';
import whatsapp from '../../images/icons/whatsapp.svg'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'



//#80D0D0
class Navbar extends Component {
      
    constructor(props){
        super(props)
        this.state={
            create_Account:false,
            log_in:false,
            modalVisible:false,
            loading:false,
            zIndex: 2,
            isconnect:false,
            user:'',
            disconnectLoading:false,
        }
        /*
        // code to detect when user refresh the page
        if (window.performance) {
            if (performance.navigation.type == 1) {
                 alert( "This page is reloaded");
            } else {
              alert( "This page is not reloaded");
            }
          }
          */
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    componentDidMount(){

        if(localStorage.getItem('userId')!==null){

            this.setState({isconnect:true})

            reinitializeToken().then(()=>{
                axios.get('users/'+ localStorage.getItem('userId'),{
                    headers: {
                      Authorization: 'Bearer ' + localStorage.getItem('token')
                    }}).then(
                    res => {
                        this.setState({
                            user: res.data.user
                        })
                        console.log('userData',res.data.user)
                    },
                    err => {
                        if(err.response.statusText){
                            if(err.response.statusText === 'Unauthorized'){
                                localStorage.clear()
                                this.setState({isconnect: false})
                            }
                        }
                        
                        console.log(err.response)
                    }
                )
            })
        }       
        
        this.setState({
            loading: true
        })

    }
    userName=()=>{
        if(typeof this.state.user.firstName !== 'undefined' || typeof this.state.user.lastName !== 'undefined'){
            return(
                <>
                    <li className="li_dropdown" activeClassName="main-nav">
                        <a style={{cursor:'default'}}><span style={styles.glyphiconDropdown} className="glyphicon glyphicon-user"></span>
                            {this.state.user.firstName} {this.state.user.lastName}</a>
                    </li>
                    <li className="divider"></li>
                </>
            )
        }
    }
    
    isconnect=()=>{
        if(this.state.isconnect){
            return(
                <>
                    <button className="button navbar-brand" data-toggle="dropdown" style={{backgroundColor:"#660099"}}>
                        <a style={{color:'white'}}>{this.state.user.pseudo} <span className="caret"></span></a>
                    </button>
                        
                    <ul className="dropdown-menu ul_dropdown" style={{marginRight:20}}>
                        {this.userName()}
                        
                        <li className="li_dropdown" activeClassName="main-nav">
                            <NavLink exact to="/Parameters"><span style={styles.glyphiconDropdown} className="glyphicon glyphicon-cog"></span>
                             Mon compte </NavLink>
                        </li>
                        
                        <li className="li_dropdown" activeClassName="main-nav">
                            <NavLink exact to="/Notifications"><span style={styles.glyphiconDropdown} className="glyphicon glyphicon-bell"></span>
                             Notifications </NavLink>
                        </li>
                        <li className="divider"></li>
                        <li className="li_dropdown" activeClassName="main-nav" onClick={()=>{
                            this.setState({                              
                                disconnectLoading:true
                            })
                            let data ={
                                id:localStorage.deviceId
                            }
                            axios.patch('/users/update/connectedDevice/'+localStorage.userId, data)
                                .then(res=>{
                                    this.setState({
                                        disconnectLoading:false,
                                        isconnect: false,
                                    })
                                    localStorage.clear()
                                    console.log('========================================',res.data.connectedDevice)
                                })
                        }}>
                            <a><span style={styles.glyphiconDropdown} className="glyphicon glyphicon-log-out"></span>D??connexion </a>
                            
                        </li>
                    </ul>
                    <Loader
                        type="Oval"//Oval Rings
                        color="#660099"
                        visible={this.state.disconnectLoading}
                        height={40}
                        width={40}
                    />
                </>
            )
        }
    }
    

    glyphiconSignUp=()=>{
        if(this.state.create_Account){
            return(
                <>
                    <div style={{height:2,backgroundColor:'white',marginRight:50,marginLeft:50}}>                    
                    </div>
                    <div>
                        <span className="glyphicon glyphicon-menu-down"></span>
                    </div>
                </>  
            )
        }
    }
    glyphiconLogIn=()=>{
        if(this.state.log_in){
            return(
                <>
                    <div style={{height:2,backgroundColor:'white',marginRight:50,marginLeft:50}}>                    
                    </div>
                    <div>
                        <span className="glyphicon glyphicon-menu-down"></span>
                    </div>
                </>
            )
        }
    }
    customMargin=()=>{
        var margin="35%";
        var screenWidth= parseInt(window.innerWidth,10);
        if(screenWidth<=450){
            margin = "5%"
        }else{
            if(screenWidth<=600){
                margin="15%"
            }else{
                if(screenWidth<=800){
                    margin="20%"
                }
            }
        } 
        return margin
    }
    
    isLogIn=()=>{
         this.setState({
            log_in:true,
            create_Account:false,
            modalVisible:true,
            zIndex:1, 
        })
    } 

    isCreateAccount=()=>{
        this.setState({
            create_Account:true,
            log_in:false,
            modalVisible:true,
            zIndex:1 
        })
    }

    closeModal=()=>{
        this.setState({
            create_Account:false,
            modalVisible:false,
            log_in:false,
            zIndex:2,
        })
        this.refreshNavBar()
    }
    refreshNavBar=()=> {
        window.location.reload(false)
    }

    onSaveUser = () =>{
        this.setState({
            isconnect: true,
            modalVisible: false,
        })
    }

     contentModal(){
        if(this.state.log_in){
            return(
               <AuthLogin data = {
                   {
                       user: this.state.user, 
                       saveUser: this.onSaveUser.bind(this)
                    }
                }/>
            )
        }
        if(this.state.create_Account){
            return(
                <AuthSignUp data = {
                    {
                        user: this.state.user,
                        saveUser: this.onSaveUser.bind(this)
                    }
                }/>
            )
        }
    }

    ShowModal(){
        return(
            <>       
            <div className='modal'>          
                <Modal isOpen={this.state.modalVisible} closeTimeoutMS={500}
                 contentLabel="modal" onRequestClose={this.closeModal} className='modalStyle'
                    style={{
                        overlay: {
                        position: 'fixed',
                        top:0,
                        left: 0,
                        right: 0,
                        bottom:0,
                        zIndex:1,
                        backgroundColor: 'rgba(0,0,0,0.8)'
                        },
                        content: {
                        position: 'absolute',
                        top: '75px',                      
                        bottom:'75px',
                        height:'auto',
                        right:this.customMargin(),
                        left:this.customMargin(),
                        border: '0px solid rgba(0,0,0,0.8);',
                        background: 'white',
                        overflowX:'hidden',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '10px',
                        outline: 'none',
                        padding: '0px'
                        },
                    }}>
                         
                        <div className="column headerModal">
                        <p onClick={this.closeModal} style={{position:"relative",fontSize:30,color:'rgba(0,0,0,0.8)',cursor:'pointer'}}
                         className="glyphicon glyphicon-remove"></p>
                            <div>
                                <span className="onlineModal" >kkkk</span>
                                
                            </div>
                            <div style={{padding:20}}>
                                <span style={{color:'white',textAlign:'center'}} >du texte et encore du texte encore et encore du texte</span>
                            </div>
                            <div className="row" style={{ fontWeight:"bold"}}>
                                <div style={{cursor:'pointer'}} onClick={this.isCreateAccount} className="col-xs-6">
                                    <div>
                                        <span style={{color:'white'}} >S'abonner</span>
                                    </div>
                                    <div>
                                        {this.glyphiconSignUp()}
                                    </div>
                                </div>
                                <div style={{cursor:'pointer'}} onClick={this.isLogIn} className="col-xs-6">
                                    <div>
                                        <span style={{color:'white'}} >Se connecter</span>
                                    </div>
                                    <div>
                                        {this.glyphiconLogIn()}
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    {this.contentModal()}
                </Modal>
    
            </div>
            </>
        )
    }

    navLink = () =>{
        const width = window.screen.width
        if(localStorage.isconnect){
            return(
                <>
                   
                   <li className="li_nav js-scroll-trigger">
                        <NavLink exact to="/Bibliotheque">Pr??dictions</NavLink>
                    </li>
                    <li className="li_nav js-scroll-trigger">
                        <NavLink exact to="/Examens">CArtographie</NavLink>
                    </li>
                    <li className="li_nav js-scroll-trigger">
                        <NavLink exact to="/Notifications">Rapport</NavLink>
                    </li>
                    <li className="li_nav js-scroll-trigger">
                        <NavLink exact to="/createAmbassadorAccount">Administateur</NavLink>
                    </li>
               </> 
               
            )
        }else{
            return(<></>)
        }
    }
    
    render(){

        return (
            <>
                
           
            
            <nav className="navbar navbar-expand-sm navbar-default sticky" style={{zIndex:this.state.zIndex, Bottom:0,minHeight:60}}>

                <span id="isconnectLargeScreen">
                    {this.isconnect()}
                </span>
                <img id="largeScreen" className="navbar-text" src={logo}></img>           
                <NavLink exact to="/Accueil">
                    <img id="smallScreen" className="navbar-text" style={{height:15,marginTop:20,marginLeft:10}} src={logo}></img>
                </NavLink>
                <div className="collapse navbar-collapse" id="collapse_target" style={{margin:0}}>  

                <div className='navbar-body'>
                <ul className="nav navbar-nav navbar-right ul_nav" style={{ marginTop:10, marginRight:10}} >
                    {this.navLink()}
                    <span id="isconnectSmallScreen">
                        {this.isconnect()}
                        
                    </span>
                    
                </ul>
                </div>

                {this.ShowModal()}
                </div>        


                <div className="navbar-toggle iconStyle" data-toggle="collapse" data-target="#collapse_target">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </div>
                <script type="text/javascript">
               
            </script>
                         
            </nav>
            <div style={{height:5,backgroundColor:"#c65039", marginTop:-20}}></div>
            
            </>
           
        );
    }
}
const styles={

    glyphiconDropdown:{
        margin:15
    }
}

export default Navbar