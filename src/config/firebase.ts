import * as admin from 'firebase-admin'
import 'dotenv/config'

const privateKey = process.env.PRIVATE_KEY?.replace(/\\n/g, '\n')

admin.initializeApp({
    credential: admin.credential.cert({
        privateKey: privateKey,
        projectId: process.env.PROJECT_ID,
        clientEmail: process.env.CLIENT_EMAIL
    }),
    databaseURL: 'https://beerkitty-8e41e.firebaseio.com'
})

const db = admin.firestore()

export { admin, db }