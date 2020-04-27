import React, { Component } from 'react'

export default class ProjectSummary extends Component {
    render() {
        return (
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{this.props.project.title}</span>
                    <p> {this.props.project.content } </p>
                    <p className="grey-text">27th sept 12pm </p>
                </div>
            </div>
        )
    }
}

