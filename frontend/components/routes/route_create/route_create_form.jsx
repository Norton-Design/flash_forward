import React from 'react';

class RouteCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            route_type: "",
            difficulty: "",
            pitches: 1,
            elevation: "",
            description: "",
            protection: "",
            area_id: parseInt(props.match.params.areaId),
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleGradeSelection = this.toggleGradeSelection.bind(this);
        this.handleFileSubmit = this.handleFileSubmit.bind(this);
    }

    handleInput(type){
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    toggleGradeSelection(route_type){
        let difficultyInput;
        const boulder_grades = ["VB", "V0", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10"];
        const yds_grades = ["5.5", "5.6", "5.7", "5.8", "5.9", "5.10a", "5.10b", "5.10c", "5.10d", "5.11a", "5.11b", "5.11c", "5.11d", "5.12a", "5.12b", "5.12c", "5.12d", "5.13a", "5.13b", "5.13c", "5.13d", "5.14a", "5.14b", "5.14c", "5.14d", "5.15a", "5.15b", "5.15c", "5.15d"];
        const mixed_grades = ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12", "M13", "M14", "M15"];
        const aid_grades = ['A1', 'A2', 'A3', 'A4', 'A5', 'C1', 'C2', 'C3', 'C4', 'C5'];

        if (route_type === "Boulder"){
            difficultyInput = (
                <div>
                    <select id="grades" name="grades" onChange={this.handleInput('difficulty')}>
                    {boulder_grades.map(grade => (
                        <option key={grade} value={grade}>{grade}</option>
                    ))}
                    </select>
                </div>
            )
        } else if (route_type === "Aid"){
            difficultyInput = (
                <div>
                    <select id="grades" name="grades" onClick={this.handleInput('difficulty')}>
                        {aid_grades.map(grade => (
                            <option key={grade} value={grade}>{grade}</option>
                        ))}
                    </select>
                </div>)
        } else if (route_type === "Ice/Mixed"){
            difficultyInput = (
            <div>
                <select id="grades" name="grades" onClick={this.handleInput('difficulty')}>
                    {mixed_grades.map(grade => (
                        <option key={grade} value={grade}>{grade}</option>
                    ))}
                </select>
            </div>)
        } else if (route_type === "Trad"){
            difficultyInput = (
            <div>
                <select id="grades" name="grades" onClick={this.handleInput('difficulty')}>
                    {yds_grades.map(grade => (
                        <option key={grade} value={grade}>{grade}</option>
                    ))}
                </select>
            </div>)
        } else if (route_type === "Sport"){
            difficultyInput = (
            <div>
                <select id="grades" name="grades" onClick={this.handleInput('difficulty')}>
                    {yds_grades.map(grade => (
                        <option key={grade} value={grade}>{grade}</option>
                    ))}
                </select>
            </div>)
        } else {
            difficultyInput = (
            <p>Please select a route type.</p>
            )
        }
        return difficultyInput;
    }

    handleSubmit(e) {
        e.preventDefault();
        this.state.elevation = parseFloat(this.state.elevation)
        let area = this.state.area_id
        let formData = new FormData();
        Object.keys(this.state).forEach(attribute => {
            formData.append(`route[${attribute}]`, this.state[attribute]);
        });

        // for (let i = 0; i < this.state.photos.length; i++) {
        //     // console.log(this.state.photos[i])
        //     formData.append('route[photos][]', this.state.photos[i]);
        // }

        // for (var key of formData.keys()) {
        //     console.log(key); 
        //  }

        this.props.createRoute(formData)
            .then(() => this.props.history.push(`/areas/${area}`));
                        // .then((returnVal) => console.log(returnVal));
    }

    handleFileSubmit(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];

        reader.onloadend = () =>
        this.setState({ photoUrl: reader.result, photo: file });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ photoUrl: "", photo: null });
        }
    }

    render(){
        return(
            <div className="create-form">
                <h1>New Route</h1>
                <hr />
                <form>
                    <label>Route Name:</label>
                    <br />
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.handleInput('name')}
                            className="create-form-input"
                        />
                    <br />

                    <label>Elevation:</label>
                    <br />
                        <input
                            type="text"
                            value={this.state.elevation}
                            onChange={this.handleInput('elevation')}
                            className="create-form-input"
                            placeholder=" Approximate in ft."
                        />
                    <br />

                    <label>Pitches:</label>
                    <br />
                        <input 
                            value={this.state.pitches} 
                            onChange={this.handleInput('pitches')} 
                            type="number" 
                            id="pitches" 
                            name="pitches" 
                            step="1" min="1" max="80"
                            className="create-form-input"/>
                    <br />

                    <label>Route Type:</label>
                        <div>
                            <input type="radio" value="Boulder" name="route_type" id="Boulder" onChange={this.handleInput('route_type')}/>
                            <label>Boulder</label>
                        </div>

                        <div>
                            <input type="radio" value="Aid" name="route_type" id="Aid" onChange={this.handleInput('route_type')}/>
                            <label>Aid</label>
                        </div>

                        <div>
                            <input type="radio" value="Ice/Mixed" name="route_type" id="Ice/Mixed" onChange={this.handleInput('route_type')}/>
                            <label>Ice/Mixed</label>
                        </div>

                        <div>
                            <input type="radio" value="Trad" name="route_type" id="Trad" onChange={this.handleInput('route_type')}/>
                            <label>Trad</label>
                        </div>

                        <div>
                            <input type="radio" value="Sport" name="route_type" id="Sport" onChange={this.handleInput('route_type')}/>
                            <label>Sport</label>
                        </div>
                    <br />

                    <label>Grade:</label>
                        { this.toggleGradeSelection(this.state.route_type) }
                    <br />

                    <label>Description:</label>
                    <br />
                        <textarea
                            value={this.state.description}
                            onChange={this.handleInput('description')}
                            placeholder=" Where's the crux? What's good / bad? Details, opinions, and deep thoughts."
                        />
                    <br />
                    <label>Protection:</label>
                    <br />
                        <textarea
                            value={this.state.protection}
                            onChange={this.handleInput('protection')}
                            placeholder=" What type of pro? Bolts or fixed gear? Anchors at top?"
                        />
                    <br />

                    <input
                        type="file"
                        onChange={this.handleFileSubmit}
                        multiple
                        accept=".jpg,.png"
                    />

                    <input type="submit" onClick={this.handleSubmit} value="Save Route" />
                </form>
            </div>
        )
    }
}

export default RouteCreateForm;

