import React, { Component } from 'react';
import '../Search/search.css'

export class Search extends Component {
    render(){
        return (
        <>
            <div className="row justify-content-space-around searchBar">
                <div className="col-xs-4">
                <button onClick={this.deconnexion} className="retour" >
                    <span style={{fontSize:18, color:"#660099",fontWeight:"bold",backgroundColor:'while'}}><span className="glyphicon glyphicon-menu-left"></span>Retour</span>    
                </button>
                    
                </div>
                    <div class="col-xs-6">
                        <input class="form-control" type="text" placeholder="Rechercher" aria-label="Search"/>
                    </div> 
            </div>
            <h3 style={{margin:100}}>this is the search page</h3>
            <div style={{height:10000}}></div>
        </>
        );
    }
}

