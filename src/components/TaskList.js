import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as TaskActionCreators from '../actions/createTaskActions';

const TaskList = props => {
  const { tasks, isFetching, error, getTasksRequest } = props;

  useEffect(() => {
    getTasksRequest({ limit: 5, offset: tasks });
  }, []);
  return (
    <section>
      {isFetching && 'LOADING...'}
      {error && JSON.stringify(error, null, 4)}
      <h2>TASK LIST</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h3>ID: {task.id}</h3>
            <p>{task.body}</p>
            <p>{task.deadline}</p>
            {/* <input
              type='checkbox'
              checked={task.isDone}
              onChange={({ target: { checked } }) => {
                const values = { isDone: checked };
                deleteTask({ id: task.id, values });
              }}
            /> */}
            {/* <button onClick={() => deleteTask(task.id)}>Delete task</button> */}
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          TaskActionCreators.getTasksRequest({
            limit: 5,
            offset: 0,
          })
        }
      >
        Load more tasks
      </button>
    </section>
  );
};

const mapStateToProps = ({ task }) => ({
  ...task,
});

// const mapDispatchToProps = dispatch => ({
//   deleteTask: id => dispatch(TaskActionCreators.deleteTask(id)),
//   updateTask: values => dispatch(TaskActionCreators.updateTask(values)),
// });

const mapDispatchToState = dispatch => ({
  getTasksRequest: ({ limit, offset } = {}) =>
    dispatch(TaskActionCreators.getTasksRequest({ limit, offset})),
});

export default connect(mapStateToProps, mapDispatchToState)(TaskList);
