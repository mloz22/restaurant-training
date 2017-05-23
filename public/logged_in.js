(function(){

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


console.log('reload success');
	//Entry fields for Homepage
	const txtEmail = document.getElementById('txtEmail');
	const txtPassword = document.getElementById('txtPassword');

	//Verification fields once sign up is selected
	//const txtVerifyEmail = document.getElementById('verifyEmail');
	//const txtVerifyPassword = document.getElementById('verifyPassword');
console.log('step 1');
	//Homepage button ids
	const btnLogout = document.getElementById('btnLogout');
	//const btnAnon = document.getElementById('btnAnon');
console.log('step 2');

console.log('step 5');
	btnLogout.addEventListener('click', e => {
        console.log('clicked logout button');
		firebase.auth().signOut();
        window.location = 'index.html';
	});
console.log('step 6');
	//Add a realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
        console.log('step 7');
		if(firebaseUser){console.log('step 8');
			console.log(firebaseUser + ' is logged in');
            error.style.color = "black"
            error.innerHTML = firebaseUser + " logged in";

			btnLogout.classList.remove('hide');
            window.location = 'database_management.html';

		} else{console.log('step 9');
            error.innerHTML = "<br>";

			btnLogout.classList.add('hide');

		}

	});

}());
