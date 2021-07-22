import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Navbar.css'
class Navbar extends Component {
    state = { x:0 }

    logout = async () =>{

        await fetch('/api/logout',{
            method: 'POST',
            headers: {'Content-type':'application/json'},
            credentials: 'include'
        });

        this.props.setName('');

    }

    render() { 
        let menu;
        if(this.props.name === ''){
            menu = (
                <ul className = {this.state.x ? "nav-links navbar-active":"nav-links"}>
                        <li className="logo">Cine-Mate</li>
                        <li><a href="/">Login</a></li>
                        <li><a href="/register">Register</a></li>
                </ul>
            )
        }else{
            menu = (
                <ul className = {this.state.x ? "nav-links navbar-active":"nav-links"}>
                        <li className="logo">Cine-Mate</li>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/watchlist">Watchlist</a></li>
                        <li><a href = "/" onClick={this.logout}>Logout</a></li>
                </ul>
            )
        }
        return ( 
            <>
                
                <div className="burger" onClick={()=>this.setState({x:!this.state.x})}>
                    <i className = {this.state.x ? "fas fa-times":"fas fa-bars"}> </i>
                </div>

                <nav>
                    {menu}
                </nav>
            </>
         );
    }
}
 
export default Navbar;