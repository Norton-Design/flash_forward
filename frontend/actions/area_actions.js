import * as APIUtil from '../util/area_api_util';

export const RECEIVE_AREA = 'RECEIVE_AREA';
export const RECEIVE_AREAS = 'RECEIVE_AREAS';

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

export const fetchArea = id => dispatch => APIUtil.fetchArea(id)
    .then( area => (dispatch(receiveArea(area))) );

export const fetchAreas = () => dispatch => APIUtil.fetchAreas()
    .then( areas => (dispatch(receiveAreas(areas))) );

export const createArea = areaData => dispatch => (APIUtil.createArea(areaData)
    .then( area => dispatch(receiveArea(area))) );