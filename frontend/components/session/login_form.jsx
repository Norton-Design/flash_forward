import React from "react";

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
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
        this.props.login(this.state);
        setTimeout(this.closeModal, 350);
    }

    handleDemoLogin(){
        this.setState({
            email: "DemoUser@FlashForward.com",
            password: "testing"
        })
        this.handleSubmit();
    }

    render(){
        const { email, password } = this.state;
        return (
            <form onSubmit={ this.handleSubmit } className="login">
                <img src=" https://utilflashforwardbucket.s3.us-east-2.amazonaws.com/x_icon.jpg" onClick={ this.closeModal } />
                <h2>Log In</h2>
                    <input 
                        type="email"
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
                <input type="submit" value="Log In" />
                <br />
                <button onClick={this.handleDemoLogin}>Demo Login </button>
            </form>
        )
    }
}

export default LoginForm;
