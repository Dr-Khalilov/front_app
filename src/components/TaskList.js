import React from 'react';
import { connect } from 'react-redux';
import * as TaskActionCreators from '../actions/createTaskActions';

const TaskList = props => {
  const { tasks, deleteTask, updateTask } = props;
  return (
    <section>
      <h1>TASK LIST</h1>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h2>ID: {task.id}</h2>
              <p>{task.body}</p>
              <input
                type='checkbox'
                checked={task.isDone}
                onChange={({ target: { checked } }) => {
                  const values = { isDone: checked };
                  updateTask({ id: task.id, values });
                }}
              />
            </div>
            <button onClick={() => deleteTask(task.id)}>Delete task</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = ({ task: { tasks } }) => ({
  tasks,
});

const mapDispatchToProps = dispatch => ({
  deleteTask: id => dispatch(TaskActionCreators.deleteTask(id)),
  updateTask: values => dispatch(TaskActionCreators.updateTask(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
