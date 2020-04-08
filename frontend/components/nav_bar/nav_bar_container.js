import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';


const mstp = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
});

const mdtp = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(mstp, mdtp)(NavBar);
