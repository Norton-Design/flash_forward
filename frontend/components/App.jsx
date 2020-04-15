
import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import AuthModal from './modal/modal';
import GreetingContainer from "./greeting/greeting_container";
import ErrorsContainer from "./errors/errors_container";
import DirectoryContainer from "./directory/directory_container"
import RouteShowContainer from "./routes/route_show/route_show_container"
import AreaShowContainer from "./areas/area_show/area_show_container"


const App = () => (
    <>
        <ErrorsContainer />
        <header className="header-main">
            <AuthModal />
            <Link to="/"><img id="main-logo" src="https://utilflashforwardbucket.s3.us-east-2.amazonaws.com/greeting_logo.jpg" /></Link>
            {/* <Link to="/"><img id="main-logo" src="./assets/greeting_logo.jpg" /></Link> */}
            <GreetingContainer />
        </header>
        <hr id="header-border"/>
        <main>
            <Route path="/areas/:areaId" component={ AreaShowContainer } />
            <Route path="/routes/:routeId" component={ RouteShowContainer } />
            <Route exact path="/" component={ DirectoryContainer } />
        </main>
        <footer>
            <div className="footer-top">
            </div>
            <div className="footer-bottom">
            </div>
        </footer>
    </>
);

export default App;