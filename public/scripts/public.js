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
	var btnAccount = document.getElementById('btnAccount');
	var btnHome = document.getElementById('btnHome');

	console.log('public.js load success');
	
	//TODO: to be scrapped once i organize the flow better
	btnLogin.classList.add("hide");
	btnSignUp.classList.add("hide");
	
	//button event listeners
	btnAccount.addEventListener('click', e => {
		console.log('back button event listener');
		window.history.back();
	});
	
	btnHome.addEventListener('click', e => {
		console.log('home button event listener');
		window.location = 'database_management.html';
	});
	
	//authentication functions
	function toggle (hide){
		console.log("inside toggle function");
		btnLogin.classList.add(hide);
		btnSignUp.classList.add(hide);
		btnAccount.classList.remove(hide);
		btnHome.classList.remove(hide);
		btnHome.classList.add("btn-primary");
	}

	function unauthenticated (){
		console.log("public browsing function")
		txtUserName.innerHTML = "<br>";
		btnLogin.classList.remove("hide");
		btnSignUp.classList.remove("hide");
		btnAccount.classList.add("hide");
		btnHome.classList.add("hide");
	}
	
	
	//Realtime listener
	firebase.auth().onAuthStateChanged(function(user){
		console.log("firebase state change listener")
		const sn = txtUserName.value;
		var user = firebase.auth().currentUser;

		if (user){
			console.log("inside firebase state changed if statement")	
			toggle("hide");
			txtUserName.innerHTML = "<em>Logged in as: </em><strong>" + firebase.auth().currentUser.displayName + "</strong>";

		}
		else{
			console.log("inside firebase state changed else statement")
			unauthenticated();
		}
	});

	
//end of public.js
}());
