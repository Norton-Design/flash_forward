import React from 'react';
import { Link } from 'react-router-dom';
import RouteFinderContainer from './route_finder_container';
// import RouteFinder from './route_finder';

class RouteFinderRoutes extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        const routeList = Object.entries(this.props.routes).map((pair) => {
            const route = pair[1];
            return (
            <ul className="" key={route.id}>
                <li><Link to={`/routes/${route.id}`}>{route.name}</Link></li>
                <li><Link to={`/areas/${route.routeAreaId}`}>{route.routeArea}</Link></li>
                <li>{route.difficulty}</li>
                <li>{route.routeType}</li>
                <li>{route.pitches}</li>
            </ul>
            )}
        )
        return (
            <div>
                <h1>Climbing Route Finder</h1>
                { routeList }
                <RouteFinderContainer/>
            </div>
        )
    }
}


export default RouteFinderRoutes;

