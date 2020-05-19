import { connect } from 'react-redux';
import MainBanner from './main_banner.jsx';

const mstp = state => ({
  state: state
});

const mdtp = dispatch => ({
  testFunc: ()=> console.log('foo')
});

export default connect(mstp, mdtp)(MainBanner);
