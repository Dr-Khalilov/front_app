import axios from 'axios';
import queryString from 'query-string';

const httpClient = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export const createTask = async data => {
  const responsePromise = httpClient.post('/tasks', data);
  return responsePromise;
};

export const getTasks = ({ limit = 5, offset = 0 } = {}) => {
  const promise = httpClient.get(
    `/tasks?${queryString.stringify({ limit, offset })}`
  );
  return promise;
};
