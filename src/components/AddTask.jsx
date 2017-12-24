import React from "react";
import { TextField } from "material-ui";
import { connect } from "react-redux";

const AddTask = props => (
    <TextField name="createTask" onChange={props.createTask}/>
)

const mapDispatchToProps = dispatch => ({
    createTask(e) {
        dispatch({ type: "createTask", payload: "newTask"});
    }
})

export default connect(null, mapDispatchToProps)(AddTask);