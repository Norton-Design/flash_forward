import AreaCreateForm from './area_create_form';
import { connect } from 'react-redux';
import { createArea } from '../../../actions/area_actions';


const mstp = state => ({
    errors: state.errors.session
});

const mdtp = dispatch => ({
    createArea: areaData => dispatch(createArea(areaData)),
});



export default connect(mstp, mdtp)(AreaCreateForm);