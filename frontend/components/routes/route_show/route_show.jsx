import React from 'react';
import { Link } from "react-router-dom";

class RouteShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            route: ""
        }
    }

    componentDidMount(){
        this.props.fetchRoute(this.props.match.params.routeId).then(route => {
            this.setState({route: route.route})
        });
    }

    componentDidUpdate(prevProps){
        const currentRouteId = this.props.match.params.routeId;
        const prevRouteId = prevProps.match.params.routeId;
        if (currentRouteId !== prevRouteId){
            this.props.fetchRoute(currentRouteId).then(route => {
                this.setState({route: route.route})
            });
        }
    }

    getTime(timestamp){
        const timeCut = timestamp.slice(0,10).split("-");
        const newTime = [];
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        newTime.push(months[parseInt(timeCut[1])]);
        newTime.push(" ");
        if (parseInt(timeCut[2]) < 10){
            newTime.push(timeCut[2].slice(1));
            newTime.push(', ')
        } else {
            newTime.push(timeCut[2]);
            newTime.push(', ')
        }
        newTime.push(timeCut[0]);

        return newTime.join('');
    }

    render(){
        if (this.state.route === ""){
            return (
                null
            )
        }

        let { 
            name, 
            routeType, 
            difficulty, 
            pitches, 
            elevation, 
            description, 
            protection, 
            sharer, 
            area, 
            pathway,
            createdAt,
            photo_urls
        } = this.state.route;

        let pathwayFill = [<Link key={0} className="show-pathway" to="/">All Areas</Link>];
        let profilePhoto = photo_urls.length > 0 ? <img src={photo_urls[0]}></img> : null

        pathway.forEach(area => {
            pathwayFill.push(" > ");
            pathwayFill.push(<Link key={area.id} className="show-pathway" to={`/areas/${area.id}`}>{area.name}</Link>);
        })

        if (pitches === 1){
            pitches = "1 pitch";
        }   else {
            pitches = pitches.toString().concat(" pitches");
        }

        // console.log(this.state.route)

        const otherRoutes = [];
        this.state.route.siblingRoutes.forEach(route => {
            if (route.id !== this.state.route.id){
                let link = <Link to={`/routes/${route.id}`}>{route.name} {route.difficulty}</Link>
                otherRoutes.push(link);
            }
        })

        return (
            <div className="showpage-main">
                <div className="sidebar">
                    <h3>Routes in { area.name }</h3>
                    { otherRoutes }
                </div>

                <div className="showpage-body">
                <div className="show-pathway">{ pathwayFill }</div>
                    <div className="sub-header">
                        <h1>{ name }</h1>
                        <h2>{ difficulty }</h2>
                        <table className="description-details"> 
                        <tbody>
                            <tr>
                                <td className="description-details-left">Type:</td>
                                <td>{ routeType }, { elevation }ft, { pitches }</td>
                            </tr>
                            <tr>
                                <td className="description-details-left">Shared By:</td>
                                <td>{ sharer.firstName } { sharer.lastName } on { this.getTime(createdAt) }</td>
                            </tr>
                            <tr>
                                <td className="description-details-left">Admins:</td>
                                <td>Placeholder</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="slideshow-show">
                        { profilePhoto }
                    </div>
                    <div className="description-body">
                        <h2>Description</h2>
                        <p>{ description }</p>
                        <h2>Protection</h2>
                        <p>{ protection }</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default RouteShow;