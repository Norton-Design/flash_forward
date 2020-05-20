import { connect } from 'react-redux';
import RouteFinder from './route_finder';
import { searchRoutes } from "../../../actions/route_actions";
// import the submit function

const mstp = state => ({
});

const mdtp = dispatch => ({
    searchRoutes: searchParams => dispatch(searchRoutes(searchParams))
});

export default connect(mstp, mdtp)(RouteFinder);
