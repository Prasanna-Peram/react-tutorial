import React from "react";

export class EventClassDemo extends React.Component
{
    constructor() {
        super();
        this.state = {
            msg:""
        }
        this.handleInsertClick = this.handleInsertClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }
    handleInsertClick() {
        this.setState({
            msg: "Record Inserted Successfully"
        })
    }
    handleDeleteClick(){
        this.setState({
            msg: "Record Deleted Successfully"
        })
    }
    render() {
        return(
            <div className="container-fluid">
                <button onClick={this.handleInsertClick} className="btn btn-primary mt-3">Insert</button>
                <button onClick={this.handleDeleteClick} className="btn btn-danger mt-3">Delete</button>
                <p>{this.state.msg}</p>
            </div>
        )
    }
}