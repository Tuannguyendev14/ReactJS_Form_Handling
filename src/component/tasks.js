import React, { Component } from 'react';
 
import TaskForm from './taskform';
import Control from './control'; 
import TaskList from './tasklist';

export default class TaskManagement extends Component {

    constructor(props){
        super(props);
        this.state={
            tasks:[] ,// id, name, status
            isDisplayform:false,
            taskEditting: null
        }
    }
    onGenerateData =()=>{
        var tasks = [
            {
                id:1,
                name:'Read documents about React Life Circle',
                status: false
            },
            {
                id: 2,
                name:'Create a form',
                status:true
            },
            {
                id:  3,
                name:'Use props and state to get the data from the form',
                status:true
            },{
                id:4,
                name:'Devided the components',
                status: false
            },
            {
                id: 5,
                name:'Store data into local storage',
                status:true
            },
            {
                id:  6,
                name:'Update data',
                status:true
            }
        
        ];
        this.setState({
            tasks:tasks
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
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
        if(this.state.isDisplayform && this.state.taskEditting!== null){
             
            this.setState({
                 
                isDisplayform: true,
                taskEditting : null
            });
        }else{
            this.setState({
                isDisplayform: !this.state.isDisplayform,
                taskEditting : null
            });
        }
    }

    // Dong form
    onCloseForm=()=>{
        this.setState({
            isDisplayform: false
        });
    }

    // Open form
    onShowForm=()=>{
        this.setState({
            isDisplayform: true
        });
    }

    onSubmit=(data)=>{
        var {tasks} = this.state;
        if(data.id===''){
            data.id = 4;
            tasks.push(data);
        }else{
            var index=this.findIndex(data.id);
            tasks[index]= data;
        }
        this.setState({
            tasks:tasks,
            
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

    onUpdate=(id)=>{
        var {tasks} = this.state;
        var index= this.findIndex(id);
        var taskEditting= tasks[index];
         
        this.setState({
            taskEditting: taskEditting
        });
        this.onShowForm();
                
            
    }

    render() {
        var { tasks, isDisplayform, taskEditting} = this.state; // var tasks = this.state.tasks

        var elmTaskForm = isDisplayform ? <TaskForm onSubmit={this.onSubmit} 
                                                    onCloseForm={this.onCloseForm}
                                                    task={taskEditting}
                                          /> : '';


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
                              Add tasks
                        </button>

                        <button type="button" className="btn btn-warning" 
                        onClick={this.onGenerateData}> <span className="glyphicon glyphicon-plus"></span> 
                        Generate
                            </button> 
                         
                        {/*Search and Sort*/}
                        <Control/>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                {/*List task*/}
                                <TaskList  
                                tasks={tasks}
                                    onUpdateStatus={this.onUpdateStatus}
                                    onDelete={this.onDelete}
                                    onUpdate={this.onUpdate}
                                />
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                    
                 
            </div>
        );
    }


}