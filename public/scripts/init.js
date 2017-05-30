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

	console.log('init.js load success');
	
	//Entry fields for Homepage
	const txtEmail = document.getElementById('txtEmail');
	const txtPassword = document.getElementById('txtPassword');

	//Homepage button ids
	const btnLogin = document.getElementById('btnLogin');
	const btnSignUp = document.getElementById('btnSignUp');
    var error =  document.getElementById("error");
	//TODO: create anonymous authentication
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
			console.log("inside firebase state changed if statement")
            var userName = firebase.auth().currentUser.displayName;
			console.log(userName + ' is logged in');
            error.style.color = "black"
            error.innerHTML =  userName + " successfully logged in";
            window.location = 'database_management.html';
		} else{
            error.innerHTML = "<br>";
			console.log('not logged in');
		}

	});


}());
