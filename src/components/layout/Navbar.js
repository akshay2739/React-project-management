import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="nav-wrapper grey darken-3">
                    <div className="container">
                        <Link to="/" className="brand-logo">
                            Akshay
                        </Link>
                        <SignedInLink />
                        <SignedOutLink />
                    </div>
                </nav>
            </div>
        )
    }
}
