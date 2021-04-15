import { put } from 'redux-saga/effects';
import * as TaskActionCreator from '../actions/createTaskActions';
import * as API from '../api';

export function * createTask (action) {
  try {
    const {
      data: {
        data: [task],
      },
    } = yield API.createTask(action.data);

    yield put(TaskActionCreator.createTaskSuccess(task));
  } catch (error) {
    yield put(TaskActionCreator.createTaskError(error));
  }
}

export function * getTasks (action) {
  try {
    const {
      data: { data: tasks },
    } = yield API.getTasks(action.payload);
    yield put(TaskActionCreator.getTasksSuccess({ tasks }));
  } catch (error) {
    yield put(TaskActionCreator.getTaskError({ error }));
  }
}
