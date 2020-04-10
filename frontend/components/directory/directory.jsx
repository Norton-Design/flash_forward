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
            <div>
                <ol>
                    {
                        areas.map(area => (
                            <DirectoryItem area={area} key={area.id}/>
                        ))
                    }
                </ol>
            </div>
        )
    }
}

export default Directory;