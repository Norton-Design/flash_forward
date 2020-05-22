import { connect } from 'react-redux';
import RouteFinderRoutes from './route_finder_routes';

const mstp = state => ({
    routes: state.entities.routeFinderRoutes
});

const mdtp = dispatch => ({
    // searchRoutes: searchParams => dispatch(searchRoutes(searchParams))
});

export default connect(mstp, mdtp)(RouteFinderRoutes);
