import * as APIUtil from '../util/route_api_util';

export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
export const RECEIVE_ROUTE_FINDER_ROUTES = "RECEIVE_ROUTE_FINDER_ROUTES";

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

const receiveRouteFinderRoutes = payload => ({
    type: RECEIVE_ROUTE_FINDER_ROUTES,
    routes: payload.routes || {},
    areas: payload.areas || {}
});

export const fetchRoute = id => dispatch => APIUtil.fetchRoute(id)
    .then( route => (dispatch(receiveRoute(route))) );

export const fetchRoutes = () => dispatch => APIUtil.fetchRoutes()
    .then( routes => (dispatch(receiveRoutes(routes))) );

export const createRoute = routeData => dispatch => (APIUtil.createRoute(routeData)
    .then( route => dispatch(receiveRoute(route))) );

export const searchRoutes = searchParams => dispatch => (APIUtil.searchRoutes(searchParams)
    .then( routes => dispatch(receiveRouteFinderRoutes(routes))) );

export const updateRoute = route => dispatch => (APIUtil.updateRoute(route)
    .then(route => dispatch(receiveRoute(route)))
    // .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
      );