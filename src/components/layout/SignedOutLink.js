import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class SignedOutLink extends Component {
    render() {
        return (
            <ul className="right">
                <li><NavLink to="/signup">SignUp</NavLink></li>
                <li><NavLink to="/signin">Login</NavLink></li>
            </ul>
        )
    }
}
