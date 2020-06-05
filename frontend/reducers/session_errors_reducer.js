import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ROUTE, RECEIVE_ROUTE_FINDER_ROUTES } from '../actions/route_actions';
import { RECEIVE_AREA, RECEIVE_AREAS } from '../actions/area_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
    case RECEIVE_ROUTE:
    case RECEIVE_AREA:
    case RECEIVE_AREAS:
    case RECEIVE_ROUTE_FINDER_ROUTES:
      return [];
    default:
      return state;
  }
};
