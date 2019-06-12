import React, { Component } from 'react';
import TaskItem from './taskitem';
 

export default class TaskList extends Component {
    render() {
        var {tasks} = this.props ;

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
                                <input type="text" className="form-control" name="filtername"  />
                            </td>
                            <td>
                                <select name="filterstatus" id="input" className="form-control">
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