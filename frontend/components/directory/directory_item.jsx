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
                <p className="">50</p>
            </li>
        );
    }
}

export default DirectoryItem;