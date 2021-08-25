import React, { Component } from "react";
import Products from "./Products";
import { Router } from "react-router-dom";

export class Section extends Component {
  render() {
    return (
      <section>
        <Router path="/product" component={Products} />
      </section>
    );
  }
}

export default Section;
