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
  detEmail = event => {
    this.setState({ Demail: event.target.value });
  };
  detToken = event => {
    this.setState({ DToken: event.target.value });
  };
  detLog = event => {
    event.preventDefault();
    this.details();
  };

  details = () => {
    var mytoken = this.state.DToken;
    var options = {
      headers: {
        'Authorization':`Bearer : ${mytoken}`
      }
    };
    var param = {
      params: {
        email: this.state.Demail
      }
    };
    axios
      .get("http://localhost:81/route/acc/wtoken", param, options)
      .then(res => {
        console.log(res.data);
      })
      .catch(function(err) {
        console.log("Error", err);
      });
  };
  render() {
    return (
      <div className="inputtg">
        <form onSubmit={this.detLog}>
          <input
            className="inp"
            id="Demail"
            value={this.state.Demail}
            onChange={this.detEmail}
            placeholder="Email ID"
            type="email"
          />
          <br />
          <input
            className="inp2"
            id="DToken"
            value={this.state.DToken}
            onChange={this.detToken}
            placeholder="Token"
            type="text"
          />
          <br />
          <input type="submit" id="sub" value="Get Data" />
        </form>
        <br />
        <a href="/">Login Here</a>
      </div>
    );
  }
}
export default DetailWT;
