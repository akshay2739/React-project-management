import { Redirect } from "react-router-dom"

const initstate = {
    project : [
        {id: 1, title: 'Title 1', content: 'Content 1'},
        {id: 2, title: 'Title 2', content: 'Content 2'},
        {id: 3, title: 'Title 3', content: 'Content 3'},
    ]
}

const ProjectReducer = (state = initstate, action) => {
    
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('Project created',action.project)
            return state
        case 'CREATE_PROJECT_ERR':
            console.log('create project err',action.err)
            return state
        default:
            return state
    }
}

export default ProjectReducer