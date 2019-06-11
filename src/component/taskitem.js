import React, { Component } from 'react';
 

export default class TaskItem extends Component {

    onUpdateStatus=()=>{
        this.props.onDelete(this.props.task.id);
    }

    onDelete=()=>{
        this.props.onDelete(this.props.task.id);
    }
    render() {
        var {task,index} = this.props;
        return ( 
             
                <tr>
                    <td>{index +1}</td>
                    <td>{task.name} </td>
                    <td className="text-center" > 
                        {task.status===true ? 'Available' : 'Unavailable'} 
                    </td>
                    <td className="text-center">
                        <button type="button" className="btn btn-warning">  Update</button> &nbsp;
                        <button type="button" className="btn btn-danger" onClick={this.onDelete}>Delete</button>
                        
                    </td>
                </tr>
             
        );
    }


}