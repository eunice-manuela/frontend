import React,{useState} from 'react';
import { Route, Redirect } from 'react-router-dom';


const PublicRoute = ({component: Component, restricted, ...rest}) => {

    const [Login, setIsLogin] = useState(true);
   
    return (
        <Route {...rest} render={props => (
            Login?
                <Redirect to="/Accueil" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;