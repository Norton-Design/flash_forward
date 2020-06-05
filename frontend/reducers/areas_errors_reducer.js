import { RECEIVE_AREA_ERRORS, RECEIVE_AREA, RECEIVE_AREAS } from '../actions/area_actions';
import { RECEIVE_ROUTE, RECEIVE_ROUTE_FINDER_ROUTES } from '../actions/route_actions'

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_AREA_ERRORS:
      return action.errors;
    case RECEIVE_AREA:
    case RECEIVE_AREAS:
    case RECEIVE_ROUTE:
    case RECEIVE_ROUTE_FINDER_ROUTES:
      return [];
    default:
      return state;
  }
};
