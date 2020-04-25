import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class SignedInLink extends Component {
    render() {
        return (
            <ul className="right">
                <li><NavLink to="/">New Project</NavLink></li>
                <li><NavLink to="/">Log Out</NavLink></li>
                <li><NavLink to="/" className="btn btn-floating lighten-1">AP</NavLink></li>
            </ul>
        )
    }
}
