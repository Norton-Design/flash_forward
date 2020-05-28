import UploadPhotosRouteForm from './upload_photos_route_form'
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import { updateRoute } from '../../../actions/route_actions';

const mstp = state =>({
  currentRoute: state.entities.routes
})

const mdtp = dispatch =>({
  updateRoute: route => dispatch(updateRoute(route)),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mstp, mdtp)(UploadPhotosRouteForm);