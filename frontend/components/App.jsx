
import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavBarContainer from "./nav_bar/nav_bar_container"

// Does this need a separate file?
const AuthContainer = () => (
    <div>
        <NavBarContainer />
        <LoginFormContainer />
        <SignupFormContainer />
    </div>
)

const App = () => (
    <div>
        <Switch>
            <Route path="/" component={AuthContainer} />
        </Switch>
    </div>
);

export default App;