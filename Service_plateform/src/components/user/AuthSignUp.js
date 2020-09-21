import React, { Component } from 'react';
import '../user/auth.css'

export class AuthSignUp extends Component {
    render(){
        return (
            <div style={{marginTop:250}}>
                <div className='buttonModal'>
                    <input type="submit" className="btn btn-primary form-control" value="Avec Google" />
                </div>
                <div className='buttonModal'>
                    <input type="submit" className="btn btn-primary form-control" value="Avec Facebook" />
                </div>
                <div >
                    <p style={{textAlign:"center"}}>ou</p>
                </div>
                <form onSubmit={this.isLoginClient} className="needs-validation">
                
                    <div className='buttonModal'>
                        <input type='email' placeholder ='Email' className ="form-control" name='email'
                        onChange={this.onChangeNom} required />
                    </div>
                    <div className='buttonModal'>
                        <input type='text' placeholder ='Nom' className ="form-control" name='Nom'
                        onChange={this.onChangeNom} required />
                    </div>
                    <div className='buttonModal'>
                        <input type='password' placeholder ='Mot de passe' className ="form-control" name='Password'
                        onChange={this.onChangePassword} required />
                    </div>
                    <div className='buttonModal'>
                        <input type="submit" className="btn btn-primary form-control" value="S'abonner" />
                    </div>
                </form>
            </div>
        );
    }
}

