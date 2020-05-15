import React, { Component } from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

export default class ProjectList extends Component {
    render() {
        const projects = this.props.projects
        //console.log(projects)
        return (
            <div className="project-list section">
               {
                   projects && projects.map(project => {
                       return(
                        <Link to={'/project/' + project.id } key={project.id}>
                            <ProjectSummary project={project} />
                        </Link>
                       )
                   })
               }
            </div>
        )
    }
}
