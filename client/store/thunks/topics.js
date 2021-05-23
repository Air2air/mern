import { snakeToCamelCase } from 'json-style-converter/es5';
import R from 'ramda';

import { getTopics, postTopic, putToggleCompleteTopic, putTopic, deleteTopic } from '_api/topics';
import { setTopics, addTopic, toggleCompleteTopic, updateTopic, removeTopic } from '_actions/topics';

import { dispatchError } from '/api/api';

export const attemptGetTopics = () => dispatch =>
  getTopics()
    .then(data => {
      const topics = R.map(topic =>
        R.omit(['Id'], R.assoc('id', topic._id, snakeToCamelCase(topic))), data.topics);

      dispatch(setTopics(topics));
      return data.topics;
    })
    .catch(dispatchError(dispatch));

export const attemptAddTopic = text => dispatch =>
  postTopic({ text })
    .then(data => {
      const topic = R.omit(['Id'], R.assoc('id', data.topic._id, snakeToCamelCase(data.topic)));

      dispatch(addTopic(topic));
      return data.user;
    })
    .catch(dispatchError(dispatch));

export const attemptToggleCompleteTopic = id => dispatch =>
  putToggleCompleteTopic({ id })
    .then(data => {
      dispatch(toggleCompleteTopic(id));
      return data;
    })
    .catch(dispatchError(dispatch));

export const attemptUpdateTopic = (id, text) => dispatch =>
  putTopic({ id, text })
    .then(data => {
      dispatch(updateTopic({ id, text, updatedAt: data.topic.updated_at }));
      return data;
    })
    .catch(dispatchError(dispatch));

export const attemptDeleteTopic = id => dispatch =>
  deleteTopic({ id })
    .then(data => {
      dispatch(removeTopic(id));
      return data;
    })
    .catch(dispatchError(dispatch));
