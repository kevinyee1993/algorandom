import { TOPIC_SELECTED } from '../actions/index';

export default (state = {topic: "", alternate: true}, action) => {
  switch(action.type) {
    case TOPIC_SELECTED:
      state.alternate = !state.alternate;
      // return action.payload;
      return {
        topic: action.payload,
        alternate: state.alternate
      };
    default:
      return state;
  }
}
