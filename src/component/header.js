import React,{Component}from 'react';
 

export default class Header extends Component {
 	 render(){
 	 	
	  	return(
	    <div> 
	         <nav className="navbar navbar-inverse">
	         	<div className="container-fluid">
	         		<a className="navbar-brand"  >Title</a>
	         		<ul className="nav navbar-nav">
	         			<li className="active">
	         				<a herf="#">Home</a>
	         			</li>
	         			<li>
	         				<a herf="#"> About us</a>
	         			</li>
	         			<li  >
	         				<a herf="#">Contact</a>
	         			</li>
	         			<li>
	         				<a herf="#">Detail</a>
	         			</li>
	         		</ul>
	         	</div>
	         </nav>
	         
	    </div>
	  	);
  	}
}


