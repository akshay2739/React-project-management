import React, { Component } from 'react'
import moment from 'moment'

export default class Notification extends Component {
    render() {
        
        const notifications = this.props.notifications
        
        
        return (
           <div className="section">
               <div className="card z-depth-0">
                   <div className="card-content">
                       <span className="card-title">Notification</span>
                       <ul className="notifications">
                            {notifications && notifications.map(item => {
                                return(
                                    <li key={item.id}>
                                        <span className="pink-text">
                                            {item.user} </span>
                                        <span>{ item.content}</span>
                                        <div className="grey-text note-date">
                                            { moment(item.time.toDate()).fromNow() }
                                        </div>
                                    </li>
                                )
                            })}
                       </ul>
                   </div>
               </div>
           </div>
        )
    }
}
