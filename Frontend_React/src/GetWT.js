import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class DetailWT extends Component {
    constructor() {
        super();
        this.state = {
            Demail: "",
            DToken: ""
        };
    }
    detEmail = (event) => {
        this.setState({ Demail: event.target.value });
    }
    detToken = (event) => {
        this.setState({ DToken: event.target.value });
    }
    detLog = (event) => {
        event.preventDefault();
        this.details();
    }

    details = () => {
        axios.post("http://localhost:81/route/acc/wtoken", {
            "email": this.state.Demail,
            "headers": "Authorization" `Bearer ${this.state.DToken}`
        })
            .then(res => {
                console.log(res);
            })
            .catch(function (err) {
                console.log("Error", err)
            })
    }
    render() {
        return (
            <div className="inputtg">
                <form onSubmit={this.detLog}>
                    <input className="inp" id="Demail" value={this.state.Demail} onChange={this.detEmail} placeholder="Email ID" type="email" />
                    <br />
                    <input className="inp" id="DToken" value={this.state.DToken} onChange={this.detToken} placeholder="Token" type="password" />
                    <br />
                    <input type="submit" id="sub" value="Get Data" />
                </form><br/>
                <a href="/register">Register Here</a><br/>
                <a href="/">Login Here</a>
            </div>);
    }
}
export default DetailWT;
