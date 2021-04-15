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

    yield put(TaskActionCreator.createTask)
  } catch (error) {
    next(error);
  }
}
