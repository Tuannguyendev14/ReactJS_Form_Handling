import React, { Component } from 'react';
import TaskItem from './taskitem';
 

export default class TaskList extends Component {

    // Filter data from form
    constructor(props){
        super(props);
        this.state={
            filterName : '',
            filterStatus : -1 // all: -1 , active: 1, deactive: 0
        }
    }

    onChange=(event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter(
            name==='filterName' ? value : this.state.filterName,
            name==='filterStatus' ? value : this.state.filterStatus
        );
        this.setState({
            [name]:value
        });
        
    }

    render() {
        var {tasks} = this.props ;
        var {filterName, filterStatus} = this.state;
        var elmTasks = tasks.map((task,index)=> {
            return   <TaskItem key={task.id}
                             index={index}
                             task={task}
                             onUpdateStatus={this.props.onUpdateStatus}
                             onDelete={this.props.onDelete}
                             onUpdate={this.props.onUpdate}
                    />
        });


        return ( 
            <div>
                <table className="table table-bordered table-hover mt-15">
                    <thead>
                        <tr>
                            <th>Stt</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input type="text" className="form-control" name="filterName" value={filterName} onChange={this.onChange}  />
                            </td>
                            <td>
                                <select name="filterStatus" id="input" className="form-control" value="{filterStatus}" onChange={this.onChange}>
                                    <option value={-1}>All</option>
                                    <option value={0}>Unavailable</option>
                                    <option value={1}>Available</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                        {elmTasks}
                         

                    </tbody>
                </table>
            </div>
        );
    }


}