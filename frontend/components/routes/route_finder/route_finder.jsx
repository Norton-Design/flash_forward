import React from 'react';
import { Redirect } from 'react-router-dom';

class RouteFinder extends React.Component {
        constructor(props){
        super(props)
        this.state = {
            route_type: 'Boulder',
            difficulty_min: "VB",
            difficulty_max: "VB",
            pitches: 1,
            searched: false
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    handleInput(type){
        return (e) => {
            switch(e.target.value){
                case "Boulder":
                    this.setState({ [type]: e.target.value, difficulty_min: "VB", difficulty_max: "VB" });
                    break;
                case "Aid":
                    this.setState({ [type]: e.target.value, difficulty_min: "A1", difficulty_max: "A1" });
                    break;
                case "Ice/Mixed":
                    this.setState({ [type]: e.target.value, difficulty_min: "M1", difficulty_max: "M1" });
                    break;
                case 'Trad':
                case 'Sport':
                    this.setState({ [type]: e.target.value, difficulty_min: "5.5", difficulty_max: "5.5" });
                    break;
                default:
                    this.setState({ [type]: e.target.value });
                    break;
            };
        };
    }

    handleSubmitForm(e) {
        e.preventDefault();
        // console.log('TESTING')
        this.props.searchRoutes(this.state)
            .then(() => {
                this.setState({searched: true})
            });

        // const { history } = this.props;
        // history.push(`route-finder?route_type=${this.state.route_type}&pitches=${this.state.pitches}&difficulty_min=${this.state.difficulty_min}&difficulty_max=${this.state.difficulty_max}`)
    }

    render() {
        const climbingTypes = ["Boulder", "Aid", "Ice/Mixed", "Trad", "Sport"];
        const boulderGrades = ["VB", "V0", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10"];
        const ydsGrades = ["5.5", "5.6", "5.7", "5.8", "5.9", "5.10a", "5.10b", "5.10c", "5.10d", "5.11a", "5.11b", "5.11c", "5.11d", "5.12a", "5.12b", "5.12c", "5.12d", "5.13a", "5.13b", "5.13c", "5.13d", "5.14a", "5.14b", "5.14c", "5.14d", "5.15a", "5.15b", "5.15c", "5.15d"];
        const mixedGrades = ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12", "M13", "M14", "M15"];
        const aidGrades = ['A1', 'A2', 'A3', 'A4', 'A5', 'C1', 'C2', 'C3', 'C4', 'C5'];
        const routeFinderRedirect = this.state.searched ? <Redirect to="route-finder"/> : null;

        let formGrades;

        switch(this.state.route_type) {
            case "Boulder":
                formGrades = boulderGrades.map(grade => (<option value={grade} key={grade}>{grade}</option>));
                break;
            case "Aid":
                formGrades = aidGrades.map(grade => (<option value={grade} key={grade}>{grade}</option>));
                break;
            case "Ice/Mixed":
                formGrades = mixedGrades.map(grade => (<option value={grade} key={grade}>{grade}</option>));
                break;
            default:
                formGrades = ydsGrades.map(grade => (<option value={grade} key={grade}>{grade}</option>));
                break;
        }

        return (
            <div className="route-finder-container">
                { routeFinderRedirect } 
                <form onSubmit={this.handleSubmitForm}>
                    <h2>Route Finder</h2>
                    <p>Tell us what you like, we'll tell you what to climb!</p>
                    <label>Type:&nbsp;
                        <select onChange={this.handleInput('route_type')}>
                            {
                            climbingTypes.map(type => (<option value={type}>{type}</option>))
                            }
                        </select>
                    </label>

                    <label>Difficulty Range:&nbsp;
                        <select onChange={this.handleInput('difficulty_min')}>
                            {formGrades}
                        </select>
                        &nbsp;to&nbsp;
                        <select onChange={this.handleInput('difficulty_max')}>
                            {formGrades}
                        </select>
                    </label>

                    <label>Pitches:&nbsp;
                        <select onChange={this.handleInput('pitches')}>
                            <option value="1">Any Pitches</option>
                            <option value="1*">Exactly 1 pitch</option>
                            <option value="2">At least 2</option>
                            <option value="3">At least 3</option>
                            <option value="4">At least 4</option>
                            <option value="5">At least 5</option>
                            <option value="6">6+ pitches</option>
                        </select>
                    </label>

                    <button type="submit">Find Routes</button>
                </form>
            </div>
        )
    }
};

export default RouteFinder;

// return (e) => {
//     this.setState({ [type]: e.target.value });
// };


// const that = this;
// return (e) => {
//     if (type === 'route_type'){
//         if (e.target.value === 'Boulder') {
//             return (e) => {
//                 that.setState({
//                     [type]: e.target.value,
//                     difficulty_min: "VB",
//                     difficulty_max: "VB",
//                 })
//             }
//         } else if (e.target.value === 'Aid') {
//             return (e) => {
//                 that.setState({
//                     [type]: e.target.value,
//                     difficulty_min: "A1",
//                     difficulty_max: "A1",
//                 })
//             }
//         } else if (e.target.value === 'Ice/Mixed') {
//             return (e) => {
//                 that.setState({
//                     [type]: e.target.value,
//                     difficulty_min: "M1",
//                     difficulty_max: "M1",
//                 })
//             }
//         } else {
//             return (e) => {
//                 that.setState({
//                     [type]: e.target.value,
//                     difficulty_min: "5.5",
//                     difficulty_max: "5.5",
//                 })
//             }
//         }
//     } else {
//         return (e) => {
//             that.setState({ [type]: e.target.value });
//         };
//     }
// }