import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import Modal from 'react-modal';
import {AuthLogin} from '../user/AuthLogin';
import {AuthSignUp} from '../user/AuthSignUp';
import '../Navbar/navbar.css';
import $ from 'jquery';



//#80D0D0
class Navbar extends Component {
      
    constructor(props){
        super(props)
        this.state={
            create_Account:false,
            log_in:false,
            modalVisible:false,
            isconnect:false,

        }
    }
    componentDidMount(){
    }

    deconnect=()=>{
        this.setState({
            isconnect:false,
        })
    }
    isconnect=()=>{
        if(this.state.isconnect){
            return(
                <>
                 
                    <button className="button navbar-brand" data-toggle="dropdown" style={{backgroundColor:"#660099",}}>
                        <a style={{color:'white'}}>Moi <span className="caret"></span></a>
                    </button>
                    <ul className="dropdown-menu ul_dropdown" style={{marginRight:20}}>
                        <li className="li_dropdown" activeClassName="main-nav">
                            <a style={{cursor:'default'}}><span style={styles.glyphiconDropdown} className="glyphicon glyphicon-user"></span>
                            Tchoffo Jean Aristote</a>
                        </li>
                        <li class="divider"></li>
                        <li className="li_dropdown" activeClassName="main-nav">
                            <NavLink exact to="/Parameters"><span style={styles.glyphiconDropdown} class="glyphicon glyphicon-cog"></span>
                             Mes paramètres </NavLink>
                        </li>
                        
                        <li className="li_dropdown" activeClassName="main-nav">
                            <NavLink exact to="/Notifications"><span style={styles.glyphiconDropdown} class="glyphicon glyphicon-bell"></span>
                             Notifications </NavLink>
                        </li>
                        
                        <li className="li_dropdown" activeClassName="main-nav">
                            <a><span style={styles.glyphiconDropdown} className="glyphicon glyphicon-log-out"></span>
                            Déconnexion </a>
                        </li>
                    </ul>
                   
                </>
            )
        }
    }
    isNotconnect=()=>{
        if(!this.state.isconnect){
            return(
                <>
                    <button onClick={this.isCreateAccount} className="button" style={{backgroundColor:'rgba(0,0,0,0.8)'}} >
                        <a className="navbar-brand" style={{color:'white',margin:"auto"}}>S'abonner</a>
                    </button>
                    <button onClick={this.isLogIn} className="button" style={{backgroundColor:"#660099",}} >
                        <a className="navbar-brand" style={{color:"white",margin:"auto"}}>Connexion</a>
                    </button>
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
           
        })
    } 

    isCreateAccount=()=>{
        this.setState({
            create_Account:true,
            log_in:false,
            modalVisible:true,
           
        })
    }

    closeModal=()=>{
        this.setState({
            create_Account:false,
            modalVisible:false,
            log_in:false,
            isconnect:true,
           
        })
        this.refreshNavBar()
    }
    refreshNavBar=()=> {
        window.location.reload(false)
     }

     contentModal(){
        if(this.state.log_in){
            return(
               <AuthLogin/>
            )
        }
        if(this.state.create_Account){
            return(
                <AuthSignUp/>
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
                        top: '30px',                      
                        bottom:'20px',
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
                        }
                    }}>
                         
                        <div className="column headerModal">
                        <p onClick={this.closeModal} style={{position:"relative",fontSize:30,color:'rgba(0,0,0,0.8)',cursor:'pointer'}}
                         className="glyphicon glyphicon-remove"></p>
                            <div>
                                <span className="onlineModal" >OnlineSchool</span>
                                
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

    
    render(){
        return (
            <>
            
            
            <nav className="navbar navbar-expand-sm navbar-default sticky" style={{Bottom:0,minHeight:60}}>

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
                    <li className="li_nav js-scroll-trigger" >
                        <NavLink exact to="/Search"><span className="glyphicon glyphicon-search" 
                        ></span></NavLink>
                    </li>
               
                    <li className="li_nav js-scroll-trigger">
                        <NavLink exact to="/Accueil">Accueil </NavLink>
                    </li>
                    <li className="li_nav js-scroll-trigger" >
                        <NavLink exact to="/Concours">Concours</NavLink>
                    </li>
                    <li className="li_nav js-scroll-trigger">
                        <NavLink exact to="/Examens">Examens</NavLink>
                    </li>
                    <li className="li_nav js-scroll-trigger">
                        <NavLink exact to="/Forums">Forums</NavLink>
                    </li>
                    <li className="li_nav js-scroll-trigger">
                        <NavLink exact to="/contact">Nous contacter</NavLink>
                    </li>
                    <span id="isconnectSmallScreen">
                        {this.isconnect()}
                    </span>
                    {this.isNotconnect()}
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