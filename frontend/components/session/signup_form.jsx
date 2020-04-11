import React from "react";

class SignupForm extends React.Component{
    constructor(props){
        super(props);
        //does this need to be snake_case to connect to the backend?
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: ''
        }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = props.closeModal;
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
        setTimeout(this.closeModal, 350);
    }

    render(){
        const { email, password, first_name, last_name } = this.state;
        return (
            <form onSubmit={ this.handleSubmit } className="signup">
                <img src="https://flashforwardbucket.s3.us-east-2.amazonaws.com/util/x_icon.jpg" onClick={this.closeModal} />
                <h2>Sign Up</h2>
                    <input 
                        type="email"
                        value={email}
                        placeholder="Sign up with email"
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
                        value={first_name}
                        placeholder="First Name"
                        onChange={this.handleInput('first_name')} />
                    <br/>
                    <input
                        type="text"
                        value={last_name}
                        placeholder="Last Name"
                        onChange={this.handleInput('last_name')} />
                    <br/>
                <input type="submit" value="Sign Up" />
            </form>
        )
    }
}

export default SignupForm;
