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
