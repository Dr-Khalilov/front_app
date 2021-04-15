import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  tasks: [
    {
      id: 0,
      body: 'test task',
      isDone: false,
    },
  ],
};

let serial = 1;

function reducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_TASK: {
      const { values } = action;
      return {
        ...state,
        tasks: [...state.tasks, { ...values, id: serial++ }],
      };
    }
    case ACTION_TYPES.DELETE_TASK: {
      const { id } = action;
      const { tasks } = state;

      const newTasks = [...tasks];

      const findIndex = newTasks.findIndex(({ id: taskId }) => id === taskId);
      console.log(findIndex);
      newTasks.splice(findIndex, 1);

      return {
        ...state,
        tasks: newTasks,
      };
    }
    case ACTION_TYPES.UPDATE_TASK: {
      const { id, values } = action;
      const { tasks } = state;
      const findIndex = tasks.findIndex(({ id: taskId }) => id === taskId);
      const taskToUpdate = tasks[findIndex]; // находим task
      const updatedTask = {
        ...taskToUpdate,
        ...values,
      };
      const newTasks = [...tasks];
      newTasks.splice(findIndex, 1, updatedTask);
      return {
        ...state,
        tasks: newTasks,
      };
    }
    default:
      return state;
  }
}

export default reducer;
