import firebase from 'firebase/app'

export const db = firebase
    .initializeApp({ projectId: 'vue-app-sandbox' })
    .firestore();

export const locations = db.collection('locations').orderBy('createdAt');
