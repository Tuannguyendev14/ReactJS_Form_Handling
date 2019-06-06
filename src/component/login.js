import React,{Component} from 'react';
import {Link} from 'react-router-dom';


export default class Login extends Component{
 	 

	render(){
		return (
			<div>
                 <div className="container">
                    <div className="panel panel-info">
                            <div className="panel-heading">
                                <h1 className="panel-title">Login</h1>
                            </div>
                            <div className="panel-body">
                                
                                <div className="container">
                                    <div class="row my-padding-bottom-19">
                                        <div className="row">
                                            <div class="col-md-3 col-lg-4 my-padding-bottom-8">
                                                <label >E-mail address:</label>
                                            </div>
                                        
                                            <div className="col-md-9 col-lg-8 mypadding">
                                                <input
                                                id="email"
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                />
                                            </div>
                                        </div> <br/>

                                        <div className="row">
                                            <div className="col-md-3 col-lg-4 my-padding-bottom-8">
                                                <label for="email">Password:</label>
                                            </div>
                                    
                                            <div className="col-md-9 col-lg-8 mypadding">
                                                <input
                                                id="email"
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                />
                                            </div> 
                                        </div>    <br/>

                                        <div className="row">
                                            <div className="col-md-3 col-lg-4"></div>

                                            <div className="col-md-9 col-lg-8">
                                               
                                               <button type="button" className="btn btn-sm btn-warning my-margin-bottom-8"  ><Link to="/" className="nav-link"> Home </Link></button>
                                               

                                                <button
                                                type="submit"
                                                className="btn btn-sm btn-success my-margin-bottom-8"
                                                >
                                                <i className="fas fa-check-circle"></i>
                                                <span>Login</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
              
                                
                           </div>
                    </div>
                     
                </div>
            </div>
		);
	}

	
}

