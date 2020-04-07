import LoginForm from './login_form'
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'

const mdtp = dispatch =>({
    login: user => dispatch(login(user))
})

export default connect(null, mdtp)(LoginForm);