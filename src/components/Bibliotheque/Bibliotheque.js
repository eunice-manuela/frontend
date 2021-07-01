import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../Bibliotheque/bibliotheque.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Pagination from "react-js-pagination";
import Loader from 'react-loader-spinner'
import axios from 'axios';
import ChatBox from '../ChatBox/ChatBox'
import {convertCSVToArray} from 'convert-csv-to-array'
import converter from 'convert-csv-to-array'
import DataFrame from 'dataframe-js';
import { Row } from 'dataframe-js';
//import {dataForge} from 'data-forge'
var dataForge = require('data-forge');
 


class Bibliotheque extends Component {
 constructor(props){
    super(props)

    this.state={
        doc:''
    
    }
 }
    

    
 document = () => {
    fetch('alert_csv.txt', {mode: 'no-cors'})
    .then(response => response.text())
    .then(data=> this.setState({
        doc:data
    }) )
    .catch(error => console.error(error));

    }

   


    

    
        render(){ 
          
            
            //DataFrame.fromText('alert_csv.txt').then(df => df);
            console.log(this.state.doc)

       



        return ( 
        <>
        <button className="button button_correction navbar-brand" style={{backgroundColor:"white",zIndex:0}}
                    onClick={e=>this.document()}>
                    <a style={{color:'#660099',textTransform:'uppercase',fontSize:14, fontWeight:'bold'}}>
                        Charger logs
                    </a>
        </button>
        </>
        );
        }
}

export default Bibliotheque