import React from 'react';
import { Link } from 'react-router-dom'

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

        let { name, description, lat, lng, gettingThere, parentName, routes, siblingAreas} = this.state.area;
        let sidebarFill;

        routes.length !== 0 ? sidebarFill = (
            <div className="sidebar">
                <h3>Routes in { name }</h3>
                    {
                        routes.map(route => (
                            <Link key={route.id} to={`/routes/${route.id}`}>{route.name}</Link>
                        ))
                    }
            </div>) : sidebarFill = (
            <div className="sidebar">
                <h3>Areas in { parentName }</h3>
                    {
                        siblingAreas.map(area => (
                            <Link key={area.id} to={`/areas/${area.id}`}>{area.name}</Link>
                        ))
                    }
            </div>
        )

        return (
            <div className="showpage-main">
                { sidebarFill }
                <div className="showpage-body">
                    <div className="sub-header">
                        <h1>{ name }</h1>
                    </div>
                    <table className="description-details"> 
                        <tbody>
                            <tr>
                                <td className="description-details-left">Elevation:</td>
                                <td>{ "Placeholder" } ft</td>
                            </tr>
                            <tr>
                                <td className="description-details-left">GPS:</td>
                                <td>{ lat }, { lng } <a href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}>Map</a></td>
                            </tr>
                            <tr>
                                <td className="description-details-left">Admins:</td>
                                <td>Placeholder</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="slideshow-show">
                    </div>
                    <div className="description-body">
                        <h2>Description</h2>
                        <p>{ description }</p>
                        <h2>Getting There</h2>
                        <p>{ gettingThere }</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AreaShow;