import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAPZ8F0SfBqLPJo5aDVMKwcyx93B_ZgvAQ",
    authDomain: "whatsapp-rf-clone.firebaseapp.com",
    databaseURL: "https://whatsapp-rf-clone.firebaseio.com",
    projectId: "whatsapp-rf-clone",
    storageBucket: "whatsapp-rf-clone.appspot.com",
    messagingSenderId: "736801871714",
    appId: "1:736801871714:web:03411699ee005f24557e3b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider};
export default db;