import React,{Component} from 'react';


export default class Product extends Component{
	constructor(props){
		super(props);
		this.addToCard=this.addToCard.bind(this);	
	}



	addToCard(){
		alert(this.props.children);
	}
	
	addToCard2 = () => {
		alert(this.props.children);
	}

	render(){
		return (
			<div>
			 	<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
			 		<div className="thumbnail">
			 			<img src={this.props.image} id="thumbnail" alt={this.props.children}/>
			 			<div className="caption">
			 				<h3>{this.props.children}</h3>
			 				<p>
			 					{this.props.price} VND	
			 				</p>
			 				<p>
			 					<a  className="btn btn-primary" onClick={this.addToCard }>Cach1</a>
			 					<a  className="btn btn-warning" onClick={this.addToCard2 }>Cach2</a>
			 				</p>
			 			</div> 
			 		</div>
			 	</div>
			</div>
		);
	}
		
	
}
 
