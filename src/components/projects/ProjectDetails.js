import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class ProjectDetails extends Component {
    render() {
        
        const id = this.props.match.params.id
        console.log(this.props)
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Project Title - {this.props.project.title}</span>
                        <p>{this.props.project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {this.props.project.authorFirstName}{this.props.project.authorLastName} </div>
                        <div>27th sept</div>
                    </div>
                </div> 
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return{
        project : project 
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect( () => ['projects'] )
) (ProjectDetails)