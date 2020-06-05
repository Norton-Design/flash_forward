import * as APIUtil from '../util/route_comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_ROUTE_COMMENT_ERRORS = 'RECEIVE_ROUTE_COMMENT_ERRORS';

export const receiveComment = comment => {
  return {
  type: RECEIVE_COMMENT,
  comment
}};

export const receiveComments = comments => {
  return {
  type: RECEIVE_COMMENTS,
  comments
}};

export const receiveErrors = errors => ({
  type: RECEIVE_ROUTE_COMMENT_ERRORS,
  errors
});

export const fetchComment = id => dispatch => APIUtil.fetchComment(id)
  .then( comment => (dispatch(receiveComment(comment))) );

export const createComment = commentData => dispatch => (APIUtil.createComment(commentData)
  .then( comment => dispatch(receiveComment(comment)
  ), errors => dispatch(receiveErrors(errors.responseJSON)) 
));

export const updateComment = comment => dispatch => (APIUtil.updateComment(comment)
  .then( comment => dispatch(receiveComment(comment))) );

export const deleteComment = id => dispatch => (APIUtil.deleteComment(id)
  .then( comment => (dispatch(receiveComment(comment))
  ), errors => dispatch(receiveErrors(errors.responseJSON))
));

