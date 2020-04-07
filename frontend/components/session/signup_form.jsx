import React from "react";

class SignupForm extends React.Component{
    constructor(props){
        super(props);
        //does this need to be snake_case to connect to the backend?
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        }
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type){
        return e => {
            this.setState({
                [type]: e.target.value
            })
        }
    }

    handleSubmit(){
        this.props.signup(this.state);
    }

    render(){
        const { email, password, firstName, lastName } = this.state;
        return (
            <form onSubmit={ this.handleSubmit }>
                <h2>Sign Up</h2>
                    <input 
                        type="text"
                        value={email}
                        placeholder="Log in with email"
                        onChange={this.handleInput('email')} />
                    <br />
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={this.handleInput('password')} />
                    <br/>
                    <input
                        type="text"
                        value={firstName}
                        placeholder="First Name"
                        onChange={this.handleInput('firstName')} />
                    <br/>
                    <input
                        type="text"
                        value={lastName}
                        placeholder="Last Name"
                        onChange={this.handleInput('lastName')} />
                    <br/>
                <input type="submit" value="Sign Up" />
            </form>
        )
    }
}

export default SignupForm;
