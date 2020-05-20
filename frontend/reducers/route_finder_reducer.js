import { RECEIVE_ROUTE_FINDER_ROUTES } from "../actions/route_actions";

const routeFinderReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ROUTE_FINDER_ROUTES:
      return action.routes;
    default:
      return oldState;
  }
};

export default routeFinderReducer;