import { connect } from 'react-redux';
import RouteShow from './route_show';
import { fetchRoute } from '../../../actions/route_actions';

// const mstp = (state, { match }) => {
//     return {
//     routeId: parseInt(match.params.routeId),
// }};

const mdtp = dispatch => ({
    fetchRoute: routeId => dispatch(fetchRoute(routeId))
});

export default connect(null, mdtp)(RouteShow);
