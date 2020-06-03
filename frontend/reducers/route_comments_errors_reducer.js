import { RECEIVE_ROUTE_COMMENT_ERRORS, RECEIVE_COMMENT, RECEIVE_COMMENTS } from '../actions/route_comment_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ROUTE_COMMENT_ERRORS:
      return action.errors;
    case RECEIVE_COMMENTS:
      return [];
    case RECEIVE_COMMENT:
      return [];
    default:
      return state;
  }
};
