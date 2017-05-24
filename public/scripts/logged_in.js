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






firebase.auth().onAuthStateChanged(function(user){
    if (user){
        var displayName = user.displayName;
        var userName = document.getElementById('user_name');
        //TODO: Display user name as logged in
        //displayName.on('value', snap => userName.innerText = snap.val());
    }
});

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

}());
