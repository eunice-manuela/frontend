import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Accueil} from './components/Accueil/Accueil';
import {Notifications} from './components/user/Notifications'
import Examens from './components/Examens/Examens'
import Navbar from './components/Navbar/Navbar'
//import ProtectedRoute from'./components/routes/ProtectedRoute';
import { Search } from './components/Search/Search';
import { Parameters } from './components/user/Parameters';
import Footer from '../src/components/footer/footer';
import Bibliotheque from './components/Bibliotheque/Bibliotheque';
import DocumentPage from './components/DocumentPage/DocumentPage';
import NotFoundPage from './components/NotFound/NotFoundPage';
import {createAmbassadorAccount} from './components/Ambassador/createAmbassadorAccount'
import axios from 'axios';
//import ChatBox from './components/ChatBox/ChatBox';
//import ClientRoute from './components/ClientRoute';

 class App extends Component {

  constructor(props) {
    super(props);
    this.state= {
      details : [],
    }
  }

  componentDidMount() {
    let data ; 
    axios.get('http://localhost:8085/user/')
    .then(res => {
      data = res.data;
      this.setState({
        details : data
      });
    })
    .catch(err => {})
  }

  
  render(){

    return (
      <div className="global-app" style={{backgroundColor:'rgba(2,0,0,0.1)'}}>
        <Router>
          <Navbar/>
          
          <Switch>
            <Route exact path="/" component={Accueil}/>
            <Route exact path="/Accueil" component={Accueil}/>
            <Route exact path="/Search" component={Search}/>
            <Route exact path="/Bibliotheque" component={Bibliotheque}/>
            <Route exact path ="/Bibliotheque/:id" component = {DocumentPage} />
            <Route exact path="/Examens" component={Examens}/>
            <Route exact path="/Notifications" component={Notifications}/>
            <Route exact path="/Parameters" component={Parameters}/>
            <Route exact path="/createAmbassadorAccount" component={createAmbassadorAccount}/>
            <Route path="" component={NotFoundPage}/>
          </Switch>
          
        </Router>  
    </div>
    );
  }
}

export default App;
