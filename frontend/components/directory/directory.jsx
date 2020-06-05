import React from "react";
import DirectoryItem from './directory_item';
import DirectoryChildItem from './directory_child_item';
import MainBannerContainer from '../main/main_banner_container'

class Directory extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            areas: ''
        }
    }

    componentDidMount(){
        debugger
        this.props.fetchAreas().then(areas => {
            this.setState({areas: areas.areas})
        })
    }

    render(){
        if (this.state.areas === ''){
            return null;
        }

        debugger

        let areas = Object.values(this.state.areas)

        return (
            <>
                {<MainBannerContainer />}
                <hr id="header-border"/>
                <div className="directory-container">
                    <div className="directory-banner">
                        <h2>Rock Climbing Guide</h2>
                        {/* <p>300 Routes shared by Climbers Like You</p> */}
                    </div>
                    <ul className="directory-list">
                        {
                            areas.map(area => {
                                const child_areas = area.childAreas.map(child => (
                                    <DirectoryChildItem area={child} key={child.id}/>
                                ))
                                return (
                                    <div className="directory-list-item-container">
                                        <DirectoryItem area={area} key={area.id}/>
                                        {child_areas}
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
            </>
        )
    }
}

export default Directory;
