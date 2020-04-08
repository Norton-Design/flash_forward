import { combineReducers } from 'redux';
import entitiesReducer from "./entities_reducer";
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer';

//add the ui and errors reducers...
const rootReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  ui: uiReducer
});

export default rootReducer;
