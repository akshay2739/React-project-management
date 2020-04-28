import React, { Component } from 'react'
import ProjectSummary from './ProjectSummary'

export default class ProjectList extends Component {
    render() {
        const projects = this.props.projects
        //console.log(projects)
        return (
            <div className="project-list section">
               {
                   projects && projects.map(project => {
                       return(<ProjectSummary project={project} key={project.id}/>)
                   })
               }
            </div>
        )
    }
}
