import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import UploadPhotosRouteContainer from '../routes/route_show/upload_photos_route_container';

const Modal = ({modal, closeModal}) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'addPhotos':
      component = <UploadPhotosRouteContainer />
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
