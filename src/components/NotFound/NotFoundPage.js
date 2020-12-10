import React, {Component} from 'react';
import NotFound from '../../images/404.png'
import '../NotFound/notFoundPage.css';

export default class NotFoundPage extends Component {
  render(){
  return (
      <div className="row">
        <div className="col-md-3 notFoundSpace">
        </div>
        <div className="col-md-6">
          <div className="notFoundComponenent">
            <img src={NotFound} alt="page introuvable" className='center-img'></img>
            <h1 className='introuvable'>Page Introuvable</h1>
          </div>
        </div>
        <div className="col-md-3 notFoundSpace">
        </div>
      </div>  
  );
  }
}