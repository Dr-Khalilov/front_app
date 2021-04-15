import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

function reducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.CREATE_TASK_SUCCESS: {
      const { data: task } = action;
      const { tasks } = state;

      return {
        ...state,
        isFetching: false,
        tasks: [...tasks, task],
      };
    }
    case ACTION_TYPES.CREATE_TASK_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    case ACTION_TYPES.GET_TASKS_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.GET_TASKS_SUCCESS: {
      const { tasks } = state;
      const {
        payload: { tasks: newTasks },
      } = action;
      return {
        ...state,
        isFetching: false,
        tasks: [...tasks, newTasks],
      };
    }
    case ACTION_TYPES.GET_TASKS_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isFetching: false,
        error,
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
