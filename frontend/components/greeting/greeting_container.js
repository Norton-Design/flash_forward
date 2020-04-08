import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Greeting from './greeting';

const mstp = state => {
  console.log(state);
  return {
  currentUser: state.entities.users[state.session.currentUserId],
  }
};

const mdtp = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mstp, mdtp)(Greeting);
