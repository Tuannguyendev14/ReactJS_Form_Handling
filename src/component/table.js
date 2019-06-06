import React,{Component} from 'react';
 


class Table extends Component {

    // state
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

	  	return (
		    <div> 
		        <div className="container">
		        	<div className="row">      		 
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
		    </div>
				
	  	);
	}

	 
}

export default Table;
