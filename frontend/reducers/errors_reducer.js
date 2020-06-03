import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import areasErrorsReducer from './areas_errors_reducer';
import routesErrorsReducer from './routes_errors_reducer';
import routeCommentsErrorsReducer from './route_comments_errors_reducer';

export default combineReducers({
  sessionErrors: sessionErrorsReducer,
  areaErrors: areasErrorsReducer,
  routeErrors: routesErrorsReducer,
  routeCommentsErrors: routeCommentsErrorsReducer
});
