import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCaMc53lLKVDoSEqsi-n78Sv97qIfpBbAU",
	authDomain: "team-vue-blog.firebaseapp.com",
	projectId: "team-vue-blog",
	storageBucket: "team-vue-blog.appspot.com",
	messagingSenderId: "190553459403",
	appId: "1:190553459403:web:b0de2078488c70a2a7e94e",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
