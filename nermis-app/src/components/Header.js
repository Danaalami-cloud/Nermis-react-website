import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../images/logo.jpeg"
 import '../App.css'


export default class Navbar extends Component {
    state= {
        isOpen: false
    };
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen});
    };
    render() {
        return (
            <nav className="navbar">
            <div className="nav-center">
            <div className="nav-header">
            <Link smooth to="#home">
            <img src={logo} width="110px" alt="NR" />
            </Link>
            <button 
            type="button"
            className="nav-btn"
            onClick={this.handleToggle}>
             {/* <FaAlignright className="nav-icon" /> */}
            </button>
            </div>
            <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
            <Link  to="#home">Home</Link>
            </li>
            <li>
            <Link  to="#about">About</Link>
            </li>
            <li>
            <Link  to="#products">Products</Link>
            </li>
            <li>
            <Link  to="#contact us">Contact Me</Link>
            </li>
            </ul>
            </div>
            </nav>
            
        );
    }
}