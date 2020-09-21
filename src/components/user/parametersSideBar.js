import React, {Component} from 'react';
import { HashRouter as Router, Route,NavLink} from 'react-router-dom';
import '../../styles.css';

class ParametersSideBar extends Component {
    render(){
        return(
            <div className='side_container'>
                <Router>
                <div class="sidenav">
                    <h4>Mes Paramètres</h4>
                    <div style={styles.line}>
                    </div>
                    <span activeClassName="main-nav">
                    <NavLink exact to="/">Tous les services</NavLink>
                    </span>
                    <div style={styles.line}></div>
                </div>
                <Route>
                    <Route exact path="/" component={AllServices}/>
                    <Route path="/Nouveaux Services" component={NewServices}/>
                </Route>
                </Router>
            </div>
        );
    }
}
const styles={
    line:{
        height:1,
        backgroundColor:'white',
        marginBottom:5,
        marginTop:5,
    }
}
export default ServiceSideBar 