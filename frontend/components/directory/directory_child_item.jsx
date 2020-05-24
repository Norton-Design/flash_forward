import React from 'react'
import { Link } from "react-router-dom"

class DirectoryChildItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const { name, id, route_count } = this.props.area
        return (
            <li className="dl-item child-area" key={id}>
                <Link to={`/areas/${id}`}>{name}</Link>
                <hr />
                <p className="">{route_count}</p>
            </li>
        );
    }
}

export default DirectoryChildItem;