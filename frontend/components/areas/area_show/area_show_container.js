import { connect } from 'react-redux';
import AreaShow from './area_show';
import { fetchArea } from '../../../actions/area_actions';
import { openModal } from '../../../actions/modal_actions'

const mstp = (state) => ({
    currentUserId: state.session.currentUserId,
});

const mdtp = dispatch => ({
    openModal: (modalType, photoUrl) => dispatch(openModal(modalType, photoUrl)),
    fetchArea: areaId => dispatch(fetchArea(areaId))
});

export default connect(mstp, mdtp)(AreaShow);