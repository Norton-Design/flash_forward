import { connect } from 'react-redux';
// import { openModal } from '../../actions/modal_actions';
// import { closeModal } from '../../actions/modal_actions';
import Errors from './errors';

const mstp = state => {

    return {
    errors: state.errors
    }
};

const mdtp = dispatch => ({
//   openModal: modal => dispatch(openModal(modal))
});

export default connect(mstp, mdtp)(Errors);
