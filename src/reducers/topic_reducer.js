import { TOPIC_SELECTED } from '../actions/index';

export default (state = "", action) => {
  switch(action.type) {
    case TOPIC_SELECTED:
      return action.payload;
    default:
      return state;
  }
}
