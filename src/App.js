import React,{Component} from 'react';
import './App.css';
import Form from './component/form';
import Login from './component/login';
import Homepage from './component/homepage';
import Table from './component/table';
import Chitiet from './component/chitiet';

import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
	render() { 
		return (
			<div> 
				<BrowserRouter>
					<Route exact path= '/' component = {Homepage}/>
					<Route exact path= '/form' component = {Form}/>
					<Route exact path= '/login' component = {Login}/>
					<Route exact path= '/table' component = {Table}/>
					<Route exact path= '/chitiet/{id}' component = {Chitiet}/>

				</BrowserRouter>
			</div>
			
		);
	} 
}

export default App;
