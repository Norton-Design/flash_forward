import React from 'react';

class RouteFinder extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            route_type = 'Boulder',
            difficultyMin = "V0",
            difficultyMax = "V11",
            pitches = 1
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(type){
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmitForm(e) {
        e.preventDefault();
        // CALL THE SEARCHING FUNCTION
    }

    render(){
        const climbingTypes = ["Boulder", "Aid", "Ice/Mixed", "Trad", "Sport"];
        const boulder_grades = ["VB", "V0", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10"]
        const yds_grades = ["5.5", "5.6", "5.7", "5.8", "5.9", "5.10a", "5.10b", "5.10c", "5.10d", "5.11a", "5.11b", "5.11c", "5.11d", "5.12a", "5.12b", "5.12c", "5.12d", "5.13a", "5.13b", "5.13c", "5.13d", "5.14a", "5.14b", "5.14c", "5.14d", "5.15a", "5.15b", "5.15c", "5.15d"]
        const mixed_grades = ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12", "M13", "M14", "M15"]
        const aid_grades = ['A1', 'A2', 'A3', 'A4', 'A5', 'C1', 'C2', 'C3', 'C4', 'C5']

        // const formGrades = 

        // Create changing difficulty range

        return (
            <div className="route-finder-container">
                <form>
                    <h2>Route Finder</h2>
                    <p>Tell us what you like, we'll tell you what to climb!</p>
                    <label>Type: </label>
                        <select onChange={this.handleInput('route_type')}>
                            {
                            climbingTypes.map(type => <option value={type}>{type}</option>)
                            }
                        </select>

                    <label>Difficulty Range:
                        <select onChange={this.handleInput('difficultyMin')}>
                            {formGrades}
                        </select>
                        to 
                        <select onChange={this.handleInput('difficultyMax')}>
                            {formGrades}
                        </select>
                    </label>

                    <label>Pitches: </label>
                        <select onChange={this.handleInput('pitches')}>
                            <option value="1">Any Pitches</option>
                            <option value="1*">Exactly 1 pitch</option>
                            <option value="2">At least 2</option>
                            <option value="3">At least 3</option>
                            <option value="4">At least 4</option>
                            <option value="5">At least 5</option>
                            <option value="6">6+ pitches</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default RouteFinder;