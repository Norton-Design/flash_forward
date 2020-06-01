import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import UploadPhotosRouteContainer from '../routes/route_show/upload_photos_route_container';
import UploadPhotosAreaContainer from '../areas/area_show/upload_photos_area_container';
import ShowPhotoContainer from './show_photo_container.js';

const Modal = (state) => {
  const { modal, closeModal, photoUrl } = state
  if (!modal) {
    return null;
  }

  let component;
  switch (modal.modalType) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'addRoutePhotos':
      component = <UploadPhotosRouteContainer />
      break;
    case 'addAreaPhotos':
      component = <UploadPhotosAreaContainer />
      break;
    case "showPhoto":
      component = <ShowPhotoContainer />
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mstp = state => {
  return {
    modal: state.ui.modal
  };
};

const mdtp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mstp, mdtp)(Modal);
