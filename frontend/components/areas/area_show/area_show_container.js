import { connect } from 'react-redux';
import AreaShow from './area_show';
import { fetchArea } from '../../../actions/area_actions';

const mdtp = dispatch => ({
    fetchArea: areaId => dispatch(fetchArea(areaId))
});

export default connect(null, mdtp)(AreaShow);