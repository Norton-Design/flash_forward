import { RECEIVE_AREA_ERRORS, RECEIVE_AREA } from '../actions/area_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_AREA_ERRORS:
      return action.errors;
    case RECEIVE_AREA:
      return [];
    default:
      return state;
  }
};
