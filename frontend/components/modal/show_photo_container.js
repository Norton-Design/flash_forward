import ShowPhoto from './show_photo'
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

const mstp = (state)  =>({
  photoUrl: state.ui.modal.photoUrl
})

const mdtp = dispatch =>({
  closeModal: () => dispatch(closeModal()),
})

export default connect(mstp, mdtp)(ShowPhoto);