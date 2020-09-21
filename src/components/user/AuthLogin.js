import React, { Component } from 'react';
import '../user/auth.css'


export class AuthLogin extends Component {
    render(){
        return (
            <div style={{marginTop:250}}>              
                <div  className='buttonModal'>
                    <input type="submit" className="btn btn-primary form-control" value="Avec Google" />
                </div>
                <div  className='buttonModal'>
                    <input type="submit" className="btn btn-primary form-control" value="Avec Facebook" />
                </div>
                <div>
                    <p style={{textAlign:"center"}}>ou</p>
                </div>
                <form  onSubmit={this.isLoginAdmin} className="needs-validation">            
                    <div  className='buttonModal'>
                        <input type='text' placeholder ='Nom' className ="form-control" name='Nom'
                        onChange={this.onChangeNom} required />
                    </div>
                    <div  className='buttonModal'>
                        <input type='password' placeholder ='Mot de passe' className ="form-control" name='Password'
                        onChange={this.onChangePassword} required />
                    </div>          
                    <div  className='buttonModal'>
                        <input type="submit" className="btn btn-primary form-control" value="Se connecter" />
                    </div>
                </form>
            </div>
        );
    }
}

