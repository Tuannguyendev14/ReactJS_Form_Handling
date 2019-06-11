import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import TaskForm from './taskform';
import Control from './control'; 
import TaskList from './tasklist';

export default class TaskManagement extends Component {

    constructor(props){
        super(props);
        this.state={
            tasks:[] ,// id, name, status
            isDisplayform:false
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

    // Dong mo form , xet gia tri nguoc lai
    onToggleForm=() =>{
        this.setState({
            isDisplayform: !this.state.isDisplayform
        });
    }

    // Dong form
    onCloseForm=()=>{
        this.setState({
            isDisplayform: false
        });
    }
    onSubmit=(data)=>{
        var {tasks} = this.state;
        data.id = 4;
        tasks.push(data);
        this.setState({
            tasks:tasks
        });  
        localStorage.setItem('tasks', JSON.stringify(tasks));       
    }
 
    onUpdateStatus=(id)=>{
        var {tasks} = this.state;
        var index= this.findIndex(id);
        if(index!==-1){
            tasks[index].status=!tasks[index].status;
            this.setState({
                tasks:tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    findIndex=(id)=>{
        var {tasks} = this.state;
        var result = -1;
        tasks.forEach((task,index)=>{
            if(task.id===id){
                result = index;
            }
        });
        return result;
    }

    onDelete=(id)=>{
        var {tasks} = this.state;
        var index= this.findIndex(id);
        if(index!==-1){
            tasks.splice(index,1);
            this.setState({
                tasks:tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        this.onCloseForm();
    }

    render() {
        var { tasks, isDisplayform} = this.state; // var tasks = this.state.tasks
        var elmTaskForm = isDisplayform ? <TaskForm onSubmit={this.onSubmit} onCloseForm={this.onCloseForm}/> : '';
        return ( 
            <div className = "container"> 
                <div className="text-center">
                    <h3>Task Management</h3><hr/>
                </div>
                <div className="row">
                    <div className={isDisplayform? "col-xs-12 col-sm-12 col-md-12 col-lg-4" :""}>
                        {/*Form*/}
                       {elmTaskForm}
                    </div>
                    <div className={isDisplayform? "col-xs-12 col-sm-12 col-md-12 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button type="button" className="btn btn-primary"
                        onClick={this.onToggleForm}>
                             <span className="glyphicon glyphicon-plus"></span> 
                              Add tasks</button>
                         
                        {/*Search and Sort*/}
                        <Control/>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                {/*List task*/}
                                <TaskList tasks={tasks}
                                    onUpdateStatus={this.onUpdateStatus}
                                    onDelete={this.onDelete}
                                />
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                    
                 
            </div>
        );
    }


}