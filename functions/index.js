const functions = require('firebase-functions');

const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

const createNotification =  notification => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then( doc => console.log('notification added',doc))
}

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello world");
});

exports.projectCreated = functions.firestore
    .document('projects/{projectId}')
    .onCreate( doc =>{

        const project = doc.data()
        const notification  = {
            content : 'Project added',
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time:admin.firestore.FieldValue.serverTimestamp()
        }

        return(createNotification(notification))
} )

exports.userJoined = functions.auth.user().
    onCreate( user => {
        return admin.firestore().collection('users')
        .doc(user.uid).get().then(
            doc => {
                const newUser = doc.data()
                const notification = {
                    content:'User joined',
                    user:`${newUser.firstName} ${newUser.lastName}`,
                    time:admin.firestore.FieldValue.serverTimestamp()
                }
            return createNotification(notification)
            }
        )
} )