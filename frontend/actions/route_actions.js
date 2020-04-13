import * as APIUtil from '../util/route_api_util';

export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';

export const receiveRoute = route => {
    // debugger;
    return {
    type: RECEIVE_ROUTE,
    route
}};

export const receiveRoutes = routes => {
    // debugger;
    return {
    type: RECEIVE_ROUTES,
    routes
}};

export const fetchRoute = id => dispatch => APIUtil.fetchRoute(id)
    .then( route => (dispatch(receiveRoute(route))) );

export const fetchRoutes = () => dispatch => APIUtil.fetchRoutes()
    .then( routes => (dispatch(receiveRoutes(routes))) );