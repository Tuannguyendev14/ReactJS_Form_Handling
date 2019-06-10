import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Form extends Component {
    // cach xu ly 1
    constructor(props) {
        super(props);
        this.addProduct2 = this.addProduct2.bind(this);
        this.state={
            username:'',
            password:'',
            status:'',
            gender:0,
            language:'Vietnamese',
            company:'AsianTest'
        };
        this.onHandleChange=this.onHandleChange.bind(this);
        this.onHandleSubmit=this.onHandleSubmit.bind(this);
    }

    addProduct2() {
        console.log(this.refs.name.value);
        console.log(this.refs.price.value);
        console.log(this.refs.status.value);
    }

    // cach xu ly 2
    addProduct = () => {
        console.log(this.refs.name.value);
        console.log(this.refs.price.value);
        console.log(this.refs.status.value);
    }

    onHandleChange(event){
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
        
    }

    onHandleSubmit(event){
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return ( 
            <div>
                <div className = "container" >
                    
                    <div className="panel panel-danger">
                          <div className="panel-heading">
                                <h3 className="panel-title">Handling Form</h3>
                          </div>
                          <div className="panel-body">
                                <form onSubmit={this.onHandleSubmit}>
                                    <div className = "form-group" >
                                        <div className = "row my-padding-bottom-19" >
                                            <div className = "col-md-3 col-lg-4 my-padding-bottom-8" >
                                                <label> User Name: </label>
                                            </div>
                
                                            <div className = "col-md-9 col-lg-8 my-padding-bottom-8" >
                                                <input type = "text" className = "form-control" ref = "name" name="username" onChange={this.onHandleChange} value={this.state.username} />
                                            </div> 
                                        </div> 
                                    </div>
                
                                    <div className = "form-group" >
                                        <div className = "row my-padding-bottom-19" >
                                            <div className = "col-md-3 col-lg-4 my-padding-bottom-8" >
                                                <label> Password: </label>
                                            </div>
                
                                            <div className = "col-md-9 col-lg-8 my-padding-bottom-8" >
                                                <input type = "password" className = "form-control" ref = "password" name="password" 
                                                onChange={this.onHandleChange}  value={this.state.password}/>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className = "form-group" >
                                        <div className = "row my-padding-bottom-19" >
                                            <div className = "col-md-3 col-lg-4 my-padding-bottom-8" >
                                                <label> Gender: </label>
                                            </div>
                
                                            <div className = "col-md-9 col-lg-8 my-padding-bottom-8" >
                                                <select name="gender"  className="form-control"  value={this.state.gender} onChange={this.onHandleChange}  >
                                                    <option value={0}  >Male</option>
                                                    <option value= {1}  >Female</option>
                                                </select>
                                                
                                            </div> 
                                        </div>
                                    </div>

                                    <div className = "form-group" >
                                        <div className = "row my-padding-bottom-19" >
                                            <div className = "col-md-3 col-lg-4 my-padding-bottom-8" >
                                                <label> Language: </label>
                                            </div>
                
                                            <div className = "col-md-9 col-lg-8 my-padding-bottom-8" >
                                                <div className="radio">
                                                    <label>
                                                        <input type="radio" name="language" value="English"  onChange={this.onHandleChange}  checked={this.state.language==="English"}/> English <br/><br/>
                                                        <input type="radio" name="language" value="Vietnamese"  onChange={this.onHandleChange} checked={this.state.language==="Vietnamese"} /> Vietnamese
                                                    </label>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                
                                    <div className = "form-group" >
                                        <div className = "row my-padding-bottom-19" >
                                            <div className = "col-md-3 col-lg-4 my-padding-bottom-8" >
                                                <label > Status: </label> 
                                            </div>
                
                                            <div className = "col-md-9 col-lg-8 my-padding-bottom-8" >
                                                
                                                <textarea name="status" id="input" className="form-control" rows="3" value={this.state.status}  onChange={this.onHandleChange}/>
                                                
                                            </div>
                                        </div> 
                                    </div> 

                                    <div className = "form-group" >
                                        <div className = "row my-padding-bottom-19" >
                                            <div className = "col-md-3 col-lg-4 my-padding-bottom-8" >
                                                <label > Company: </label> 
                                            </div>
                
                                            <div className = "col-md-9 col-lg-8 my-padding-bottom-8" >
                                                <div className="checkbox">
                                                   <label>
                                                       
                                                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                            <input type="checkbox"name="company"
                                                                   value="AsianTest"  onChange={this.onHandleChange}  
                                                                   checked={this.state.company==="AsianTest"}
                                                            />
                                                                Asian Test 
                                                            <br/>

                                                            <input type="checkbox" name="company" 
                                                                    value="Framgia"  onChange={this.onHandleChange}  
                                                                    checked={this.state.company==="Framgia"}
                                                            />
                                                             Framgia  
                                                            
                                                        </div>
                                                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                            <input type="checkbox" name="company"
                                                             value="HtActive"  onChange={this.onHandleChange}  
                                                             checked={this.state.company==="HtActive"}
                                                             />
                                                              HT Active
                                                               <br/><br/>

                                                            <input type="checkbox" name="company"
                                                                value="mgm" onChange={this.onHandleChange}  
                                                                checked={this.state.company==="mgm"  }
                                                             /> 
                                                             mgm 
                                                        </div>
                                                       
                                                   </label>
                                                </div>
                                            </div>
                                        </div> 
                                    </div><hr/>

                                    <div className = "row" >
                                        <div className = "col-md-3 col-lg-4" > </div> 
                                        <div className = "col-md-9 col-lg-8" >
                                            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                                <button type = "button" className = "btn btn-primary"   > <Link to="/" className="nav-link"><span className="glyphicon glyphicon-th-large"></span> Home </Link></button>
                                            </div>
                                            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                                <button type = "submit"  className = "btn btn-success">  <span className="glyphicon glyphicon-ok"></span>  Save   </button> 
                                            </div>
                                            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                                <button type = "reset"  className = "btn btn-sm btn-warning " > <span className="glyphicon glyphicon-menu-left"></span> Reset </button> 
                                            </div>
                                        </div>
                                    </div>
                                </form>
                          </div>
                    </div>
                </div>
            </div>
        );
    }


}