import { connect } from 'react-redux';
import RouteShow from './route_show';
import { fetchRoute } from '../../../actions/route_actions';
import { openModal } from '../../../actions/modal_actions'

const mstp = (state) => ({
    currentUserId: state.session.currentUserId,
});

const mdtp = dispatch => ({
    openModal: (modalType, photoUrl) => dispatch(openModal(modalType, photoUrl)),
    fetchRoute: routeId => dispatch(fetchRoute(routeId))
});

export default connect(mstp, mdtp)(RouteShow);
