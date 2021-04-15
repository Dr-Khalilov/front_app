import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import { createTask, getTasks } from './taskSagas';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.CREATE_TASK_REQUEST, createTask);
  yield takeLatest(ACTION_TYPES.GET_TASKS_REQUEST, getTasks);
}

export default rootSaga;
