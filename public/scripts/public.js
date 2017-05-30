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

	//initialize database

	var txtUserName = document.getElementById('txtUserName');
	var btnLogin = document.getElementById('btnLogin');
	var btnSignUp = document.getElementById('btnSignUp');
	var btnBack = document.getElementById('btnBack');
	var btnHome = document.getElementById('btnHome');
	var txtAccount = document.getElementById('txtAccount');
	var txtDatabase = document.getElementById('txtDatabase');
	var txtTest = document.getElementById('txtTest');
	var txtStatus = document.getElementById('txtStatus');
	var btnLogout = document.getElementById('btnLogout');

	console.log('public.js: load success');

	//TODO: to be scrapped once i organize the flow better
	btnLogin.classList.add("hide");
	btnSignUp.classList.add("hide");

	//button event listeners
	btnBack.addEventListener('click', e => {
		console.log('public.js: back button event listener');
		window.history.back();
	});

	btnHome.addEventListener('click', e => {
		console.log('public.js: home button event listener');
		window.location = 'database_management.html';
	});
	btnLogout.addEventListener('click', e => {
		console.log('public.js: logout button event listener');
		firebase.auth().signOut();
		window.location = 'index.html';
	});

	//authentication functions
	function toggle (hide){
		console.log("public.js: inside toggle function");
		txtAccount.classList.remove(hide);
		txtDatabase.classList.remove(hide);
		txtTest.classList.remove(hide);
		txtStatus.classList.remove(hide);
		btnLogin.classList.add(hide);
		btnSignUp.classList.add(hide);
		btnBack.classList.remove(hide);
		btnHome.classList.remove(hide);
		btnLogout.classList.remove(hide);

	}

	function unauthenticated (){
		console.log("public.js: inside unauthenticated()")
		txtUserName.innerHTML = "<br>";
		txtAccount.classList.add("hide");
		txtDatabase.classList.add("hide");
		txtTest.classList.add("hide");
		txtStatus.classList.add("hide");
		btnLogin.classList.remove("hide");
		btnSignUp.classList.remove("hide");
		btnLogout.classList.add("hide");
		btnBack.classList.add("hide");
		btnHome.classList.add("hide");
	}


	//Realtime listener
	firebase.auth().onAuthStateChanged(function(user){
		console.log("public.js:  inside *.onAuthStateChanged: ")

		const sn = txtUserName.value;
		var user = firebase.auth().currentUser;

		if (user){
			console.log("public.js:  inside *.onAuthStateChanged: inside if(user)")
			console.log('public.js: ' + firebase.auth().currentUser.displayName);
			toggle("hide");
			txtUserName.innerHTML = "<em>Logged in as: </em><strong>" + firebase.auth().currentUser.displayName + "</strong>";
			//this is messy and txtNewUserName is only applicable to account.js... gotta fix this
			if (document.getElementById("txtNewUserName")){
			txtNewUserName.innerHTML = firebase.auth().currentUser.displayName;
			}
		}
		else{
			console.log("public.js:  inside *.onAuthStateChanged: inside else statement")
			unauthenticated();
		}
	});


//end of public.js
}());
