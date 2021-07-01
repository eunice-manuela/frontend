import React, { Component } from 'react';
import '../ChatBox/ChatBox.css';
import Aos from 'aos';
import send from '../../images/icons/send (2).svg'
import whatsapp from '../../images/icons/whatsapp.svg'
import chatBoxIcon from '../../images/icons/chatbox-icon.svg'
import support from '../../images/icons/help.svg'
import support2 from '../../images/icons/customer-service (1).svg'
//import emojis from '../../images/icons/emojis.svg'
//import attachment from '../../images/icons/attachment.svg'
//import microphone from '../../images/icons/microphone.svg'
//import logo from '../../images/logo.jpg'


export default class ChatBox extends Component {

    
    constructor(props) {
        super(props)
        this.state={
            showChatBox:false,
            showChatButton: true,
        }
    }

    componentDidMount() {   
        Aos.init({duration : 600});
      }


    chat_box = () =>{
        if(this.state.showChatBox){
            return(
                <div className="chatbox__support" data-aos='zoom-in-left'>
                    <div className="chatbox__header" onClick={this.hideChatBox}>
                        <div className="chatbox__image--header">
                            <img src={support2} alt="aide" className="img-responsive"/>
                        </div>
                        <div className="chatbox__content--header">
                            <h4 className="chatbox__heading--header" style={{textTransform:"uppercase"}} >OnlineSchool support</h4>
                            <p className="chatbox__description--header">Posez vos questions à notre équipe. Vous pouvez aussi nous joindre par mail, whatsapp ou facebook</p>
                        </div>
                        <button><i class="fa fa-times" aria-hidden="true"></i></button>
                    </div>
                    <div className="chatbox__messages">
                        <div>
                            <div className="messages__item messages__item--visitor">
                                Can you let me talk to the support?
                            </div>
                            <div className="messages__item messages__item--operator">
                                Hi... What is it? I'm a front-end developer, yay!
                                Hi... What is it? I'm a front-end developer, yay!
                                Hi... What is it? I'm a front-end developer, yay!
                            </div>
                            <div className="messages__item messages__item--visitor">
                                Can you let me talk to the support? Can you let me talk to the support?
                                Can you let me talk to the support? Can you let me talk to the support?
                                Can you let me talk to the support? Can you let me talk to the support?
                                Can you let me talk to the support? Can you let me talk to the support?
                            </div>
                            <div className="messages__item messages__item--operator">
                                Hi... What is it? I'm a front-end developer, yay!
                            </div>
                            <div className="messages__item messages__item--visitor">
                                Can you let me talk to the support?
                            </div>
                            <div className="messages__item messages__item--operator">
                                Hi... What is it? I'm a front-end developer, yay!
                            </div>
                            
                            <div className="messages__item messages__item--typing">
                                <span className="messages__dot"></span>
                                <span className="messages__dot"></span>
                                <span className="messages__dot"></span>
                            </div>
                        </div>
                    </div>
                    <div className="chatbox__footer">
                        <textarea type="text" placeholder="Ecrire un message..."/>
                        <button className="chatbox__send--footer"><img src={send}  alt="image"/></button>  
                    </div>
                    <div>
                </div>
                </div>
            )
        }
    }
    social_chatBox = ()=>{
        if(this.state.showChatBox){
            return(
                <div className="chatbox__social" data-aos='zoom-in-left'>
                    <div className="chatbox__social__link">
                        <div className="chatbox__whatsapp">
                            <a href="#"><img src={whatsapp}  alt="image" className="img-responsive" /></a>  
                        </div>
                        <div className="chatbox__facebook">
                            <a href="#"><i className="fa fa-facebook" aria-hidden="false"></i></a>  
                        </div>
                        <div className="chatbox__mail">
                            <a href="#"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
                        </div>
                    </div>    
                </div>
            )
        }
    }
    chat_button = ()=>{
        if(this.state.showChatButton){
            return(
                <div className="chatbox__button">
                    <button onClick={this.showChatBox}><i className="fa fa-comments" aria-hidden="true"></i></button>
                </div>
            )
        } 
    }
    showChatBox =()=>{
        this.setState({
            showChatBox:!this.state.showChatBox,
            showChatButton: false
        })
    }
    hideChatBox =()=>{
        this.setState({
            showChatBox:!this.state.showChatBox,
            showChatButton:true
        })
    }


    render(){   
        return (
            <>
            <div className="container">
                <div className="chatbox">
                    {this.chat_box()}
                    {this.social_chatBox()}
                    {this.chat_button()}
                </div>
            </div>
            </>
        );
    }
}

