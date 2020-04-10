import { connect } from 'react-redux';
import Directory from './directory';
import { fetchAreas } from '../../actions/area_actions';

const mstp = state => ({
    areas: state.entities.areas
});

const mdtp = dispatch => ({
    fetchAreas: () => dispatch(fetchAreas())
});

export default connect(mstp, mdtp)(Directory);
