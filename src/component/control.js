import React, { Component } from 'react';
 


export default class Control extends Component {
    render() {
        return ( 
           <div>
                <div className="row mt-15">
                                                
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="input-group">
                            <input type="text" name="keyword"  className="form-control"  placeholder="Enter key words..."/>
                            <span className="input-group-btn">
                                <button type="button" className="btn btn-primary btn-xs">
                                    <span className="glyphicon glyphicon-search"></span>Search
                                </button>
                            
                            </span>
                        </div>
                    </div>

                    
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="dropdown">
                            <button className="btn btn-primary dropdown -toggle" type="button" id="dropdownmenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Sort    <span className="glyphicon glyphicon-collapse-down"></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownmenu1" >
                                <li>
                                    <a role="button" className="sort_selected">
                                        <span className="glyphicon glyphicon-sort-by-alphabet"> A-Z </span>
                                    </a>
                                </li>
                                <li>
                                    <a role="button" className="sort_selected">
                                        <span className="glyphicon glyphicon-sort-by-alphabet-alt"> Z-A </span>
                                    </a>
                                </li>
                                <li role="separator" className="divider"></li>
                                <li>
                                    <a role="button" >
                                        Available
                                    </a>
                                </li>
                                <li>
                                    <a role="button" >
                                            Unavailable 
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
           </div>
        );
    }


}