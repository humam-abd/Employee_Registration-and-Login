import React, { Component } from "react";
import "./App.css";

const $ = window.$;
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      pass: "",
      repass: "",
      email: "",
      addr: ""
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.register();
    
  };
  handleName = (event) => {
    this.setState({ name: event.target.value });
  };
  handleAge = (event) => {
    this.setState({ age: event.target.value });
  };
  handlePass = (event) => {
    this.setState({ pass: event.target.value });
  };
  handleRepass = (event) => {
    this.setState({ repass: event.target.value });
  };
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handleAddr = (event) => {
    this.setState({ addr: event.target.value });
  };

  register = () =>{
    var reg_data = {
      "name": this.state.name,
      "age": this.state.age,
      "password": this.state.pass,
      "passwordOg": this.state.repass,
      "email": this.state.email,
      "address": this.state.addr
    };
    console.log(this.state.name);
    var reg = JSON.stringify(reg_data);
    $.ajax({
      url: "http://localhost:81/route/acc/reg",
      type: "POST",
      contentType: "application/json",
      data: reg,
      error: function (err) {
        console.log("Error");
      },
      success: function (regd) {
        console.log("Success");
        //change the response type in API to data rather than success message
        console.log(regd);
        alert(regd.name);
      }
    });
  }

  render() {
    return (
      <div className="inputtg">
        <form onSubmit={this.handleSubmit}>
          <input
            id="name"
            className="inp"
            name="name"
            placeholder="Name"
            type="text"
            value={this.state.name}
            onChange={this.handleName}
          />
          <br />
          <input
            id="age"
            className="inp"
            name="age"
            placeholder="Age"
            type="number"
            value={this.state.age}
            onChange={this.handleAge}
          />
          <br />
          <input
            id="password"
            className="inp"
            name="password"
            placeholder="Password"
            type="password"
            value={this.state.pass}
            onChange={this.handlePass}
          />
          <br />
          <input
            id="passwordOg"
            className="inp"
            name="passwordOg"
            placeholder="Re-enter password"
            type="password"
            value={this.state.repass}
            onChange={this.handleRepass}
          />
          <br />
          <input
            id="email"
            className="inp"
            name="email"
            placeholder="Email"
            type="email"
            value={this.state.email}
            onChange={this.handleEmail}
          />
          <br />
          <input
            id="address"
            className="inp"
            name="address"
            placeholder="Address"
            type="text"
            value={this.state.addr}
            onChange={this.handleAddr}
          />
          <br />
          <input id="sub" type="submit" value="Register" />
          <br />
        </form>
      </div>
    );
  }
}

export default Register;
