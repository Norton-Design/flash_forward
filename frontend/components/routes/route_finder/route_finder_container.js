import { connect } from 'react-redux';
import RouteFinder from './route_finder';
// import the submit function

const mstp = state => ({
});

// CHANGE THIS ONCE THE FUNCTION IS WRITTEN
const mdtp = dispatch => ({
    submitForm: () => console.log('SENDING FORM')
});

export default connect(mstp, mdtp)(RouteFinder);
