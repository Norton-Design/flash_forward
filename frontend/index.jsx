import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import { login, logout, signup } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', ()=>{
    let store;
    if (window.currentUser){
        const preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                }
            },
            session: {
                    currentUserId: window.currentUser.id
                }
        }
        ;
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // TESTING
    // window.login = login; 
    // window.logout = logout; 
    // window.signup = signup; 
    window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // TESTING
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root)
})