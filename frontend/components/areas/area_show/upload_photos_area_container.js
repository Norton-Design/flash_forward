import UploadPhotosAreaForm from './upload_photos_area_form'
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import { updateArea } from '../../../actions/area_actions';

const mstp = state =>({
  currentArea: state.entities.areas
})

const mdtp = dispatch =>({
  updateArea: area => dispatch(updateArea(area)),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mstp, mdtp)(UploadPhotosAreaForm);