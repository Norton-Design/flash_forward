
import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

// Does this need a separate file?
const AuthContainer = () => (
    <div>
        <LoginFormContainer />
        <SignupFormContainer />
    </div>
)

const App = () => (
    <div>
        <h1>Flash Forward</h1>
        <Switch>
            <Route path="/" component={AuthContainer} />
        </Switch>
    </div>
);

export default App;