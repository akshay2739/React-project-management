import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'
import { connect } from 'react-redux'

class Navbar extends Component {
    render() {
        const auth = this.props.auth
        console.log(auth.uid)
        const links = auth.uid ? <SignedInLink /> : <SignedOutLink />
        return (
            <div>
                <nav className="nav-wrapper grey darken-3">
                    <div className="container">
                        <Link to="/" className="brand-logo">
                            Akshay
                        </Link>
                        { links }
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStatrToProps = (state) =>{
    //console.log(state)
    return{
        auth : state.firebase.auth
    }
}

export default connect(mapStatrToProps)(Navbar)