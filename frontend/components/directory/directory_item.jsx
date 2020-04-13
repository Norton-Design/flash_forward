import React from 'react'
import { Link } from "react-router-dom"

class DirectoryItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const { name, id } = this.props.area
        return (
            <li key={id}>
                <Link to={`/areas/${id}`}>{name}</Link>
                <hr />
                <p className="">50</p>
            </li>
        );
    }
}

export default DirectoryItem;