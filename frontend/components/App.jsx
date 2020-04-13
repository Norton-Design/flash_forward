
import React from "react";
import { Route, Switch } from "react-router-dom";
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
            {/* <img src="https://utilflashforwardbucket.s3.us-east-2.amazonaws.com/greeting_logo.jpg" /> //Production link */}
            <img src="./assets/greeting_logo.jpg" /> {/*Dev link*/}
            <GreetingContainer />
        </header>
        <main>
            <Route path="/areas/:areaId" component={ AreaShowContainer } />
            <Route path="/routes/:routeId" component={ RouteShowContainer } />
            <Route exact path="/" component={ DirectoryContainer } />
        </main>
    </>
);

export default App;