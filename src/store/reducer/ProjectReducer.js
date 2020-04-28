
const initstate = {
    project : [
        {id: 1, title: 'Title 1', content: 'Content 1'},
        {id: 2, title: 'Title 2', content: 'Content 2'},
        {id: 3, title: 'Title 3', content: 'Content 3'},
    ]
}

const ProjectReducer = (state = initstate, action) => {
    
    if(action.type === 'CREATE_PROJECT')
    {
        console.log(action.project)
    }
    
    return state
}

export default ProjectReducer