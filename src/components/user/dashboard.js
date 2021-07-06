import React, { Component } from 'react';
import '../user/dashboard.css'

export class dashboard extends Component {


    constructor(props){
        super(props)
        this.state={
            documents:[
                {
                    id:1,
                    categorie:'epreuve',
                    title:'Ecole normale supérieure',
                    date_registration:'12/02/2021'
                },
                {
                    id:2,
                    categorie:'correction',
                    title:'Ecole nationale supérieure polytechnique de Yaoundé 1',
                    date_registration:'12/02/2021'
                },
                {
                    id:3,
                    categorie:'epreuve',
                    title:'Facultés de médecine',
                    date_registration:'12/02/2021'
                }
            ],

        }
    }



    render(){

        const documents = this.state.documents
       

          const content = documents.map((document) =>
            
                <tr onClick={
                    ()=>this.setState({
                        categorie:document.categorie,
                        title:document.title,
                        date_registration:document.date_registration
                        })}>
                    <td>{document.categorie}</td>
                    <td>{document.title}</td>
                    <td>{document.date_registration}</td>
                </tr>
           
          );


        function showTable(){
            
            if(documents.length ===0){
                return(
                  <h4 style={{textAlign:'center',marginTop:200,marginBottom:150}}>
                      Aucune donnée</h4>
                )
            }
            if(documents.length>=1){
              return (
                  <div className="container-fluid table">
                        <h4 style={{color:'#660099'}}>Toutes mes souscriptions</h4>
                        <div className="table-wrapper-scroll-y my-custom-scrollbar">
                          <table className="table table-bordered table-hover mb-0">
                              <thead style={{backgroundColor:'#660099'}}>
                                  <tr >
                                  <th scope="col">Catégorie</th>
                                  <th scope="col">Titre</th>
                                  <th scope="col">Inscription</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {content}
                              </tbody>
                          </table>
                      </div>
                  </div>
              )
              }
          }

        return (
        <div >
            {showTable()}
        </div>
        );
    }
}

