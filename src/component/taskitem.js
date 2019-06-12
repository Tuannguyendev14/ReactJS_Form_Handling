import React, { Component } from 'react';
 

export default class TaskItem extends Component {

    onUpdateStatus=()=>{
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDelete=()=>{
        this.props.onDelete(this.props.task.id);
    }

    onUpdate=()=>{
        this.props.onUpdate(this.props.task.id);
    }

    render() {
        var {task,index} = this.props;
        return ( 
             
                <tr>
                    <td>{index +1}</td>
                    <td>{task.name} </td>
                    <td className="text-center" > 
                        <span className={task.status===true ? 'label label-success' : 'label label-danger   ' } 
                        onClick={this.onUpdateStatus}
                        >{task.status===true ? 'Available' : 'Unavailable'}</span> 
                    </td>
                    <td className="text-center">
                        <button type="button" className="btn btn-warning  btn-xs" onClick={this.onUpdate}>  Update</button> &nbsp;
                        <button type="button" className="btn btn-danger btn-xs" onClick={this.onDelete}>    Delete </button>
                        
                    </td>
                </tr>
             
        );
    }


}