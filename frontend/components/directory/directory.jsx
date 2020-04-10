import React from "react";
import DirectoryItem from './directory_item'

class Directory extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAreas()
    }

    render(){
        console.log(this.props);
        let { areas } = this.props;
        areas = Object.values(areas)
        console.log(areas)

        return (
            <div className="directory-container">
                <div className="directory-banner">
                    <h2>Rock Climbing Guide</h2>
                    <p>300 Routes shared by Climbers Like You</p>
                </div>
                <ul className="directory-list">
                    {
                        areas.map(area => (
                            <DirectoryItem area={area} key={area.id}/>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Directory;