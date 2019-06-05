import React,{Component} from 'react';
import './App.css';
import Header from './component/header';
import Product from './component/product';
import Form from './component/form';
 
 
 

class App extends Component {
	onClick(text){
		alert(text);
		window.location="http://www.vietjack.com";
	}

	showProduct(product){
		if (product.status) {
			return <h4 className="ml">
			           Id: {product.id}<br/>
		               Name : {product.name}<br/>
		               Gia :{product.gia}<br/>
		               Status :{product.status ? 'active':'pending'}
		            </h4>
		}
	}

	constructor(props){
		super(props);
		this.state={
			products: [
	 			{
	 				id:1,
	 				name:'Iphone',
	 				price:6000000,
	 				image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsLt4IDSU-lT0XD0OjFzpSy29KhSNPBiIqXKtqY-wqpwdDIgKv3jClMho",
	 				status:true

	 			},
	 			{
	 				id:2,
	 				name:'Iphone 4 Plus' ,
	 				price:7000000,
	 				image:"https://didongmango.com/images/products/2018/11/29/large/iphone-7--hong-didongmango_1543501639.jpg.jpg",
	 				status:true

	 			},
	 			{
	 				id:3,
	 				name:'Iphone 7 Plus',
	 				price:8000000,
	 				image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcchoHNppqmwnaUQ_KqR7JWSx3DpKO-FiZJz8fSKz47nbESgTS",
	 				status:true

	 			},
	 			{
	 				id:4,
	 				name:'Iphone X',
	 				price:9000000,
	 				image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFytZlr_xA1KalcJNXKa6CrVAzfXNaKcPP7MyqJZtazVmo24Ad-A",
	 				status:true

	 			}
	 		],
	 		isActive:true
		};
	}

	render(){

		var product = {
	 	 	id:4,
	 	 	name:'tuan',
	 	 	gia:500000,
	 	 	status: true
 		};

 		var users =[
 			{
		 	 	id:1,
		 	 	Name:'Nguyen Huu Tuan',
		 	 	Age: 4
 			},
 			{
		 	 	id:2,
		 	 	Name:'Nguyen Thi Kim A',
		 	 	Age: 34
 			},
 			{
		 	 	id:3,
		 	 	Name:'Nguyen Huu Long',
		 	 	Age: 44
 			}
 		];

 		var elements1= users.map((user, index) =>{
 			return  <div className="ml" key={user.id}>
 						<h4>Name :{user.Name}</h4>
 						<p> ID   :{user.id}<br/>
 							Age  :{user.Age}
 						</p>
 					</div>
 		});

 		var products=[
 			{
 				id:1,
 				name:'Iphone',
 				price:6000000,
 				image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsLt4IDSU-lT0XD0OjFzpSy29KhSNPBiIqXKtqY-wqpwdDIgKv3jClMho",
 				status:true

 			},
 			{
 				id:2,
 				name:'Iphone 4 Plus' ,
 				price:7000000,
 				image:"https://didongmango.com/images/products/2018/11/29/large/iphone-7--hong-didongmango_1543501639.jpg.jpg",
 				status:true

 			},
 			{
 				id:3,
 				name:'Iphone 7 Plus',
 				price:8000000,
 				image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcchoHNppqmwnaUQ_KqR7JWSx3DpKO-FiZJz8fSKz47nbESgTS",
 				status:true

 			},
 			{
 				id:4,
 				name:'Iphone X',
 				price:9000000,
 				image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFytZlr_xA1KalcJNXKa6CrVAzfXNaKcPP7MyqJZtazVmo24Ad-A",
 				status:true

 			}
 		];
 		// props

 		let elements_props =products.map((product,index)=>{
 			let result='';
 			if (product.status) {
 				result = <Product key={product.id}
 							 price={product.price}
 							 image={product.image}
 						>
 							{product.name}
 						</Product>

 			}else {
 				result=''
 			}
 			return  result;
 		});


 		// state
 		let elements_state =this.state.products.map((product,index)=>{
 			let result='';
 			if (product.status) {
 				result =<tr key={product.id}>
					      <th scope="row">{product.id}</th>
					      <td>{product.name}</td>
					      <td>{product.price} vnd</td>
					      <img src={product.image} id="anh"	alt={this.props.children}/>
								      
						</tr>

 			}else {
 				result=''
 			}
 			return  result;
 		});


 		function tick() {
			  const element = (
			    <div>
			      <h1>Hello, world!</h1>
			      <h2>It is {new Date().toLocaleTimeString()}.</h2>
			    </div>
			  );
			    
		}

		setInterval(  1000);

	  	return (
		    <div> 
		        <Header/>
		        <div className="container">
		        	<div className="row">
		        	    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
		        			{elements_props}
		        		</div>
		        		<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
		        			<Form/>
		        		</div>
		        		<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
		        			<div className="table-responsive|table-responsive-sm|table-responsive-md|table-responsive-lg|table-responsive-xl">
		        				<table className="table table-striped|table-dark|table-bordered|table-borderless|table-hover|table-sm">
		        				  <caption>List of users</caption>
		        				  <thead className="thead-dark|thead-light">
		        				    <tr>
		        				      <th scope="col">Stt</th>
		        				      <th scope="col">Name</th>
		        				      <th scope="col">Price</th>
		        				      <th scope="col">Image</th>
		        				    </tr>
		        				  </thead>
		        				  <tbody>
		        				    {elements_state}
		        				  </tbody>
		        				</table>
		        			</div>
		        		</div>
		        		 

		        	</div>
		        </div>
		         
				{this.showProduct(product)}<br/>
				<hr/>
				{elements1}
		    </div>
	  	);
	}

	 
}

export default App;
