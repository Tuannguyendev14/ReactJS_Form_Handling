import React, { Component } from 'react';
 


export default class TaskForm extends Component {
    render() {
        return ( 
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">
                    Add tasks
                    <span className="fa fa-times-circle text-right  "></span>
                    </h3> 
                </div> 
                <div className="panel-body">
                    <form >
                        <div className="form-group">
                                <label >Name</label>
                                <input type="text" className="form-control" name="name"  />
                        </div>
                        <div className="form-group">
                            <label  >Status</label>
                            <select name="status"  className="form-control"  >
                                    <option value={0} >Available</option>
                                    <option value= {1} >Unavailable</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-danger btn-md"> <span className="glyphicon glyphicon-saved"></span>  Submit</button>
                        <button type="submit" className="btn btn-success btn-md"> <span className="glyphicon glyphicon-trash"></span>  Cancel</button>
                    </form>
                </div>
            </div>
              
        );
    }


}