import SignupForm from './signup_form'
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions'

const mdtp = dispatch =>({
    signup: user => dispatch(signup(user))
})

export default connect(null, mdtp)(SignupForm);