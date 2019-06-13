import React, { Component } from 'react';
 


export default class Control extends Component {

    constructor(props){
        super(props);
        this.state={
            keyword : ''           
        }
    }

    onChange=(event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        });
    }

    onSearch=()=>{
        this.props.onSearch(this.state.keyword);
    }

    onClick=(sortBy, sortValue)=>{
        this.props.onSort(sortBy, sortValue);
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }

    render() {

        var {keyword,sort}= this.state;
        return ( 
           <div>
                <div className="row mt-15">
                                                
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="input-group">
                            <input type="text" name="keyword"  className="form-control"  placeholder="Enter key words..."  value={keyword} onChange={this.onChange}/>
                            <span className="input-group-btn">
                                <button type="button" className="btn btn-primary btn-xs" onClick={this.onSearch}>
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
                                <li onClick={ () => this.onClick('name', 1) }>
                                    <a role="button">
                                        <span className="glyphicon glyphicon-sort-by-alphabet"> A-Z </span>
                                    </a>
                                </li>
                                <li onClick={ () => this.onClick('name', -1 ) } >
                                    <a role="button">
                                        <span className="glyphicon glyphicon-sort-by-alphabet-alt"> Z-A </span>
                                    </a>
                                </li>
                                <li role="separator" className="divider"></li>
                                <li onClick={ () => this.onClick('status', 1) } >
                                    <a role="button">
                                        Available
                                    </a>
                                </li>
                                <li onClick={ () => this.onClick('status', -1) } >
                                    <a role="button">
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