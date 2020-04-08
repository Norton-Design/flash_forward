import SignupForm from './signup_form'
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions'
import { closeModal } from '../../actions/modal_actions';

const mdtp = dispatch =>({
    signup: user => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal())
})

export default connect(null, mdtp)(SignupForm);