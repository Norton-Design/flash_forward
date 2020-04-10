import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

export default (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState = { [action.currentUser.id]: action.currentUser }
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};

