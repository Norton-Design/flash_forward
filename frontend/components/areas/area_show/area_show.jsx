import React from 'react';
import { Link } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa";

class AreaShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            area: ""
        }
    }

    componentDidMount(){
        this.props.fetchArea(this.props.match.params.areaId).then(area => {
            this.setState({area: area.area})
        });
    }

    componentDidUpdate(prevProps){
        const currentAreaId = this.props.match.params.areaId;
        const prevAreaId = prevProps.match.params.areaId;
        if (currentAreaId !== prevAreaId){
            this.props.fetchArea(currentAreaId).then(area => {
                this.setState({area: area.area})
            });
        }
    }

    render(){
        if (this.state.area === ""){
            return (
                <div className="null-test"></div>
            )
        }

        let dropdownCard;
        let { 
            name, 
            description, 
            lat, 
            lng, 
            gettingThere, 
            parentName, 
            routes, 
            childAreas, 
            pathway,
            createdAt,
            photo_urls
        } = this.state.area;
        let gettingThereDiv;
        let sidebarFill;
        let pathwayFill = [<Link className="show-pathway" to="/">All Areas</Link>];

        let profilePhoto = photo_urls.length > 0 ? <img src={photo_urls[0]}></img> : null

        if (routes.length > 0){
            dropdownCard = (
            <div className="dropdown-content">
                <Link to={`/new/route/${this.props.match.params.areaId}`}>Route</Link>
            </div>)
        } else if (childAreas.length > 0){
            dropdownCard = (
            <div className="dropdown-content">
                <Link to={`/new/area/${this.props.match.params.areaId}`}>Sub-Area</Link>
            </div>)
        } else {
            dropdownCard = (
            <div className="dropdown-content">
                <Link to={`/new/area/${this.props.match.params.areaId}`}>Sub-Area</Link>
                <br />
                <Link to={`/new/route/${this.props.match.params.areaId}`}>Route</Link>
            </div>)
        }

        routes.length !== 0 ? sidebarFill = (
            <div className="sidebar">
                <h3>Routes in { name }</h3>
                    {
                        routes.map(route => (
                            <Link key={route.id} to={`/routes/${route.id}`}>{route.name} {route.difficulty}</Link>
                        ))
                    }
            </div>) : sidebarFill = (
            <div className="sidebar">
                <h3>Areas in { name }</h3>
                    {
                        childAreas.map(area => (
                            <Link key={area.id} to={`/areas/${area.id}`}>{area.name}</Link>
                        ))
                    }
            </div>
        )

        pathway.forEach(area => {
            pathwayFill.push(" > ");
            pathwayFill.push(<Link className="show-pathway" to={`/areas/${area.id}`}>{area.name}</Link>);
        })

        if (gettingThere){
            gettingThereDiv = (
                <>
                    <h2>Getting There</h2>
                    <p>{ gettingThere }</p>
                </>
            )
        } else {
            gettingThereDiv = (
                <></>
            )
        }

        return (
            <div className="showpage-main">
                <div>
                    { sidebarFill }
                </div>

                <div className="showpage-body">
                    <div className="show-pathway">{ pathwayFill }
                        <div className="dropdown">
                            <a>Add to Page<FaAngleDown /></a>
                            { dropdownCard }
                        </div>
                    </div>

                    <div className="sub-header">
                        <h1>{ name }</h1>
                        <table className="description-details"> 
                        <tbody>
                            <tr>
                                <td className="description-details-left">Elevation:</td>
                                <td>{ "Placeholder" } ft</td>
                            </tr>
                            <tr>
                                <td className="description-details-left">GPS:</td>
                                <td>{ lat }, { lng } <a href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}>Google Map</a></td>
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
                        { gettingThereDiv }
                    </div>
                </div>
            </div>
        )
    }
}

export default AreaShow;