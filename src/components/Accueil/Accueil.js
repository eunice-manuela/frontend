import React, {Component} from 'react';
import '../Accueil/Accueil.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import forums from '../../images/forums.jpg'
import epreuves from '../../images/mathematics2.jpg'
import corrections from '../../images/Corrections.jpg'

        

export class Accueil extends Component {

    constructor(){
        super()
        this.state={
            moreCard:false,
        }
    }

    componentDidMount() {   
        Aos.init({duration : 1500});
      }


    render(){

        const dataCard={
            content:[
                {
                    image:"../../images/chimie.jpg",
                    title:"école nationale supérieure polytechnique de Yaoundé 1",
                    prix:"1450 FCFA"
                },
                {
                    image:"../../images/chimie.jpg",
                    title:"école nationale supérieure polytechnique de Yaoundé 1",
                    prix:'94 FCFA'
                },
                {
                    image:'forums',
                    title:"école nationale supérieure polytechnique de Yaoundé 1",
                    prix:"70 FCFA"
                },
                {
                    image:'forums',
                    title:"école nationale supérieure polytechnique de Yaoundé 1",
                    prix:"1230 FCFA"
                },
                {
                    image:'forums',
                    title:"école nationale supérieure polytechnique de Yaoundé 1",
                    prix:"0 FCFA"
                },
                {
                    image:'forums',
                    title:"école nationale supérieure polytechnique de Yaoundé 1",
                    prix:"450 FCFA"
                },
                {
                    image:'forums',
                    title:"école nationale supérieure polytechnique de Yaoundé 1",
                    prix:"2030 FCFA"
                },
                {
                    image:'forums',
                    title:"école nationale supérieure polytechnique de Yaoundé 1",
                    prix:"1590 FCFA"
                },
                {
                    image:'forums',
                    title:"école nationale supérieure polytechnique de Yaoundé 1",
                    prix:"1200 FCFA"
                },
                {
                    image:'forums',
                    title:"école nationale supérieure polytechnique de Yaoundé 1",
                    prix:"1396 FCFA"
                },
                {
                    image:'forums',
                    title:"école nationale supérieure polytechnique de Yaoundé 1",
                    prix:"0 FCFA"
                }
            ]

        }
        const cards=dataCard.content.map((card)=>
           
            <div className="col-md-4 padding-cards">
                <div data-aos="fade-up" className="card">
                    <div className="header-card">
                        <img  alt="concours au cameroun online-school" src={require("../../images/chimie.jpg")} style={{borderTopRightRadius:20,borderTopLeftRadius:20}} className="img-responsive"></img>
                    </div>
                    <div className="body-card">
                        <h5 style={{color:'black'}}>{card.title}</h5>
                    </div>
                    <div className="footer-card">
                        <p>Voir les épreuves</p>
                    </div>                       
                </div>
                <div className="card2">
                    <div className="body-card2">
                        <div className="row">
                            
                                <span style={{color:'white'}}>{card.prix}</span>
                           
                            
                                <span className="divider">||</span>  
                                                  
                           
                                <span style={{color:'white'}} className="glyphicon glyphicon-share"></span>   
                            
                        </div>                                                                                    
                    </div>                    
                </div>
            </div>
        )
        

        return(
            <div className="accueil">
                <div style={{marginTop:-50}}>

                <div className='sticky-header-accueil'>                     
                    <div className="container">
                        <div className="row">
                            <div data-aos='fade-right' className="segmentOne col-md-6">
                                <h3 className='intro'>Vous souhaitez préparer un coucours?</h3>
                                <h2 className='plateform-name'>Online-School,</h2>
                                <h3 className='slogan'>L'accompagnateur proche de vous, loin de votre poche</h3>
                            </div>
                            <div data-aos='fade-left' className="col-md-6 col-sm-6">
                                <video  controls>
                                    <source src="movie.mp4" type="video/mp4"/>
                                    <source src="movie.ogg" type="video/ogg"/>
                                        Your browser does not support the video tag.
                                </video>                                          
                            </div>  
                        </div>
                    </div>
                </div>

                <div  className="row margin-between-div">
                <h2 style={{textAlign:"center",marginBottom:50,marginTop:-30, textTransform:'uppercase',fontWeight:"bold"}}>A propos</h2>
                    <div  className="center">
                        <div data-aos="fade-up" className='col-xs-12 col-sm-4 segment'>
                            <img src={epreuves} alt="concours au cameroun online-school" style={{borderRadius:10}} className='center-img'></img>
                            <h1 style={{marginTop:30}}>Epreuves</h1>
                            <p> lskjkds slkdjk slkjds sljdksj slkjdsk lsjkdks skd lskjdks slkdjs ksldj ks skdjks skdjsks
                                lksd ksjkds ksjdks dskd kdsljdsk dskdjsk dskdjsk dksd skdj skd sdlkd ks dslk sdlks ss ks
                            </p> 
                            <div className="line"></div>   
                        </div>
                        <div data-aos="fade-up" className='col-xs-12 col-sm-4 segment'>
                        <img src={corrections} alt="concours au cameroun online-school" style={{borderRadius:10}} className='center-img'></img>
                            <h1>Corrections</h1>
                            <p> lskjkds slkdjk slkjds sljdksj slkjdsk lsjkdks skd lskjdks slkdjs ksldj ks skdjks skdjsks
                                lksd ksjkds ksjdks dskd kdsljdsk dskdjsk dskdjsk dksd skdj skd sdlkd ks dslk sdlks ss ks
                            </p>
                            <div className="line"></div>
                        </div>
                        <div data-aos="fade-up" className='col-xs-12 col-sm-4 segment' >
                        <img src={forums} alt="concours au cameroun online-school" style={{borderRadius:10}} className='center-img'></img>
                            <h1>Forums</h1>
                            <p> lskjkds slkdjk slkjds sljdksj slkjdsk lsjkdks skd lskjdks slkdjs ksldj ks skdjks skdjsks
                                lksd ksjkds ksjdks dskd kdsljdsk dskdjsk dskdjsk dksd skdj skd sdlkd ks dslk sdlks ss ks
                            </p>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-right" className="row">
                <h2 style={{textAlign:"center",marginBottom:50,textTransform:'uppercase',fontWeight:"bold"}}>Ambassadeur</h2>
                    <div className="col-md-12 margin-ambassador">
                        <div className="ambassador-card">
                            <div className="row">
                                <div className="col-md-4 ambassador-header">
                                    <button onClick={this.isLogIn} className="button" style={{backgroundColor:"#660099",}} >
                                        <a className="navbar-brand" style={{color:"white",margin:"auto",textTransform:"uppercase"}}>Devenir Ambassadeur</a>
                                    </button>
                                </div>
                                <div className="col-md-4 ambassador-body">
                                    <h4>kkljdkjdks</h4>
                                    <p> lskjkds slkdjk slkjds sljdksj slkjdsk lsjkdks skd lskjdks slkdjs ksldj ks skdjks skdjsks
                                        lksd ksjkds ksjdks dskd kdsljdsk dskdjsk dskdjsk dksd skdj skd sdlkd ks dslk sdlks ss ks
                                        </p>
                                </div>
                                <div className="col-md-4 ambassador-body">
                                    <h4>kkljdkjdks</h4>
                                    <p> lskjkds slkdjk slkjds sljdksj slkjdsk lsjkdks skd lskjdks slkdjs ksldj ks skdjks skdjsks
                                        lksd ksjkds ksjdks dskd kdsljdsk dskdjsk dskdjsk dksd skdj skd sdlkd ks dslk sdlks ss ks
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row margin-cards">
                    <h2 style={{textAlign:"center",marginBottom:50,textTransform:'uppercase',fontWeight:"bold"}}>concours</h2>
                    
                    {cards}
                
                </div>
                </div>                
            </div> 
       
        );
    }
}
const styles={
    img:{
        width:'100%',
    },
}
 