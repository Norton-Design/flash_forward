import { combineReducers } from 'redux';

import session_errors_reducer from './session_errors_reducer';

export default combineReducers({
  session_errors: session_errors_reducer
});
