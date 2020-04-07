import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import { login, logout, signup } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', ()=>{
    const store = configureStore();
    const root = document.getElementById('root');
    // TESTING
    window.login = login; 
    window.logout = logout; 
    window.signup = signup; 
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // TESTING

    ReactDOM.render(<Root store={store} />, root)
})