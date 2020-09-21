import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Concours from './components/Concours/Concours';
import {Accueil} from './components/Accueil/Accueil';
import {Notifications} from './components/user/Notifications'
import Examens from './components/Examens/Examens'
import Navbar from './components/Navbar/Navbar'
import ProtectedRoute from'./components/routes/ProtectedRoute';
import { Search } from './components/Search/Search';
import { Parameters } from './components/user/Parameters';
import Footer from '../src/components/footer/footer';
//import ClientRoute from './components/ClientRoute';


render(  
  <div>
    
    <Router>
        <Navbar/>
        <Route exact path="/" component={Accueil}/>
        <Route exact path="/Accueil" component={Accueil}/>
        <Route exact path="/Search" component={Search}/>
        <Route exact path="/Concours" component={Concours}/>
        <Route exact path="/Examens" component={Examens}/>
        <Route exact path="/Notifications" component={Notifications}/>
        <Route exact path="/Parameters" component={Parameters}/>
        <Footer/>
    </Router>
    
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
