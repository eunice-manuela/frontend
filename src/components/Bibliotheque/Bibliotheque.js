import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../Bibliotheque/bibliotheque.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Pagination from "react-js-pagination";
import Loader from 'react-loader-spinner'
import axios from 'axios';
import ChatBox from '../ChatBox/ChatBox'



const dataCard={
    content:[
        {
            image:"../../images/chimie.jpg",
            categorie:"concours",
            niveau:"baccalauréat",
            ecole:"ENSPY",
            type:"epreuve",
            annee:"2011-2020",
            description:"Cycle des Ingénieurs dans les filières des Sciences et Technologies",
        },
        {
            image:"../../images/chimie.jpg",
            categorie:"concours",
            niveau:"baccalauréat",
            ecole:"ENSPY",
            type:"epreuve",
            annee:"2011-2020",
            description:"Cycle des Ingénieurs dans les filières des Sciences et Technologies",
        },
        {
            image:"../../images/chimie.jpg",
            categorie:"concours",
            niveau:"baccalauréat",
            ecole:"ENSPY",
            type:"epreuve",
            annee:"2011-2020",
            description:"Cycle des Ingénieurs dans les filières des Sciences et Technologies",
        },
        {
            image:"../../images/chimie.jpg",
            categorie:"concours",
            niveau:"baccalauréat",
            ecole:"ENSPY",
            type:"epreuve",
            annee:"2011-2020",
            description:"Cycle des Ingénieurs dans les filières des Sciences et Technologies",
        },
        {
            image:"../../images/chimie.jpg",
            categorie:"concours",
            niveau:"baccalauréat",
            ecole:"ENSPY",
            type:"epreuve",
            annee:"2011-2020",
            description:"Cycle des Ingénieurs dans les filières des Sciences et Technologies",
        },
        {
            image:"../../images/chimie.jpg",
            categorie:"concours",
            niveau:"baccalauréat",
            ecole:"ENSPY",
            type:"epreuve",
            annee:"2011-2020",
            description:"Cycle des Ingénieurs dans les filières des Sciences et Technologies",
        },
        {
            image:"../../images/chimie.jpg",
            categorie:"concours",
            niveau:"baccalauréat",
            ecole:"ENSPY",
            type:"epreuve",
            annee:"2011-2020",
            description:"Cycle des Ingénieurs dans les filières des Sciences et Technologies",
        },
        {
            image:"../../images/chimie.jpg",
            categorie:"concours",
            niveau:"baccalauréat",
            ecole:"ENSPY",
            type:"epreuve",
            annee:"2011-2020",
            description:"Cycle des Ingénieurs dans les filières des Sciences et Technologies",
        },
    ]

}

const limit = 1
const pageRangeDisplayed = 5

class Bibliotheque extends Component {

    state={
        totalItemsCount:0,
        activePage: 1,
        categorie:"Catégories",
        ecole:"Ecole",
        niveau:"Niveau",
        subject:"Matière",
        year:"",
        data_header:[],
        loading: true,
        loadingPagination:false,
        loadingFilter:false,
    }

    params=(pageNumber)=>{
        let params= {page: pageNumber, limit: limit}

        if(this.state.categorie != "Catégories"){
            params.type = this.state.categorie
        }
        if(this.state.ecole != "Ecole"){
            params.school = this.state.ecole
        }
        if(this.state.niveau != "Niveau"){
            params.level = this.state.niveau
        }
        if(this.state.subject != "Matière"){
            params.subject = this.state.subject
        }
        if(this.state.year != ""){
            params.year = this.state.year
        }
        console.log(params)

        return params
    }
    componentDidMount(){
        if(this.state.data_header.length===0){
            axios.get('documents/header',{
                params: this.params(this.state.activePage)
            }
            ).then(
                res => {
                    console.log('documents',res.data)
                    this.setState({
                        data_header: res.data.documents,
                        totalItemsCount:res.data.totalItemsCount,
                        loading: false
                    })
                },
                err => {
                    console.log(err.response)
                }
            ) 
        }  
    }
    onChange_categorie= e =>{
        this.setState({ categorie : e.target.value})
    }
    onChange_niveau= e =>{
        this.setState({ niveau : e.target.value})
    }
    onChange_ecole= e =>{
        this.setState({ ecole : e.target.value})
    }
    onChange_subject= e =>{
        this.setState({ subject : e.target.value})
    }
    onChange_year= e =>{
        this.setState({ year : e.target.value})
        console.log(this.state.year)
    }
    handlePageChange(pageNumber) {

        console.log('active page is',pageNumber);
        this.setState({
            activePage: pageNumber,
            loadingPagination:true,
        });
        axios.get('documents/header',{
            params: this.params(pageNumber)
        }
        ).then(
            res => {
                this.setState({
                    data_header: res.data.documents,
                    totalItemsCount:res.data.totalItemsCount,
                    loadingPagination: false
                })
                window.scrollTo(0, 0)
                console.log(this.state.data_header)
            },
            err => {
                console.log(err.response)
            }
        ) 
      }  
    loaderPagination=()=>{
        if(this.state.loadingPagination){
            return(
                <div className="loaderPagination">
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
        }
    }
    loaderFilter=()=>{
        if(this.state.loadingFilter){
            return(
                <div className="loaderFilter">
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
        }
    }
    filter=()=>{
        this.setState({
            loadingFilter:true
        });
        axios.get('documents/header',{
            params: this.params(this.state.activePage)
        }
        ).then(
            res => {
                console.log('documents',res.data)
                this.setState({
                    data_header: res.data.documents,
                    totalItemsCount:res.data.totalItemsCount,
                    loadingFilter: false
                })
            },
            err => {
                console.log(err.response)
            }
        )
    }
    noData=()=>{
        if(this.state.data_header.length === 0){
            return(
                <div style={{textAlign:'center', fontSize:16, marginTop:50, marginBottom:50}}>
                    Aucune donnée disponible
                </div>
            )
        }
    }
    cardOrLoader=()=>{

        const cards=this.state.data_header.map((card)=>
            <div className="col-md-6">
                <NavLink exact to={{
                    pathname:"/Bibliotheque/"+card.category+'-niveau-'+card.level+'-'+card.school+'-année-'+card.year+'-'+card.type+'-de-'+card.subject,
                    documentHeader:{
                        _id: card._id,
                        category: card.category,
                        cycle: card.cycle,
                        level: card.level,
                        school: card.school,
                        subject: card.subject,
                        subject_number: card.subject_number,
                        type: card.type,
                        year: card.year
                    }
                    }}>
                    <div className="biblio_card" onClick={e=>console.log("=====================================")}>
                        <div className="row">
                            <div className="col-sm-5 col-md-5 col-xs-5">
                                <div className="image-card">
                                    <img  alt="concours au cameroun online-school" src={require("../../images/chimie.jpg")} className="img-responsive"></img>
                                </div>
                            </div>
                            <div className="col-sm-7 col-md-7 col-xs-7">
                                <div className="content-card">
                                    <h4>{card.category} - {card.level} - {card.school} </h4>
                                    <h5 style={{color:"black"}}>{card.cycle}</h5> 
                                    <h6 style={{color:"black"}}>TYPE: <span style={{textTransform:'lowercase'}}>{card.type} </span>
                                        <span style={{color:"#c65039", fontSize:16}}> | </span> ANNEE: {card.year}</h6> 
                                    <h6 style={{color:"black"}}>MATIERE: <span style={{color: "#660099"}}>{card.subject}</span></h6>          
                                </div> 
                                <div className="share-card">
                                    <span className="glyphicon glyphicon-share"></span><span> Partager</span>
                                </div>   
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
        )

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
            return(
                <div>
                    <div style={{ marginBottom:20}}>
                        <div className='biblio-header sticky'>
                            <button className="button navbar-brand" data-toggle="dropdown" style={{backgroundColor:"white",}}>
                                <a style={{color:'#660099',textTransform:'uppercase',fontSize:11}}>
                                    {this.state.categorie}<span className="caret"></span></a>
                            </button>
                            <div className="dropdown-menu dropdown_categories">
                                <div className="form-check check-option">
                                    <label className="form-check-label">
                                        <input type="radio" value="Catégories" checked={this.state.categorie === "Catégories"} 
                                            className="form-check-input" onChange={this.onChange_categorie} name="Catégories"/>  
                                        <span>Toutes les catégories</span>
                                    </label>
                                </div>
                                <div className="form-check check-option">
                                    <label className="form-check-label">
                                        <input type="radio" value="EPREUVE" checked={this.state.categorie === "EPREUVE"} 
                                            className="form-check-input" onChange={this.onChange_categorie} name="EPREUVE"/>  
                                        <span>Epreuves</span>
                                    </label>
                                </div>
                                <div className="form-check check-option">
                                    <label className="form-check-label">
                                        <input type="radio" value= "CORRECTION" checked={this.state.categorie === "CORRECTION"} 
                                            className="form-check-input" onChange={this.onChange_categorie} name="CORRECTION"/>  
                                        <span>Corrections</span>
                                    </label>
                                </div>
                                <div className="form-check check-option">
                                    <label className="form-check-label">
                                        <input type="radio" value="EXERCICES_CYBLE" checked={this.state.categorie === "EXERCICES_CYBLE"} 
                                            className="form-check-input" onChange={this.onChange_categorie} name="EXERCICES_CYBLE"/>  
                                        <span>Exercices type concours corrigés</span>
                                    </label>
                                </div>
                            </div>       
                        </div>
                        <div className='biblio-header sticky'>
                            <button className="button navbar-brand" data-toggle="dropdown" style={{backgroundColor:"white",}}>
                                <a style={{color:'#660099',textTransform:'uppercase',fontSize:11}}>
                                    {this.state.niveau}<span className="caret"></span></a>
                            </button>
                            <div className="dropdown-menu dropdown_niveau">
                                <div className="form-check check-option">
                                    <label className="form-check-label">
                                        <input type="radio" value="Niveau" checked={this.state.niveau === "Niveau"} 
                                            className="form-check-input" onChange={this.onChange_niveau} name="Niveau"/>  
                                        <span>Tous les niveaux</span>
                                    </label>
                                </div>
                                <div className="form-check check-option">
                                    <label className="form-check-label">
                                        <input type="radio" value="BACCALAUREAT" checked={this.state.niveau === "BACCALAUREAT"} 
                                            className="form-check-input" onChange={this.onChange_niveau} name="BACCALAUREAT"/>  
                                        <span>baccalauréat</span>
                                    </label>
                                </div>
                                <div className="form-check check-option">
                                    <label className="form-check-label">
                                        <input type="radio" value="MASTER" checked={this.state.niveau === "MASTER"} 
                                            className="form-check-input" onChange={this.onChange_niveau} name="MASTER"/>  
                                        <span>master</span>
                                    </label>
                                </div>
                                <div className="form-check check-option">
                                    <label className="form-check-label">
                                        <input type="radio" value="LICENCE" checked={this.state.niveau === "LICENCE"} 
                                            className="form-check-input" onChange={this.onChange_niveau} name="LICENCE"/>  
                                        <span>Licence</span>
                                    </label>
                                </div>
                            </div>    
                        </div>
                        <div className='biblio-header sticky'>
                            <button className="button navbar-brand" data-toggle="dropdown" style={{backgroundColor:"white",}}>
                                <a style={{color:'#660099',textTransform:'uppercase',fontSize:11}}>
                                    {this.state.ecole}<span className="caret"></span></a>
                            </button>
                            <div className="dropdown-menu dropdown_ecole">

                                <div className="form-check-inline check-option">
                                    <label className="form-check-label">
                                        <input type="radio" value="Ecole" checked={this.state.ecole === "Ecole"} 
                                            className="form-check-input" onChange={this.onChange_ecole} name="Ecole"/>  
                                        <span>Toutes les écoles</span>
                                    </label>
                                </div>

                                <div className="form-check-inline check-option">
                                    <label className="form-check-label">
                                        <input type="radio" value="option1" checked={this.state.ecole === "option1"} 
                                            className="form-check-input" onChange={this.onChange_ecole} name="option1"/>  
                                        <span>option1</span>
                                    </label>
                                    <label className="form-check-label">
                                        <input type="radio" value="option2" checked={this.state.ecole === "option2"} className="form-check-input" onChange={this.onChange_ecole} name="option2"/>  
                                        <span>option2</span>
                                    </label>
                                    <label className="form-check-label">
                                        <input type="radio" value="option3" checked={this.state.ecole === "option3"} className="form-check-input" onChange={this.onChange_ecole} name="option3"/>  
                                        <span>option3</span>
                                    </label>
                                </div>

                                <div className="form-check-inline check-option">
                                    <label className="form-check-label">
                                        <input type="radio" value="option4" checked={this.state.ecole === "option4"} className="form-check-input" onChange={this.onChange_ecole} name="option4"/>  
                                        <span>option4</span>
                                    </label>
                                    <label className="form-check-label">
                                        <input type="radio" value="option5" checked={this.state.ecole === "option5"} className="form-check-input" onChange={this.onChange_ecole} name="option5"/>  
                                        <span>option5</span>
                                    </label>
                                    <label className="form-check-label">
                                        <input type="radio" value="option6" checked={this.state.ecole === "option6"} className="form-check-input" onChange={this.onChange_ecole} name="option6"/>  
                                        <span>option6</span>
                                    </label>
                                </div>
                                                        
                                <div className="form-check-inline check-option">
                                    <label className="form-check-label">
                                        <input type="radio" value="option7" checked={this.state.ecole === "option7"} className="form-check-input" onChange={this.onChange_ecole} name="option7"/>  
                                        <span>option7</span>
                                    </label>
                                    <label className="form-check-label">
                                        <input type="radio" value="option8" checked={this.state.ecole === "option8"} className="form-check-input" onChange={this.onChange_ecole} name="option8"/>  
                                        <span>option8</span>
                                    </label>
                                    <label className="form-check-label">
                                        <input type="radio" value="option9" checked={this.state.ecole === "option9"} className="form-check-input" onChange={this.onChange_ecole} name="option9"/>  
                                        <span>option9</span>
                                    </label>
                                </div>

                                <div className="form-check-inline check-option">
                                    <label className="form-check-label">
                                        <input type="radio" value="option10" checked={this.state.ecole === "option10"} className="form-check-input" onChange={this.onChange_ecole} name="option10"/>  
                                        <span>option10</span>
                                    </label>
                                    <label className="form-check-label">
                                        <input type="radio" value="option11" checked={this.state.ecole === "option11"} className="form-check-input" onChange={this.onChange_ecole} name="option11"/>  
                                        <span>option11</span>
                                    </label>
                                    <label className="form-check-label">
                                        <input type="radio" value="option12" checked={this.state.ecole === "option12"} className="form-check-input" onChange={this.onChange_ecole} name="option12"/>  
                                        <span>option12</span>
                                    </label>
                                </div>
                            </div>  
                        </div>
                        <div className='biblio-header sticky'>
                            <button className="button navbar-brand" data-toggle="dropdown" style={{backgroundColor:"white",}}>
                                <a style={{color:'#660099',textTransform:'uppercase',fontSize:11}}>
                                    {this.state.subject}<span className="caret"></span></a>
                            </button>
                            <div className="dropdown-menu dropdown_subject">

                                <div className="form-check-inline check-option">
                                    <label className="form-check-label">
                                        <input type="radio" value="Matière" checked={this.state.subject === "Matière"} 
                                            className="form-check-input" onChange={this.onChange_subject} name="Matière"/>  
                                        <span>Toutes les matière</span>
                                    </label>
                                </div>
                                <div className="form-check-inline check-option">
                                    <label className="form-check-label">
                                        <input type="radio" value="mathématiques" checked={this.state.subject === "mathématiques"} 
                                            className="form-check-input" onChange={this.onChange_subject} name="mathématiques"/>  
                                        <span>Mathématiques</span>
                                    </label>
                                    <label className="form-check-label">
                                        <input type="radio" value="Physiques" checked={this.state.subject === "Physiques"} 
                                            className="form-check-input" onChange={this.onChange_subject} name="Physiques"/>  
                                        <span>Physiques</span>
                                    </label>
                                </div>

                                <div className="form-check-inline check-option">
                                    <label className="form-check-label">
                                        <input type="radio" value="chimie" checked={this.state.subject === "chimie"} 
                                            className="form-check-input" onChange={this.onChange_subject} name="chimie"/>  
                                        <span>Chimie</span>
                                    </label>
                                    <label className="form-check-label">
                                        <input type="radio" value="Biologie" checked={this.state.subject === "Biologie"} 
                                            className="form-check-input" onChange={this.onChange_subject} name="Biologie"/>  
                                        <span>Biologie</span>
                                    </label>
                                </div>
                                                        
                                <div className="form-check-inline check-option">
                                    <label className="form-check-label">
                                        <input type="radio" value="français" checked={this.state.subject === "français"} 
                                            className="form-check-input" onChange={this.onChange_subject} name="français"/>  
                                        <span>Français</span>
                                    </label>
                                    <label className="form-check-label">
                                        <input type="radio" value="anglais" checked={this.state.subject === "anglais"} 
                                            className="form-check-input" onChange={this.onChange_subject} name="anglais"/>  
                                        <span>Anglais</span>
                                    </label>
                                </div>
                            </div>  
                        </div>
                        <div className='biblio-header sticky'>
                            <div className="navbar-brand input_year" style={{backgroundColor:"white"}}>
                                <input type="text" placeholder="Année" className="form-check-input" onChange={this.onChange_year} name="Année"/>
                            </div>
                        </div>
                        <div className='biblio-header sticky'>
                            <button className="button navbar-brand " style={{backgroundColor:"#c65039",zIndex:0}}
                                onClick={this.filter}>
                                <a style={{color:'white',textTransform:'uppercase',fontSize:14, fontWeight:'bold'}}>
                                    <span className="glyphicon glyphicon-search"></span> Filtrer</a>
                            </button>
                        </div>
                    </div>
                    <div className='biblio_body'>
                        <div id="empty_space"/>
                            {this.noData()}
                            {this.loaderFilter()}
                        <div className="row">
                            {cards}
                        </div>
                        {this.loaderPagination()}
                        <div className="pagination">
                            <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={limit}
                            totalItemsCount={this.state.totalItemsCount}
                            pageRangeDisplayed={pageRangeDisplayed}
                            onChange={this.handlePageChange.bind(this)}
                            />
                        </div>
                    </div> 
                </div>
            )
        
        }
    }
    
    render(){    

        return (  
            <>
                <div className='bibliotheque'>   
                    {this.cardOrLoader()}    
                </div>
                <ChatBox/>
            </>
            
        );
    }
}

export default Bibliotheque