import LoginForm from './login_form'
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'
import { closeModal } from '../../actions/modal_actions';

const mdtp = dispatch =>({
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal())
})

export default connect(null, mdtp)(LoginForm);