import RouteCreateForm from './route_create_form';
import { connect } from 'react-redux';
import { createRoute } from '../../../actions/route_actions';


const mstp = state => ({
    errors: state.errors.session
});

const mdtp = dispatch => ({
    createRoute: routeData => dispatch(createRoute(routeData)),
});



export default connect(mstp, mdtp)(RouteCreateForm);