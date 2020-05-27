import React from 'react';

class AreaCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            getting_there: "",
            lat: "",
            lng: "",
            parent_id: parseInt(props.match.params.areaId)
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileSubmit = this.handleFileSubmit.bind(this);
    }

    handleInput(type){
        // if (type === "lat" || type === "lng"){
        //     return (e) => {
        //         this.setState({ [type]: parseFloat(e.target.value) });
        //     };
        // }
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.state.lat = parseFloat(this.state.lat)
        this.state.lng = parseFloat(this.state.lng)

        let area = this.state.parent_id
        let formData = new FormData();
        Object.keys(this.state).forEach(attribute => {
            formData.append(`area[${attribute}]`, this.state[attribute]);
        });

        this.props.createArea(formData)
            .then(() => this.props.history.push(`/areas/${area}`));
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
        // console.log(this.state);

        return(
            <div className="create-form">
                <h1>New Area</h1>
                <hr />
                <form>
                    <label>Area Name:</label>
                    <br />
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.handleInput('name')}
                            className="create-form-input"
                        />
                    <br />

                    <label>Latitude:</label>
                    <br />
                        <input
                            type="text"
                            value={this.state.lat}
                            onChange={this.handleInput('lat')}
                            className="create-form-input"
                        />
                    <br />

                    <label>Longitude:</label>
                    <br />
                        <input
                            type="text"
                            value={this.state.lng}
                            onChange={this.handleInput('lng')}
                            className="create-form-input"
                        />
                    <br />

                    <label>Description:</label>
                    <br />
                        <textarea
                            value={this.state.description}
                            onChange={this.handleInput('description')}
                            placeholder=" Sunny? Access fees? Crowded? Secluded? Rock type/quality?"
                        />
                    <br />
                    <label>How do you get there?</label>
                    <br />
                        <textarea
                            value={this.state.getting_there}
                            onChange={this.handleInput('getting_there')}
                            placeholder=" Be specific and clear. How long is the approach?"
                        />
                    <br />

                    <input
                        type="file"
                        onChange={this.handleFileSubmit}
                        multiple
                        accept=".jpg,.png"
                    />

                    <input type="submit" onClick={this.handleSubmit} value="Save Area" />
                </form>
            </div>
        )
    }
}

export default AreaCreateForm;

