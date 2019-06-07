import React,{Component} from 'react';


export default class Chitiet extends Component{


	render(){
		return (
			<div>
                <div className="container">
                    <div className="row">
                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <img src={this.props.image} id="thumbnail" alt={this.props.children}/>
                        </div>
                        
                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <h3>{this.props.children}</h3>
                            <h3>{this.props.price}</h3>
                        </div>
                        
                        
                    </div>
                </div>
  
                
			 	 
			</div>
		);
	}
		
	
}
 
