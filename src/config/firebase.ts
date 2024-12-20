import * as admin from 'firebase-admin'
import 'dotenv/config'

admin.initializeApp({
    credential: admin.credential.cert({
        privateKey: process.env.PRIVATE_KEY,
        projectId: process.env.PROJECT_ID,
        clientEmail: process.env.CLIENT_EMAIL
    }),
    databaseURL: 'https://beerkitty-8e41e.firebaseio.com'
})

const db = admin.firestore()

export { admin, db }