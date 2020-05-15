import React, { Component } from 'react'
import Notification from './Notification'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase';

class Dashboard extends Component {
    render() {
        console.log(this.props.projects)
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList  projects={this.props.projects} />
                    </div>
                    <div className="col s12 m5 offset-1">
                        <Notification />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    firestoreConnect(() => ['projects']),
    connect(mapStateToProps)
    )(Dashboard)
