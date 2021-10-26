import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCaMc53lLKVDoSEqsi-n78Sv97qIfpBbAU",
	authDomain: "team-vue-blog.firebaseapp.com",
	projectId: "team-vue-blog",
	storageBucket: "team-vue-blog.appspot.com",
	messagingSenderId: "190553459403",
	appId: "1:190553459403:web:b0de2078488c70a2a7e94e",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, projectStorage, timestamp };
