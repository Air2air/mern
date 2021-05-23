import request from 'superagent';
import { handleSuccess, handleError } from '/api/api';

export const postTopic = info =>
  request.post('/api/topics')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const getTopics = () =>
  request.get('/api/topics')
    .then(handleSuccess)
    .catch(handleError);

export const putToggleCompleteTopic = info =>
  request.put('/api/topics/complete')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const putTopic = info =>
  request.put('/api/topics')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const deleteTopic = info =>
  request.delete('/api/topics')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);
