import React from 'react';
import { Link } from 'react-router-dom';

const RouteFinderRoutes = ({ routes }) => {
    const routeList = routes.map((route, idx) => {
        return (
            <ul key={idx}>
                <li><Link to={`/routes/${route.id}`}>{route.name}</Link></li>
                <li><Link to={`/areas/${route.routeAreaId}`}>{route.routeArea}</Link></li>
                <li>{route.difficulty}</li>
                <li>{route.routeType}</li>
                <li>{route.pitches}</li>
            </ul>
        )
    })

    return (
        <div>
            <h1>Climbing Route Finder</h1>
            { routeList }
        </div>
    )
}

export default RouteFinderRoutes;