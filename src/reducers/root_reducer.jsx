import { combineReducers } from 'redux';
import TopicReducer from './topic_reducer';

export default combineReducers({
  currentTopic: TopicReducer
});
