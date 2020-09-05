import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './Login.css';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emailError: false,
            emailName: ''
        }
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
    }

    onEmailChange(event) {
        this.setState({
            emailName: event.target.value
        });
    }

    isValidEmail() {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test( this.state.emailName);
    }

    validateEmail() {
        if (this.isValidEmail()) {
            this.setState({
                emailError: false
            })
        } else {
            this.setState({
                emailError: true
            })
        }
    }

    onLoginSubmit() {
        this.validateEmail();
        if(!this.state.emailError && this.state.emailName !== '') {
            fetch('http://localhost:4000/login');
        } else {
            console.log('invalid email');
        }
    }

    render() {
        return (
            <>
            <div className="login-container">
            <div className="login-form">
                
                <div className="user-input">
                    <label className="label">Email</label>
                    <TextField 
                    onChange={this.onEmailChange} 
                    onBlur={this.validateEmail}
                    className="input"
                    variant="outlined"
                    required
                    />
                    {this.state.emailError ? <label className="error-text">Email is not valid</label> : ''}
                </div>
                
                <div className="user-input">
                    <label className="label">Password</label>
                    <TextField className="input" variant="outlined" />
                </div>
                <div className="user-input">
                    <Button 
                    className="submit"
                    onClick={this.onLoginSubmit}
                    variant="contained"
                    color="primary">
                    Login
                    </Button>
                </div>
                <div className="user-input">
                    <a className="signup-link" href = "/signup">New customer? Create an account</a>
                </div>
            </div>
            </div>
            </>
        )
    }
}

export default Login;