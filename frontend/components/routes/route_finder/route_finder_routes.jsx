import React from 'react';
import { Link } from 'react-router-dom';
import RouteFinderContainer from './route_finder_container';

class RouteFinderRoutes extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        const routeList = Object.entries(this.props.routes).map((pair) => {
            const route = pair[1];
            return (
            <tr className="route-finder-row" key={route.id}>
                <td className="detail-large route-name"><Link to={`/routes/${route.id}`}>{route.name}</Link></td>
                <td className="detail-large route-area"><Link to={`/areas/${route.routeAreaId}`}>{route.routeArea}</Link></td>
                <td className="detail-small">{route.difficulty}</td>
                <td className="detail-small">{route.route_type}</td>
                <td className="detail-small">{route.pitches}</td>
            </tr>
            )}
        )
        return (
            <div className="route-finder-main">
                <div className="route-finder-results-container">
                    <h1>Climbing Route Finder</h1>
                    <table className="route-finder-results">
                        { routeList }
                    </table>
                    <RouteFinderContainer/>
                </div>
            </div>
        )
    }
}


export default RouteFinderRoutes;

