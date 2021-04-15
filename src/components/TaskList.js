import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as TaskActionCreators from '../actions/createTaskActions';

const TaskList = props => {
  const { tasks, isFetching, error, getTasks, createTask, deleteTask } = props;

  useEffect(() => {
    getTasks({ offset: tasks.length });
  }, []);
  return (
    <section>
      {isFetching && 'LOADING...'}
      {error && JSON.stringify(error, null, 4)}

      <h1>TASK LIST</h1>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
              <h2>ID: {task.id}</h2>
              <p>{task.body}</p>
              <p>{task.deadline}</p>
              <input
                type='checkbox'
                checked={task.isDone}
                onChange={({ target: { checked } }) => {
                  const values = { isDone: checked };
                  createTask({ id: task.id, values });
                }}
              />
            <button onClick={() => deleteTask(task.id)}>Delete task</button>
          </li>
        ))}
      </ul>
      <button onClick={() => getTasks({ offset: tasks.length })}>
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
  getTasks: ({ limit, offset } = {}) =>
    dispatch(TaskActionCreators.getTasksRequest({ limit, offset })),
});

export default connect(mapStateToProps, mapDispatchToState)(TaskList);
