/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript



import * as functions from 'firebase-functions';
import * as express from 'express';
import { addGroup } from './groupController'

const app = express();
app.get('/', (req, res) => {
    res.status(200).send('Hey there!')
});

app.post('/groups', addGroup)
exports.app = functions.https.onRequest(app);