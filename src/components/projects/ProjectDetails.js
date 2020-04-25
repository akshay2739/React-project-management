import React, { Component } from 'react'

export default class ProjectDetails extends Component {
    render() {
        
        const id = this.props.match.params.id
        
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Project Title - {id}</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, provident. Quidem atque esse nihil amet error nulla possimus perferendis. Saepe minus quae ipsa? Magnam aliquam doloremque quod tempore omnis obcaecati!</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by Akshay</div>
                        <div>27th sept</div>
                    </div>
                </div> 
            </div>
        )
    }
}
 
