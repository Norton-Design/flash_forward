import { RECEIVE_ROUTE, RECEIVE_ROUTES } from "../actions/route_actions"

export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ROUTE:
            return Object.assign({}, state, action.route)
        case RECEIVE_ROUTES:
            return Object.assign({}, state, action.routes)
        default:
            return state;
    }
}