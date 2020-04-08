
import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthModal from './modal/modal';
import GreetingContainer from "./greeting/greeting_container";
import ErrorsContainer from "./errors/errors_container"


const App = () => (
    <div>
        <ErrorsContainer />
        <header>
            <AuthModal />
            <img src="./assets/greeting_logo.jpg" />
            <GreetingContainer />
        </header>

        <Switch>
            {/* <Route path="/" component={AuthContainer} /> */}
        </Switch>
    </div>
);

export default App;