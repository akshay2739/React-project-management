export  const signIn = (credential) => {
    return(dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()

        firebase.auth().signInWithEmailAndPassword(
            credential.email,
            credential.password
        ).then(
            dispatch({type:'LOGIN_SUCCESS'})
        ).catch((err) => {
            dispatch({type:'LOGIN_ERROR'})
        })
    }
}

export const  signOut = () =>{
    return(dispatch,getState,{getFirebase}) => {
        const firebase = getFirebase()

        firebase.auth().signOut().then( ()=>{
                dispatch({type:'SIGN_OUT_SUCCESS'})
            }
        )
    }
}

export const signUp = (newUser) =>{
    return(dispatch,getState,{getFirebase,getFirestore}) => {
        const firebase = getFirebase()
        const firestore = getFirestore()

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            //console.log(resp.user.u.)
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName : newUser.firstName,
                lastName : newUser.lastName,
                initials:newUser.firstName[0]+newUser.lastName[0]
            })
        }).then( () => {
            dispatch( {type:'SIGNUP_SUCCESS'} )
        }).catch( (err) => {
            dispatch({type:'SIGNUP_ERROR',err})
        } )
    }
}

