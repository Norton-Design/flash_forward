import React from "react";

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
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
        this.props.login(this.state);
    }

    render(){
        const { email, password } = this.state;
        return (
            <form onSubmit={ this.handleSubmit }>
                <h2>Log In</h2>
                    <br />>
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

                <input type="submit" value="Log In" />
            </form>
        )
    }
}

export default LoginForm;
