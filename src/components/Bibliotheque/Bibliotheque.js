import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../Bibliotheque/bibliotheque.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import axios from 'axios';


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
class Bibliotheque extends Component {

    state={
        categorie:"Catégories",
        ecole:"Ecole",
        niveau:"Niveau",
        data_header:[],
        loading: true,
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

    componentDidMount(){
        if(this.state.data_header.length===0){
            axios.get('documents/header').then(
                res => {
                    console.log('documents',res.data.documents)
                    this.setState({
                        data_header: res.data.documents,
                        loading: false
                    })
                },
                err => {
                    console.log(err.response)
                }
            ) 
        }  
    }


    cardOrLoader=()=>{

        const cards=this.state.data_header.map((card)=>
            <div className="col-md-6">
                <NavLink exact to={"/Bibliotheque/"+card._id}>
                    <div className="biblio_card" onClick={e=>console.log("====================================================================")}>
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
                                <a style={{color:'#660099',textTransform:'uppercase',fontSize:11}}>{this.state.categorie}<span className="caret"></span></a>
                            </button>
                            <div className="dropdown-menu dropdown_categories">
                                <div className="form-check check-option">
                                    <label className="form-check-label">
                                        <input type="radio" value="categories" checked={this.state.categorie === "categories"} className="form-check-input" onChange={this.onChange_categorie} name="all"/>  
                                        <span>Toutes les catégories</span>
                                    </label>
                                </div>
                                <div className="form-check check-option">
                                    <label className="form-check-label">
                                        <input type="radio" value="epreuves" checked={this.state.categorie === "epreuves"} className="form-check-input" onChange={this.onChange_categorie} name="epreuve"/>  
                                        <span>Epreuves</span>
                                    </label>
                                </div>
                                <div className="form-check check-option">
                                    <label className="form-check-label">
                                        <input type="radio" value= "corrections" checked={this.state.categorie === "corrections"} className="form-check-input" onChange={this.onChange_categorie} name="correction"/>  
                                        <span>Corrections</span>
                                    </label>
                                </div>
                                <div className="form-check check-option">
                                    <label className="form-check-label">
                                        <input type="radio" value="exercices" checked={this.state.categorie === "exercices"} className="form-check-input" onChange={this.onChange_categorie} name="exercices"/>  
                                        <span>Exercices type corrigés</span>
                                    </label>
                                </div>
                            </div>       
                        </div>
                        <div className='biblio-header sticky'>
                            <button className="button navbar-brand" data-toggle="dropdown" style={{backgroundColor:"white",}}>
                                <a style={{color:'#660099',textTransform:'uppercase',fontSize:11}}>{this.state.niveau}<span className="caret"></span></a>
                            </button>
                            <div className="dropdown-menu dropdown_niveau">
                                <div className="form-check check-option">
                                    <label className="form-check-label">
                                        <input type="radio" value="niveau" checked={this.state.niveau === "niveau"} className="form-check-input" onChange={this.onChange_niveau} name="all"/>  
                                        <span>Tous les niveaux</span>
                                    </label>
                                </div>
                                <div className="form-check check-option">
                                    <label className="form-check-label">
                                        <input type="radio" value="baccalauréat" checked={this.state.niveau === "baccalauréat"} className="form-check-input" onChange={this.onChange_niveau} name="baccalaureat"/>  
                                        <span>baccalauréat</span>
                                    </label>
                                </div>
                                <div className="form-check check-option">
                                    <label className="form-check-label">
                                        <input type="radio" value="bacc+2" checked={this.state.niveau === "bacc+2"} className="form-check-input" onChange={this.onChange_niveau} name="bacc+2"/>  
                                        <span>baccalauréat plus 2</span>
                                    </label>
                                </div>
                                <div className="form-check check-option">
                                    <label className="form-check-label">
                                        <input type="radio" value="licence" checked={this.state.niveau === "licence"} className="form-check-input" onChange={this.onChange_niveau} name="licence"/>  
                                        <span>Licence</span>
                                    </label>
                                </div>
                            </div>
                            
                    </div>
                        <div className='biblio-header sticky'>
                        <button className="button navbar-brand" data-toggle="dropdown" style={{backgroundColor:"white",}}>
                            <a style={{color:'#660099',textTransform:'uppercase',fontSize:11}}>{this.state.ecole}<span className="caret"></span></a>
                        </button>
                            <div className="dropdown-menu dropdown_ecole">

                                <div className="form-check-inline check-option">
                                    <label className="form-check-label">
                                        <input type="radio" value="option1" checked={this.state.ecole === "option1"} className="form-check-input" onChange={this.onChange_ecole} name="option1"/>  
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
                    </div>
                    <div className='biblio_body'>
                <div style={{height:100}}/>
                <div className="row">
                    
                        {cards}
                   
                </div>
            </div> 
                </div>
            )
        
        }
    }
    

    render(){


        

    return (
            
       <div className='bibliotheque'>
           
           {this.cardOrLoader()}
              
       </div>
        );
    }
}

export default Bibliotheque