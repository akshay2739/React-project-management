import React, { Component } from 'react'
import moment from 'moment'

export default class ProjectSummary extends Component {
    render() {
        console.log(this.props.project)
        return (
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{this.props.project.title}</span>
                    <p> {this.props.project.content } </p>
                    <p className="grey-text"> {moment(this.props.project.createdAt.toDate()).calendar()} </p>
                </div>
            </div>
        )
    }
}

