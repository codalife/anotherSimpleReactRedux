import React from 'react';
import { List, ListItem } from 'material-ui';
import AddTask from "./AddTask";
import { connect } from "react-redux";

const ListStyle = {
    width: "30%"
}

class TasksList extends React.Component {
    render() {
        const tasks = this.props.tasks.map((task, index) => (
                <ListItem primaryText={task.name} key={index}/>
            )
        );
        return (
            <div style={ListStyle}>
                <h2>To Do</h2>
                <AddTask />
                <List >
                    {tasks}
                </List>
            </div>
        )
    }
}

const mapStateToProps = state => ({tasks: state.tasks});

export default connect(mapStateToProps)(TasksList);