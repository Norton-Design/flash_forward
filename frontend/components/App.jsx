
import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthModal from './modal/modal';
import GreetingContainer from "./greeting/greeting_container";
import ErrorsContainer from "./errors/errors_container";
import DirectoryContainer from "./directory/directory_container"


const App = () => (
    <>
        <ErrorsContainer />
        <header className="header-main">
            <AuthModal />
            <img src="https://flashforwardbucket.s3.us-east-2.amazonaws.com/util/greeting_logo.jpg" />
            <GreetingContainer />
        </header>
        <main>
            <DirectoryContainer />
        </main>
    </>
);

export default App;