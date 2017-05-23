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

	//Homepage button ids
	const btnLogin = document.getElementById('btnLogin');
	const btnSignUp = document.getElementById('btnSignUp');
	const btnLogout = document.getElementById('btnLogout');
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
		//Get email, pass, and verification
		// TODO: check for email
		const email = txtEmail.value;
		const pass  = txtPassword.value;
		const auth = firebase.auth();
		//Sign up
		const promise = auth.createUserWithEmailAndPassword(email, pass);
		promise.catch(e => console.log(e.message));
        error.style.color = "#FF0000";
        promise.catch(e => error.innerHTML = e.message);

	});



	//Add a realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
			console.log(firebaseUser + ' is logged in');
            error.style.color = "black"
            error.innerHTML = firebaseUser + " logged in";


            window.location = 'database_management.html';
            /*
            verify_pass.remove('hide');
            verify_email.remove('hide');
            */
		} else{
            error.innerHTML = "<br>";
			console.log('not logged in');
            btnLogin.classList.remove('hide');
            btnSignUp.classList.remove('hide');

            //window.location = 'index.html';
		}

	});
//
//
// /*
// 	btnAnon.addEventListener('click', e={
// 	//TODO: figure out how this works
// 	if(!firebaseUser){
// 	firebase.auth.signInAnonymously();
// 	}
// 	else{
// 	firebase.auth.signOut();
// 	}
// 	*/

}());
