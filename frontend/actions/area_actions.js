import * as APIUtil from '../util/area_api_util';

export const RECEIVE_AREA = 'RECEIVE_AREA';
export const RECEIVE_AREAS = 'RECEIVE_AREAS';
export const RECEIVE_AREA_ERRORS = 'RECEIVE_AREA_ERRORS'

export const receiveArea = area => {
    // debugger;
    return {
    type: RECEIVE_AREA,
    area
}};

export const receiveAreas = areas => {
    // debugger;
    return {
    type: RECEIVE_AREAS,
    areas
}};

export const receiveErrors = errors => ({
    type: RECEIVE_AREA_ERRORS,
    errors
});

export const fetchArea = id => dispatch => APIUtil.fetchArea(id)
    .then( area => (dispatch(receiveArea(area))) );

export const fetchAreas = () => dispatch => APIUtil.fetchAreas()
    .then( areas => (dispatch(receiveAreas(areas))) );

export const createArea = areaData => dispatch => (APIUtil.createArea(areaData)
    .then( area => dispatch(receiveArea(area))
    , errors => dispatch(receiveErrors(errors.responseJSON))
));

export const updateArea = area => dispatch => (APIUtil.updateArea(area)
    .then(area => dispatch(receiveArea(area))
    , errors => dispatch(receiveErrors(errors.responseJSON))
));
