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
        // debugger;
        this.props.fetchArea(this.props.match.params.areaId).then(area => {
            this.setState({area: area.area})
        });
    }

    render(){
        if (this.state.area === ""){
            return (
                <div className="null-test"></div>
            )
        }

        let { name, description, lat, lng, gettingThere, parentName, routes} = this.state.area;

        return (
            <div className="showpage-main">
                <div className="sidebar">
                    <h3>Routes in { name }</h3>
                    {
                        routes.map(route => (
                            <Link to={`/routes/${route.id}`}>{route.name}</Link>
                        ))
                    }
                </div>
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