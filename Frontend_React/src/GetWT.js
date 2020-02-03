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
  };
  detToken = (event) => {
    this.setState({ DToken: event.target.value });
  };
  detLog = (event) => {
    event.preventDefault();
    this.details();
  };

  details = () => {
    var mytoken = JSON.parse(localStorage.getItem("token"));
    axios.get("http://localhost:81/route/acc/wtoken",
      {
        'params': {
          'email': this.state.Demail
        },
        'headers': {
          "Authorization": `Bearer ${mytoken}`
          //or 
          // "x-access-token": mytoken
        }
      })
      .then(res => {
        console.log(res.data);
        this.setState({datum:"Data is received(See console)"});
      })
      .catch(function (err) {
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
          <input type="submit" id="sub" value="Get Data" />
        </form>
        <br />
        <a href="/">Login Here</a><br/>
    <p>{this.state.datum}</p>
      </div>
    );
  }
}
export default DetailWT;
