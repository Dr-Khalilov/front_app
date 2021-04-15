import ACTION_TYPES from './actionTypes';

export const createTask = values => ({
  type: ACTION_TYPES.CREATE_TASK,
  values,
});

export const updateTask = ({ id, values }) => ({
  type: ACTION_TYPES.UPDATE_TASK,
  id,
  values,
});

export const deleteTask = id => ({
  type: ACTION_TYPES.DELETE_TASK,
  id,
});

export const createTaskRequest = data => ({
  type: ACTION_TYPES.CREATE_TASK_REQUEST,
  data,
});

export const createTaskSuccess = data => ({
  type: ACTION_TYPES.CREATE_TASK_SUCCESS,
  data,
});

export const createTaskError = error => ({
  type: ACTION_TYPES.CREATE_TASK_ERROR,
  error,
});

export const getTasksRequest = ({ limit, offset }) => ({
  type: ACTION_TYPES.GET_TASKS_REQUEST,
  payload: { limit, offset },
});

export const getTasksSuccess = ({ tasks }) => ({
  type: ACTION_TYPES.GET_TASKS_SUCCESS,
  payload: { tasks },
});

export const getTaskError = ({ error }) => ({
  type: ACTION_TYPES.GET_TASKS_ERROR,
  payload: { error },
});
