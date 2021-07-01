import React, { Component } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import '../DocumentPage/DocumentPage.css'
import Loader from 'react-loader-spinner'
import axios from 'axios';
import Aos from 'aos';
import StickyBox from "react-sticky-box";
import whatsapp from '../../images/icons/icons8-whatsapp.svg'
import reinitializeToken from '../../reinitialize_token'
//import StickyBox from "react-sticky-box/dist/esnext";
import * as os from 'os'


export default class DocumentPage extends Component {

    constructor(props) {
        super(props);

        if(props.location.documentHeader){
            sessionStorage.setItem('header',JSON.stringify(props.location.documentHeader));
            let header = JSON.parse(sessionStorage.header);
            let headerId = header._id;
            let level = header.level;
            let school = header.school;
            let subject = header.subject;
            let type = header.type;
            let year = header.year;
            let cycle = header.cycle;
            if(header.subject_number){
                let subject_number= header.subject_number
                sessionStorage.setItem('subject_number', subject_number)
                this.setState({
                    subject_number:sessionStorage.subject_number,
                })
            } 
            sessionStorage.setItem('headerId',headerId);
            sessionStorage.setItem('level',level);
            sessionStorage.setItem('school',school);
            sessionStorage.setItem('subject',subject);
            sessionStorage.setItem('type',type);
            sessionStorage.setItem('year',year)
            sessionStorage.setItem('cycle',cycle)
        }

        if(!sessionStorage.headerId){   
        }

        this.state={
            headerId:sessionStorage.headerId,
            header:sessionStorage.header,
            level:sessionStorage.level,
            school:sessionStorage.school,
            subject:sessionStorage.subject,
            type:sessionStorage.type,
            year:sessionStorage.year,
            cycle:sessionStorage.cycle,
            loading:true,
            loadingSideBox:false,
            loadingContent:false,
            document:{},
            sideBoxDocuments:{},
            color:"#c65039",
            colorText:"black",
            isHide:false,
            partId:"",
            showButton:true,
            showCollection:false,

        }
    }

    componentDidMount(){
    
        console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",navigator.platform,os);
        Aos.init({duration : 600});
        console.log("============================",this.state.level,this.state.cycle)
        reinitializeToken().then(()=>{
            axios.get('documents/'+this.state.headerId,{
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }).then(
                res => {
                    this.setState({
                        document: res.data,
                        loading: false,
                        loadingSideBox: true
                    })
                    console.log(res.data)
                    reinitializeToken().then(()=>{
                        axios.get('documents/header',{
                            headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                            },
                            params:{
                                limit:12,
                                level:this.state.level,
                                school:this.state.school,
                                subject:this.state.subject,
                                cycle:this.state.cycle,
                                type:"EPREUVE"
                            }
                        }).then(
                            res => {
                                this.setState({
                                    sideBoxDocuments: res.data.documents,
                                    loadingSideBox: false
                                })
                            },
                            err => {
                                console.log(err.response)
                            }
                        ) 
                    })
                },
                err => {
                    console.log(err.response)
                }
            ) 
        })
    }

    onChange_content=(item)=>{
        window.scroll(0,0)
        if(this.state.showCollection){
            this.setState({
                showCollection:!this.state.showCollection
            })
        }
        this.setState({
            loadingContent:true,
        })
        reinitializeToken().then(()=>{
            axios.get('documents/'+item._id,{
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }).then(
                res => {
                    if(res.data.subject_number){
                        let subject_number= res.data.subject_number
                        sessionStorage.setItem('subject_number', subject_number)
                        this.setState({
                            subject_number:sessionStorage.subject_number,
                        })
                    } 
                    
                    sessionStorage.setItem('level',res.data.level);
                    sessionStorage.setItem('school',res.data.school);
                    sessionStorage.setItem('subject',res.data.subject);
                    sessionStorage.setItem('type',res.data.type);
                    sessionStorage.setItem('year',res.data.year)
                    sessionStorage.setItem('cycle',res.data.cycle)
                    sessionStorage.setItem('headerId', res.data._id)
                    this.setState({
                        document: res.data,
                        loadingContent: false,
                        level:res.data.level,
                        school:res.data.school,
                        subject:res.data.subject,
                        type:res.data.type,
                        year:res.data.year,
                        cycle:res.data.cycle,
                        headerId:res.data._id
                    })
                    console.log("yyyyyyyyyyyy",res.data.year, sessionStorage.year)
                },
                err => {
                    console.log(err.response)
                }
            )
        }) 
    }

    onFind_correction=()=>{
        window.scrollTo(0, 0)
        this.setState({
            loadingContent:true,
        })
        const params = {
            level:this.state.level,
            school:this.state.school,
            year: this.state.year,
            subject:this.state.subject,
            type:"CORRECTION",
            cycle:this.state.cycle,
        }
        if(this.state.subject_number){
           
           //params.subject_number=this.state.subject_number
        }
        reinitializeToken().then(()=>{
            axios.get('documents/header',{
                params: params,
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }).then(
                res => {
                    console.log("======================================================================",res.data)
                    reinitializeToken().then(()=>{
                        axios.get('documents/'+res.data.documents[0]._id,{
                            headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                            }
                        }).then(
                            res => {
                                console.log(res.data)
                                this.setState({
                                    document: res.data,
                                    loadingContent: false,
                                })
                            },
                            err => {
                                console.log(err.response)
                            }
                        ) 
                    })
                },
                err => {
                    console.log(err.response)
                }
            )
        })
    }
    auteur=()=>{
        if(this.state.document.type){
            if((this.state.document.type).toLowerCase()!='epreuve'){
                return(
                    <h6>Auteur: OnLine-School</h6>
                )
            }else{
                return(
                    <h6>Durée: {this.state.document.duration}</h6>
                )
            }
        }
        
    }

    figure=(figs)=>{
        if(figs){
            const figures= figs.map((fig)=>
                <div className="figure_component">
                    <img  alt={fig.description} src={require("../../images/chimie.jpg")} 
                        className="img-responsive"></img>
                    <h6 className="figure_description">figure {fig.number}: {fig.description}</h6>
                </div>
            )
            return(
                <div>
                    {figures}
                </div>
            )
        }  
    }

    proposition=(propositions)=>{
        if(propositions){
            const props =propositions.map((prop)=>
                <div>
                    <p className="proposition_statement"><span>{prop.indice} )</span>{prop.statement}</p>
                    <div>
                        {this.figure(prop.figure)}
                    </div>
                </div>
            )
            return(
                <div>
                    {props}
                </div>
            )
        } 
    }

    question=(questions)=>{
        if(questions){
            const quests=questions.map((quest)=>
                <div>
                    <h6 className="question_title">Question {quest.number}</h6>
                    <p className="question_statement">{quest.statement}</p>
                    <div>
                        {this.figure(quest.figure)}
                    </div>
                    <div>
                        {this.proposition(quest.proposition)}
                    </div>
                </div>
            )
            return(
                <div>
                    {quests}
                </div>
            )
        }
        
    }

    sub_sub_question=(sub_sub_questions)=>{
        if(sub_sub_questions){
            const sub_sub_quests=sub_sub_questions.map((sub_sub_quest)=>
                <div>
                    <p className="sub_sub_question_statement"><span>{sub_sub_quest.indice} )</span>{sub_sub_quest.statement}</p>
                </div>
            )
            return(
                <div>
                    {sub_sub_quests}
                </div>
            )
        }
    }

    sub_question=(sub_questions)=>{
        if(sub_questions){
            const sub_quests=sub_questions.map((sub_quest)=>
                <div>
                    <p className="sub_question_statement"><span>{sub_quest.indice} )</span> {sub_quest.statement}</p>
                    <div>
                        {this.figure(sub_quest.figure)}
                    </div>
                    <div>
                        {this.sub_sub_question(sub_quest.sub_sub_question)}
                    </div>
                </div>
            )
            return(
                <div>
                    {sub_quests}
                </div>
            )
        } 
    }

    ex_question=(ex_questions)=>{
        if(ex_questions){
            const ex_quests=ex_questions.map((ex_quest)=>
                <div>
                    <p className="ex_question_statement"><span style={{fontWeight:'bold'}}>{ex_quest.number} )</span> {ex_quest.statement}</p>
                    <div>
                        {this.figure(ex_quest.figure)}
                    </div>
                    <div>
                        {this.sub_question(ex_quest.sub_question)}
                    </div>
                </div>
            )
            return(
                <div>
                    {ex_quests}
                </div>
            )
        }  
    }

    exercice=(exercices)=>{
        if(exercices){
            const exos = exercices.map((exo)=>
                <div>
                    <div id="justifyContentExercice" onClick={e=>this.hide_show(exo.number)}>
                        <div><h5 className="exercice_title">Exercices {exo.number} </h5></div>
                        <div>{this.iconIsHide(exo.number)}</div>
                    </div>
                    <div style={{height:1,backgroundColor:"#c65039"}}></div>
                    <div id={exo.number}>
                        <p  className="exercice_statement">{exo.statement}</p>
                        <div>
                            {this.figure(exo.figure)}
                        </div>
                        <div>
                            {this.ex_question(exo.question)}
                        </div>
                    </div>
                </div>
            )
            return(
                <div>
                    {exos}
                </div>
            )
        }
    }

    iconIsHide=(id)=>{
        if(this.state.isHide){
            if(this.state.partId===id){
                return <h3 className="glyphicon glyphicon-menu-right hide_content_icon"></h3>
            }else{
                return <h3 className="glyphicon glyphicon-menu-down hide_content_icon"></h3>
            }
        }else{
            return <h3 className="glyphicon glyphicon-menu-down hide_content_icon"></h3>
        }
    }

    hide_show=(id)=>{
        this.setState({
            partId:id
        })
        let x = document.getElementById(id);
        if (x.style.display === "none") {
            x.style.display = "block";
            this.setState({
                isHide:false
            })
        } else {
            x.style.display = "none";
            this.setState({
                isHide:true
            })
        }
    }

    part=()=>{
        if(this.state.loadingContent){
            return(
                <div id="loader" style={{marginLeft:'30%',marginRight:'30%'}}>
                    <Loader
                        type="TailSpin"//Oval Rings
                        color="#660099"
                        visible={true}
                        height={80}
                        width={80}
                        //timeout={3000} //3 secs
                    />
                </div>
            )
        }else{
            if(this.state.document.content.part){
                const part = this.state.document.content.part.map((p)=>
                    <div className="part">
                        <h5 style={{color:'black', fontSize:15}}>{this.state.document.content.description}</h5>
                        <div id="justifyContentPart" onClick={e=>this.hide_show(p.number+p.title)}>
                            <div><h3 className="part_title">Partie {p.number}: {p.title}</h3></div>
                            <div>{this.iconIsHide(p.number+p.title)}</div>   
                        </div>
                       
                        <div style={{height:1,backgroundColor:"#c65039"}}></div>
                        <div id={p.number+p.title}>
                            <div>
                                {this.question(p.question)}
                            </div>
                            <div>
                                {this.exercice(p.exercice)}
                            </div>
                        </div>
                    </div>
                )
                return(
                    <div>
                        {part}
                    </div>
                )
            }
        }  
    }

    liColor=(item)=>{
        if(item._id===this.state.headerId){
            return(
                <><span className="glyphicon glyphicon-check" style={{marginRight:10, color:this.state.color}}></span><span style={{color: this.state.colorText,fontWeight:'bolder',fontSize:16}}>
                    {item.type} de {item.subject} {item.subject_number}, Année {item.year} Niveau {item.level} - {item.school} - {item.cycle}</span></>
            )
        }else{
            return(
                <span >{item.type} de {item.subject} 
                {item.subject_number}, Année {item.year} Niveau {item.level}-{item.school}-{item.cycle}</span>
            )
        }
    }

    sideBoxBody=()=>{
        if(this.state.loadingSideBox){
            return(
                <div id="loader">
                    <Loader
                        type="TailSpin"//Oval Rings
                        color="#660099"
                        visible={true}
                        height={80}
                        width={80}
                        //timeout={3000} //3 secs
                    />
                </div>
            )   
        }else{
            const sideBoxContent = this.state.sideBoxDocuments.map((item)=>
            <>
                <li onClick={e=>this.onChange_content(item)} key={item.id} >{this.liColor(item)}</li>
            </>
            )
            return(
                <>
                    {sideBoxContent}
                </>
            )
        }
    }

    StickyBox=()=>{
        return(
            <StickyBox offsetTop={50} offsetBottom={20}>
                <div className="sideBoxHeader">
                    <h3>Dans la même collection</h3>
                </div>
                <div className="sideBoxBody">
                    <ul>
                        {this.sideBoxBody()}
                    </ul>
                </div>
                <div className="shareBoxHeader">
                    <h4 style={{textAlign:'center',paddingTop:10,}}>Partager</h4>
                </div>
                <div className="sideBoxFooter">
                    <div className="social_link social_facebook">
                        <a href="#"><i className="fa fa-facebook" aria-hidden="false"></i></a>  
                    </div>
                    <div className="social_link social_twitter">
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    </div> 
                    <div className="social_link social_instagram">
                        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    </div> 
                    <div className="social_link">
                        <a href="#"><img src={whatsapp}  alt="image" className="img-responsive" /></a>  
                    </div>
                </div>
            </StickyBox>
        )
    }
    collection_box=()=>{
        if(this.state.showCollection){
            return (
                <div className="collection_box" data-aos='zoom-in-left'>
                    {this.StickyBox()}
                </div>
            )
        }
    }
    showCollectionBox=()=>{
        this.setState({
            showCollection:!this.state.showCollection,
        })
    }
    Collection_button = ()=>{
        if(this.state.showButton){
            return(
                <div className="collection_button">
                    <button onClick={this.showCollectionBox}><i className="fa fa-plus" aria-hidden="true"></i></button>
                </div>
            )
        } 
    }
    content=()=>{
        return(
            <>
                <div className="col-xs-0 col-sm-1 col-md-1">
                </div>
                <div className="col-xs-0 col-sm-2 col-md-2 document_left_side">
                    <h1></h1>
                </div>
                <div className="col-xs-12 col-sm-8 col-md-8 document_center">
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                        {this.part()}
                        {this.collection_box()}
                        <div className="stickySideBox">
                            {this.StickyBox()}
                        </div>
                    </div>
                </div>
                <div className="col-xs-0 col-sm-1 col-md-1">  
                </div>
            </>
        )
    }

    docContentOrLoader=()=>{
        if(this.state.loading){
            return(
                <div id="loader">
                    <Loader
                        type="ThreeDots"//Oval Rings
                        color="#660099"
                        visible={true}
                        height={80}
                        width={80}
                        //timeout={3000} //3 secs
                    />
                </div>
            )
            
        }else{
            return (
                <div className="documentPage">
                    <div style={{backgroundColor:"#660099",marginTop:0, marginBottom:0}}>
                        <div className="title">
                            <h4>{this.state.document.type} de {this.state.document.subject} {this.state.document.subject_number}, Année {this.state.document.year}</h4>
                            <h5> Niveau {this.state.document.level}-{this.state.document.school}-{this.state.document.cycle}</h5> 
                        </div>
                        <div className ="description">
                            {this.auteur()}
                            <h6>Mis à jour le 27/05/2021 par OnLine-School</h6>
                            <h6>Aucun téléchargement disponible</h6>
                            <h6>Vous pouvez partager sur les réseaux sociaux</h6>
                        </div>
                    </div>
                    <div style={{height:5,backgroundColor:"#c65039"}}></div>
                    {this.content()} 
                </div>
            )
        }
    }
    button_correction=()=>{
        if(!this.state.loadingContent && !this.state.loading){
            return(
                <button className="button button_correction navbar-brand" style={{backgroundColor:"white",zIndex:0}}
                    onClick={e=>this.onFind_correction()}>
                    <a style={{color:'#660099',textTransform:'uppercase',fontSize:14, fontWeight:'bold'}}>
                        Voir la correction
                    </a>
                </button>
            )
        }
    }

    goToTop=()=>{
        window.scrollTo(0, 0)
    }
    goToBottom=()=>{
        window.scrollTo(0,document.body.scrollHeight-1000);
    }
    buttonGoToTop=()=>{
        if(!this.state.loadingContent && !this.state.loading){
            return(
                <div className="goToTop" data-aos='zoom-in-up'>
                    <button><p>
                        <span onClick={this.goToBottom}><span className="glyphicon glyphicon-chevron-down"></span> BAS </span>
                        <span style={{color:"#c65039" }}>|</span>
                        <span onClick={this.goToTop}> HAUT <span className="glyphicon glyphicon-chevron-up"></span></span>
                    </p></button>
                </div>
            )
        }
    }

    render(){
        return(
            <div >
                <div className="row"> 
                    {this.docContentOrLoader()}
                </div>
                <div style={{justifyContent:"center",display:"flex"}}>
                    {this.button_correction()}
                </div>
                <div>
                    {this.Collection_button()}
                </div>
                    {this.buttonGoToTop()}
            </div>
        )
        
    }
}