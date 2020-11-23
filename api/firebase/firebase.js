import * as firebase from 'firebase';

const firebaseConfig = {
    "apiKey": "AIzaSyAdUC1F4JsV4Zdwia_fbhaAQbXLHxBCPl8",
    "authDomain": "lab1-9af06.firebaseapp.com",
    "databaseURL": "https://lab1-9af06.firebaseio.com",
    "projectId": "lab1-9af06",
    "storageBucket": "lab1-9af06.appspot.com",
    "messagingSenderId": "759574889062",
    "appId": "1:759574889062:web:742de248b71629470723a7",
    "measurementId": "G-2JE89DNKCP"
};

firebase.initializeApp(firebaseConfig);

export default firebase;