import React, { Component } from 'react'

export class Login extends Component {
    constructor(props) {
        super(props)

        // this.emailInputRef = React.createRef();
        // this.passwordInputRef = React.createRef();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleEmailChange = (e) => {
        e.preventDefault();
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChange = (e) => {
        e.preventDefault();
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <form className="login-form">
                <span className="login-signup-header">Log In</span>
                <div className="field">
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        onChange={this.handleEmailChange}
                        value={this.state.email}
                    />
                </div>
                <div className="field">
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        onChange={this.handlePasswordChange}
                        value={this.state.password}
                    />
                </div>
                <div className="field">
                    <button onClick={this.handleFormSubmit}>Log In</button>
                </div>
            </form>
        )
    }
}

export default Login
