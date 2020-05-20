import React, { Component } from 'react'
import Notification from './Notification'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render() {
       // console.log(this.props.projects)
       
       if(!this.props.auth.uid){
            return (
                <Redirect to="/signin" />   
            )
       }
       
       return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList  projects={this.props.projects} />
                    </div>
                    <div className="col s12 m5 offset-1">
                        <Notification notifications ={this.props.notification}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notification: state.firestore.ordered.notifications

    }
}

export default compose(
    firestoreConnect([
        {collection:'projects',orderBy:['createdAt','desc']},
        {collection:'notifications',limit:3,orderBy:['time','desc']}
    ]),connect(mapStateToProps)
    )(Dashboard)
