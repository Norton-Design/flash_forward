import { RECEIVE_ROUTE_ERRORS, RECEIVE_ROUTE } from '../actions/route_actions';
import { RECEIVE_AREA_ERRORS, RECEIVE_AREA, RECEIVE_AREAS } from '../actions/area_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ROUTE_ERRORS:
      return action.errors;
    case RECEIVE_AREA_ERRORS:
    case RECEIVE_AREA:
    case RECEIVE_AREAS:
    case RECEIVE_ROUTE:
      return [];
    default:
      return state;
  }
};
