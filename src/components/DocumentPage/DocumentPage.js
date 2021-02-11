import React, { Component } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import '../DocumentPage/DocumentPage.css'
import Loader from 'react-loader-spinner'
import axios from 'axios';

export default class DocumentPage extends Component {

    constructor(props) {
        super(props);

        if(props.location.documentHeader){
            sessionStorage.setItem('header',JSON.stringify(props.location.documentHeader));
        }
        let header = JSON.parse(sessionStorage.header);
        
        this.state={
            header: header,
            loading: true,
        }
      }

      

    componentDidMount(){
        
        axios.get('documents/'+this.state.header._id).then(
            res => {
                this.setState({
                    document: res.data,
                    loading: false
                })
                console.log(this.state.document)
            },
            err => {
                console.log(err.response)
            }
        ) 
    }

    auteur=()=>{
        if((this.state.document.type).toLowerCase()!='epreuve'){
            return(
                <h6>Auteur: OnLine-School</h6>
            )
        }
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
                    <div style={{height:5,backgroundColor:"#c65039", marginTop:-20}}></div>
                    <div className="title">
                        <h4>{this.state.document.type} de {this.state.document.subject} {this.state.document.subject_number}, Année {this.state.document.year}</h4>
                        <h5> Niveau {this.state.document.level.toUpperCase()}-{this.state.document.school.toUpperCase()}-{(this.state.document.cycle).toUpperCase()}</h5> 
                    </div>
                    <div className ="description">
                        {this.auteur()}
                        <h6>Mis à jour le 27/05/2021 par OnLine-School</h6>
                        <h6>Aucun téléchargement disponible</h6>
                        <h6>Vous pouvez partager sur les réseaux sociaux</h6>
                    </div>
                    <div style={{height:1,backgroundColor:"#c65039"}}></div>
                    
                </div>
            )
        }
    }

    render(){ 
        return(
            <div> 
                {this.docContentOrLoader()}    
            </div>
        )
        
    }
}

