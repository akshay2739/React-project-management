const initstate = {}

const AuthReducer = (state = initstate, action) => {
    
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login failed')
            return {
                ...state,
                authError : 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log("Logged in")
            return {
                ...state,
                authError : null
            }
        case 'SIGN_OUT_SUCCESS':
            console.log('signed out')
            return{
                state
            }
        case 'SIGNUP_SUCCESS':
            console.log('SIgn up success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('SIgnup error',action.err.message)
            return{
                ...state,
                authError: action.err.message
            }
        default:
            return state
    }
}

export default AuthReducer