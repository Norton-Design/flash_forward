import { RECEIVE_AREA, RECEIVE_AREAS } from "../actions/area_actions"

export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_AREA:
            return Object.assign({}, state, action.area)
        case RECEIVE_AREAS:
            return Object.assign({}, state, action.areas)
        default:
            return state;
    }
}
