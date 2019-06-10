import React, { Component } from 'react';
 

export default class TaskItem extends Component {
    render() {
        var {task,index} = this.props;
        return ( 
             
                <tr>
                    <td>{index +1}</td>
                    <td>{task.name} </td>
                    <td className="text-center" > 
                    
                    {task.status} </td>
                    <td className="text-center">
                        <button type="button" className="btn btn-warning">  Update</button> &nbsp;
                        <button type="button" className="btn btn-danger">Delete</button>
                        
                    </td>
                </tr>
             
        );
    }


}