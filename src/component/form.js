import React,{Component} from 'react';


export default class Form extends Component{
 	// cach xu ly 1
	constructor(props){
		super(props);
		this.addProduct2=this.addProduct2.bind(this);
	}

	addProduct2(){
		console.log(this.refs.name.value);
		console.log(this.refs.price.value);
		console.log(this.refs.status.value);
	}

	// cach xu ly 2
	addProduct=()=>{
		console.log(this.refs.name.value);
		console.log(this.refs.price.value);
		console.log(this.refs.status.value);
	}

	render(){
		return (
			<div>
				<div className="container">
					<legend>Test refs</legend>
					<div className="form-group">
						<div className="row my-padding-bottom-19">
							<div className="col-md-3 col-lg-4 my-padding-bottom-8">
								<label  >Ten:</label>
							</div>
							
							<div className="col-md-9 col-lg-8 my-padding-bottom-8">
								<input type="text" className="form-control"   
								 ref="name"/ >
							</div>
						</div>
					</div>

					<div className="form-group">
						<div className="row my-padding-bottom-19">
							<div className="col-md-3 col-lg-4 my-padding-bottom-8">
								<label >Gia:</label>
							</div>

							<div className="col-md-9 col-lg-8 my-padding-bottom-8">
								<input  type="text" className="form-control" ref="price"/ >
							</div>
						</div>
					</div>

					<div className="form-group">
						<div className="row my-padding-bottom-19">
							<div className="col-md-3 col-lg-4 my-padding-bottom-8">
								<label 	>Status:</label>
							</div>

							<div className="col-md-9 col-lg-8 my-padding-bottom-8">
								<input   type="text" className="form-control" ref="status"/ >
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-3 col-lg-4"></div>
						<div className="col-md-9 col-lg-8">
							 
							<button type="button" className="btn btn-sm btn-primary"  onClick={this.addProduct2}>Back</button>
							<button type="button" className="btn btn-sm btn-success" onClick={this.addProduct}> Add</button>
						</div>
					</div>
				</div>	
			</div>
		);
	}

	
}

