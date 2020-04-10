import React from 'react'

class DirectoryItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <li>
                <a>{this.props.area.name}</a>
                <hr />
                {/* <small>{area.totalRoutes}</small> */}
            </li>
        );
    }
}

export default DirectoryItem;