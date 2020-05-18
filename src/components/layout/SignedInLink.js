import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'



class SignedInLink extends Component {
    render() {
        return (
            <ul className="right">
                <li><NavLink to="/createproject">New Project</NavLink></li>
                <li> <a onClick={this.props.signOut}>Log Out</a> </li>
                <li><NavLink to="/" className="btn btn-floating lighten-1">{this.props.profile.initials}</NavLink></li>
            </ul>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut : () => dispatch(signOut())
    }
}

export default  connect(null,mapDispatchToProps)(SignedInLink)