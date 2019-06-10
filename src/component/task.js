import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import TaskForm from './taskform';
import Control from './control'; 
import TaskList from './tasklist';

export default class TaskManagement extends Component {

    constructor(props){
        super(props);
        this.state={
            tasks:[] // id, name, status
        }
    }


    componentWillMount(){
        if(localStorage && localStorage.getItem ('tasks')){
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            });
        }
    }

    onGenerateData =()=>{
        var tasks = [
            {
                id:1,
                name:'Hoc lap trinh',
                status: 'Available'
            },
            {
                id: 2,
                name:'Hoc may tinh',
                status:'Available'
            },
            {
                id:  3,
                name:'Di boi',
                status:'Unavailable'
            }
        
        ];
        this.setState({
            tasks:tasks
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
 

    render() {
        var { tasks} = this.state; // var tasks = this.state.tasks
        return ( 
            <div className = "container">
                <div className="text-center">
                    <h3>Task Management</h3><hr/>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                        {/*Form*/}
                        <TaskForm/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                        <button type="button" className="btn btn-primary"> <span className="glyphicon glyphicon-plus"></span>   Add tasks</button>
                        <button type="button" className="btn btn-warning" onClick={this.onGenerateData}> <span className="glyphicon glyphicon-plus"></span>   Generate</button>
                        {/*Search and Sort*/}
                        <Control/>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                {/*List task*/}
                                <TaskList tasks={tasks}/>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                    
                 
            </div>
        );
    }


}