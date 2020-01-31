import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Button extends Component {
  render() {
    return (
      <div>
        <input type="button" value={this.props.btnval} id="sub" />
      </div>
    );
  }
}

export default Button;
