import React, { Component } from "react";
import menu from "./svg/bars-solid.svg";
import CartIcon from "./svg/shopping-cart-solid.svg";
import Close from "./svg/times-solid.svg";
import { Link } from "react-router-dom";
import "./css/Header.css"

export class Header extends Component {

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }
     

  render() {
    const {toggle} = this.state;
    return (
      <header>
        <div className="menu" onClick={this.menuToggle}>
          <img src={menu} alt="" width={20} />
        </div>
        <div className="logo">
          <h1>
            <Link to="/"> Nike </Link>
          </h1>
        </div>
        <nav>
          <ul className={toggle ? "toggle" : "" }>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">product </Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">login / Register </Link>
            </li>
            <li className="close" onClick={this.menuToggle}>
              <img src={Close} alt="" width={20} />
            </li>
          </ul>
        </nav>
        <div className="nav-cart">
          <span>0</span>
          <Link to="/cart">
            <img src={CartIcon} alt="" width={20} />
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
