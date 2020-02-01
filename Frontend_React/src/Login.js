import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            lemail: "",
            lpassword: ""
        };
    }
    loginEmail = (event) => {
        this.setState({ lemail: event.target.value });
    }
    loginPassword = (event) => {
        this.setState({ lpassword: event.target.value });
    }
    inLog = (event) => {
        event.preventDefault();
        this.login();
    }

    login = () => {
        axios.post("http://localhost:81/route/acc/log", {
            "email": this.state.lemail,
            "password": this.state.lpassword
        })
            .then(res => {
                console.log(res);
                console.log(res.data.token)
                this.setState({mytoken:res.data.token})

            })
            .catch(function (err) {
                console.log("Error", err)
            })
    }
    render() {
        return (
            <div className="inputtg">
                <form onSubmit={this.inLog}>
                    <input className="inp" id="lemail" value={this.state.lemail} onChange={this.loginEmail} placeholder="Email ID" type="text" />
                    <br />
                    <input className="inp" id="lpassword" value={this.state.lpassword} onChange={this.loginPassword} placeholder="Password" type="password" />
                    <br />
                    <input type="submit" id="sub" value="Login" />
                </form><br />
                <a href="/details">Get Details Here</a>
                <br />
                <a href="/register">Register Here</a><br/>
                <p>{this.state.mytoken}</p>
            </div>);
    }
}
export default Login;
