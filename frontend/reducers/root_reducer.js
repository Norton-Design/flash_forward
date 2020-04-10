import { combineReducers } from 'redux';
import entitiesReducer from "./entities_reducer";
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer';
import errors_reducer from './errors_reducer';

//add the ui and errors reducers...
export default combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  ui: uiReducer,
  errors: errors_reducer
});

