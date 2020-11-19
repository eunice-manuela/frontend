import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../Bibliotheque/bibliotheque.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

class Bibliotheque extends Component {

    state={
        categorie:"Catégories",
        ecole:"Ecole",
        niveau:"Niveau",
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
    render(){
       

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


        const cards=dataCard.content.map((card)=>
            <div className="col-md-6">
                <div className="biblio_card">
                    <div className="row">
                        <div className="col-sm-5 col-md-5 col-xs-5">
                            <div className="image-card">
                                <img  alt="concours au cameroun online-school" src={require("../../images/chimie.jpg")} className="img-responsive"></img>
                            </div>
                        </div>
                        <div className="col-sm-7 col-md-7 col-xs-7">
                            <div className="content-card">
                                <h4>{card.categorie} - {card.niveau} - {card.ecole} </h4>
                                <h6>{card.type} {card.annee}</h6>
                                <h5>{card.description}</h5>             
                            </div> 
                            <div className="share-card">
                                <span className="glyphicon glyphicon-share"></span><span> Partager</span>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        )

        return (
            
       <div className='bibliotheque'>
           <div id="loader">
                <Loader
                    type="ThreeDots"//Oval Rings
                    color="#660099"
                    visible={true}
                    height={80}
                    width={80}
                    timeout={3000} //3 secs
                />
           </div>
           
           <div style={{ marginBottom:20}}>
                <div className='biblio-header sticky'>
                        <button className="button navbar-brand" data-toggle="dropdown" style={{backgroundColor:"white",}}>
                            <a style={{color:'#660099',textTransform:'uppercase',fontSize:11}}>{this.state.categorie}<span className="caret"></span></a>
                        </button>
                        <div className="dropdown-menu dropdown_categories">
                            <div class="form-check check-option">
                                <label class="form-check-label">
                                    <input type="radio" value="categories" checked={this.state.categorie === "categories"} class="form-check-input" onChange={this.onChange_categorie} name="all"/>  
                                    <span>Toutes les catégories</span>
                                </label>
                            </div>
                            <div class="form-check check-option">
                                <label class="form-check-label">
                                    <input type="radio" value="epreuves" checked={this.state.categorie === "epreuves"} class="form-check-input" onChange={this.onChange_categorie} name="epreuve"/>  
                                    <span>Epreuves</span>
                                </label>
                            </div>
                            <div class="form-check check-option">
                                <label class="form-check-label">
                                    <input type="radio" value= "corrections" checked={this.state.categorie === "corrections"} class="form-check-input" onChange={this.onChange_categorie} name="correction"/>  
                                    <span>Corrections</span>
                                </label>
                            </div>
                            <div class="form-check check-option">
                                <label class="form-check-label">
                                    <input type="radio" value="exercices" checked={this.state.categorie === "exercices"} class="form-check-input" onChange={this.onChange_categorie} name="exercices"/>  
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
                            <div class="form-check check-option">
                                <label class="form-check-label">
                                    <input type="radio" value="niveau" checked={this.state.niveau === "niveau"} class="form-check-input" onChange={this.onChange_niveau} name="all"/>  
                                    <span>Tous les niveaux</span>
                                </label>
                            </div>
                            <div class="form-check check-option">
                                <label class="form-check-label">
                                    <input type="radio" value="baccalauréat" checked={this.state.niveau === "baccalauréat"} class="form-check-input" onChange={this.onChange_niveau} name="baccalaureat"/>  
                                    <span>baccalauréat</span>
                                </label>
                            </div>
                            <div class="form-check check-option">
                                <label class="form-check-label">
                                    <input type="radio" value="bacc+2" checked={this.state.niveau === "bacc+2"} class="form-check-input" onChange={this.onChange_niveau} name="bacc+2"/>  
                                    <span>baccalauréat plus 2</span>
                                </label>
                            </div>
                            <div class="form-check check-option">
                                <label class="form-check-label">
                                    <input type="radio" value="licence" checked={this.state.niveau === "licence"} class="form-check-input" onChange={this.onChange_niveau} name="licence"/>  
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

                            <div class="form-check-inline check-option">
                                <label class="form-check-label">
                                    <input type="radio" value="option1" checked={this.state.ecole === "option1"} class="form-check-input" onChange={this.onChange_ecole} name="option1"/>  
                                    <span>option1</span>
                                </label>
                                <label class="form-check-label">
                                    <input type="radio" value="option2" checked={this.state.ecole === "option2"} class="form-check-input" onChange={this.onChange_ecole} name="option2"/>  
                                    <span>option2</span>
                                </label>
                                <label class="form-check-label">
                                    <input type="radio" value="option3" checked={this.state.ecole === "option3"} class="form-check-input" onChange={this.onChange_ecole} name="option3"/>  
                                    <span>option3</span>
                                </label>
                            </div>

                            <div class="form-check-inline check-option">
                            <label class="form-check-label">
                                    <input type="radio" value="option4" checked={this.state.ecole === "option4"} class="form-check-input" onChange={this.onChange_ecole} name="option4"/>  
                                    <span>option4</span>
                                </label>
                                <label class="form-check-label">
                                    <input type="radio" value="option5" checked={this.state.ecole === "option5"} class="form-check-input" onChange={this.onChange_ecole} name="option5"/>  
                                    <span>option5</span>
                                </label>
                                <label class="form-check-label">
                                    <input type="radio" value="option6" checked={this.state.ecole === "option6"} class="form-check-input" onChange={this.onChange_ecole} name="option6"/>  
                                    <span>option6</span>
                                </label>
                            </div>
                            
                           
                            <div class="form-check-inline check-option">
                                <label class="form-check-label">
                                    <input type="radio" value="option7" checked={this.state.ecole === "option7"} class="form-check-input" onChange={this.onChange_ecole} name="option7"/>  
                                    <span>option7</span>
                                </label>
                                <label class="form-check-label">
                                    <input type="radio" value="option8" checked={this.state.ecole === "option8"} class="form-check-input" onChange={this.onChange_ecole} name="option8"/>  
                                    <span>option8</span>
                                </label>
                                <label class="form-check-label">
                                    <input type="radio" value="option9" checked={this.state.ecole === "option9"} class="form-check-input" onChange={this.onChange_ecole} name="option9"/>  
                                    <span>option9</span>
                                </label>
                            </div>

                            <div class="form-check-inline check-option">
                            <label class="form-check-label">
                                    <input type="radio" value="option10" checked={this.state.ecole === "option10"} class="form-check-input" onChange={this.onChange_ecole} name="option10"/>  
                                    <span>option10</span>
                                </label>
                                <label class="form-check-label">
                                    <input type="radio" value="option11" checked={this.state.ecole === "option11"} class="form-check-input" onChange={this.onChange_ecole} name="option11"/>  
                                    <span>option11</span>
                                </label>
                                <label class="form-check-label">
                                    <input type="radio" value="option12" checked={this.state.ecole === "option12"} class="form-check-input" onChange={this.onChange_ecole} name="option12"/>  
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
        );
    }
}

export default Bibliotheque