
import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import AuthModal from './modal/modal';
import GreetingContainer from "./greeting/greeting_container";
import ErrorsContainer from "./errors/errors_container";
import DirectoryContainer from "./directory/directory_container";
import RouteShowContainer from "./routes/route_show/route_show_container";
import AreaShowContainer from "./areas/area_show/area_show_container";
import AreaCreateFormContainer from "./areas/area_create/area_create_form_container";
import RouteCreateFormContainer from "./routes/route_create/route_create_form_container";


const App = () => (
    <>
        <ErrorsContainer />
        <header className="header-main">
            <AuthModal />
            <Link to="/"><img id="main-logo" src="https://utilflashforwardbucket.s3.us-east-2.amazonaws.com/greeting_logo.jpg" /></Link>
            {/* <Link to="/"><img id="main-logo" src="./assets/greeting_logo.jpg" /></Link> */}
            <GreetingContainer />
        </header>

        <main>
            <Route path="/areas/:areaId" component={ AreaShowContainer } />
            <Route path="/routes/:routeId" component={ RouteShowContainer } />
            <Route path="/new/route/:areaId" component={ RouteCreateFormContainer } />
            <Route path="/new/area/:areaId" component={ AreaCreateFormContainer } />
            <Route exact path="/" component={ DirectoryContainer } />
        </main>
        <footer>
            <div className="footer-top">
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-sub">
                    <div className="external-nav">
                        <a href="https://norton-design.github.io/#" target="_blank" ><i class="fas fa-address-card"></i></a>
                        <a href="https://github.com/Norton-Design/flash_forward" target="_blank" ><i class="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/michael-norton-5b5559199/" target="_blank" ><i class="fab fa-linkedin"></i></a>
                        <a href="https://angel.co/u/michael-norton-17" target="_blank" ><i class="fab fa-angellist"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    </>
);

export default App;