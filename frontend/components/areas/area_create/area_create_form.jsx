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
            parent_id: parseInt(props.match.params.areaId),
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileSubmit = this.handleFileSubmit.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
    }

    handleInput(type){

        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        let area = this.state.parent_id
        let formData = new FormData();
        Object.keys(this.state).forEach(attribute => {
            formData.append(`area[${attribute}]`, this.state[attribute]);
        });

        this.props.createArea(formData)
            // setTimeout(() => this.props.history.push(`/areas/${area}`), 500)
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

    handleErrors(){
        const { errors } = this.props;
        if (errors.areaErrors.length >= 1){
            const collection = []
            errors.areaErrors.map(err => {
            collection.push(<li className="error-message" key={err}> {err}. </li>)
            })
    
            return (
                <ul className="error-container">
                    { collection }
                </ul>
            )
        } else {
            return (
                <></>
            )
        }
    }

    render(){
        return(
            <>
            {/* { this.handleErrors() } */}
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
                        accept=".jpg,.png"
                    />

                    <input type="submit" onClick={this.handleSubmit} value="Save Area" />
                </form>
            </div>
            </>
        )
    }
}

export default AreaCreateForm;

