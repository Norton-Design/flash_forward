import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import areasReducer from './areas_reducer';
import routesReducer from './routes_reducer';
import routeFinderReducer from './route_finder_reducer';

export default combineReducers({
  users: usersReducer,
  areas: areasReducer,
  routes: routesReducer,
  routeFinderRoutes: routeFinderReducer
});
