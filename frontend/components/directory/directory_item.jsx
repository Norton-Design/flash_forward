import React from 'react'
import { Link } from "react-router-dom"

class DirectoryItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const { name, id, route_count } = this.props.area
        return (
            <li className="dl-item parent-area" key={id}>
                <Link to={`/areas/${id}`}>{name}</Link>
                <hr />
                <p className="parent-area-route-count">{route_count}</p>
            </li>
        );
    }
}

export default DirectoryItem;