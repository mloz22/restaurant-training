
// Initialize Firebase
var config = {
	apiKey: "AIzaSyBDUU5l_4ud5QMDABNlN5AM4x3gy7sHIco",
	authDomain: "restaurant-training-958d4.firebaseapp.com",
	databaseURL: "https://restaurant-training-958d4.firebaseio.com",
	projectId: "restaurant-training-958d4",
	storageBucket: "restaurant-training-958d4.appspot.com",
	messagingSenderId: "796254468976"
};
firebase.initializeApp(config);

var homepage = document.getElementById('homepage');
var dbRef_homepage = firebase.database().ref().child('headings').child('homepage');
dbRef_homepage.on('value', snap => homepage.innerText = snap.val());

var account = document.getElementById('account');
var dbRef_account = firebase.database().ref().child('headings').child('account');
dbRef_account.on('value', snap => account.innerText = snap.val());

var data_mngmt = document.getElementById('database_management');
var dbRef_db_mngmt = firebase.database().ref().child('headings').child('db_mgt');
dbRef_db_mngmt.on('value', snap => data_mngmt.innerText = snap.val());

var faq = document.getElementById('faq');
var dbRef_faq = firebase.database().ref().child('headings').child('faq');
dbRef_faq.on('value', snap => faq.innerText = snap.val());
