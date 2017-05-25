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

/*
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
*/

console.log('init.js load success');
	//Entry fields for Homepage
	const txtEmail = document.getElementById('txtEmail');
	const txtPassword = document.getElementById('txtPassword');

	//Homepage button ids
	const btnLogin = document.getElementById('btnLogin');
	const btnSignUp = document.getElementById('btnSignUp');
    var error =  document.getElementById("error");
	//const btnAnon = document.getElementById('btnAnon');

	//Add Login event
	btnLogin.addEventListener('click', e => {
		console.log('login event listener');

		//Get email and pass
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();

		//Sign in
		const promise = auth.signInWithEmailAndPassword(email, pass);
		promise.catch(e => console.log(e.message));
        error.style.color = "#FF0000";
        promise.catch(e => error.innerHTML = e.message);

    });

	//Add signup event
 	btnSignUp.addEventListener('click', e => {
        console.log('signup event listener');
        window.location = 'signup.html';
	});

    //Add a realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
            var userName = firebase.auth().currentUser.email;
			console.log(userName + ' is logged in');
            error.style.color = "black"
            error.innerHTML = firebaseUser + " logged in";
            window.location = 'database_management.html';
		} else{
            error.innerHTML = "<br>";
			console.log('not logged in');
		}

	});


}());
