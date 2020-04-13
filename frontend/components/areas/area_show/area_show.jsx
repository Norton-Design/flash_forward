import React from 'react';

class AreaShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            area: ""
        }
    }

    componentDidMount(){
        debugger;
        this.props.fetchArea(this.props.match.params.areaId).then(area => {
            this.setState({area: area.area})
        });
    }

    render(){
        if (this.state.area === ""){
            return (
                null
            )
        }

        let { name, description, gettingThere, lat, lng} = this.state.area;

        return (
            <div className = "testing">
                <p>{ name }</p>
                <p>{ description }</p>
            </div>
        )
//         if (pitches === 1){
//             pitches = "1 pitch";
//         }   else {
//             pitches = pitches.toString().concat(" pitches");
//         }

//         return (
//             <div className="showpage-main">
//                 <div className="sidebar">
//                     <h3>Routes in { area.name }</h3>
//                     <a>Placeholder route</a>
//                     <a>Placeholder route</a>
//                     <a>Placeholder route</a>
//                 </div>
//                 <div className="showpage-body">
//                     <div className="sub-header">
//                         <h1>{ name }</h1>
//                         <h2>{ difficulty }</h2>
//                     </div>
//                     <table className="description-details"> 
//                         <tbody>
//                             <tr>
//                                 <td className="description-details-left">Type:</td>
//                                 <td>{ routeType }, { elevation }ft, { pitches }</td>
//                             </tr>
//                             <tr>
//                                 <td className="description-details-left">Shared By:</td>
//                                 <td>{ sharer.firstName } { sharer.lastName }</td>
//                             </tr>
//                             <tr>
//                                 <td className="description-details-left">Admins:</td>
//                                 <td>Placeholder</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                     <div className="slideshow-show">
//                     </div>
//                     <div className="description-body">
//                         <h2>Description</h2>
//                         <p>{ description }</p>
//                         <h2>Protection</h2>
//                         <p>{ protection }</p>
//                     </div>
//                 </div>
//             </div>
//         )
    }
}

export default AreaShow;