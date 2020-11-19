import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Accueil} from './components/Accueil/Accueil';
import {Notifications} from './components/user/Notifications'
import Examens from './components/Examens/Examens'
import Navbar from './components/Navbar/Navbar'
//import ProtectedRoute from'./components/routes/ProtectedRoute';
import { Search } from './components/Search/Search';
import { Parameters } from './components/user/Parameters';
import Footer from '../src/components/footer/footer';
import Bibliotheque from './components/Bibliotheque/Bibliotheque';
//import ClientRoute from './components/ClientRoute';

function App() {
  
  return (
    <div style={{backgroundColor:'rgba(0,0,0,0.1)'}}>
    <Router>
        <Navbar/>
        <Route exact path="/" component={Accueil}/>
        <Route exact path="/Accueil" component={Accueil}/>
        <Route exact path="/Search" component={Search}/>
        <Route exact path="/Bibliotheque" component={Bibliotheque}/>
        <Route exact path="/Examens" component={Examens}/>
        <Route exact path="/Notifications" component={Notifications}/>
        <Route exact path="/Parameters" component={Parameters}/>
        <Footer/>
    </Router> 
  </div>
  );
}

export default App;
