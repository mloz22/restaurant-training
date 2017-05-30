(function(){
	//initialize firebase
	var config = {
		apiKey: "AIzaSyBDUU5l_4ud5QMDABNlN5AM4x3gy7sHIco",
		authDomain: "restaurant-training-958d4.firebaseapp.com",
		databaseURL: "https://restaurant-training-958d4.firebaseio.com",
		projectId: "restaurant-training-958d4",
		storageBucket: "restaurant-training-958d4.appspot.com",
		messagingSenderId: "796254468976"
	};
	firebase.initializeApp(config);

	console.log('signup.js load success');
	
	//Entry fields for Homepage
	const txtEmail = document.getElementById('txtEmail');
	const txtPassword = document.getElementById('txtPassword');
	const txtVerifyEmail = document.getElementById('txtVerifyEmail');
	const txtVerifyPassword = document.getElementById('txtVerifyPassword');
	const txtUserName = document.getElementById('txtUserName');
	const txtUserFN = document.getElementById('txtUserFN');
	const txtUserLN = document.getElementById('txtUserLN');

	const btnSignUp = document.getElementById('btnSignUp');
	var error =  document.getElementById("error");

	//TODO: //verify user sign up input
	// verify_email.addEventListener(type, e => {
	//     console.log('verifying email');
	// });
	// verify_password.addEventListener(type, e => {
	//     console.log('verifying password');
	// });
	// verify_user_name.addEventListener(type, e => {
	//     console.log('verifying username');
	// });

	//button event listeners
	btnSignUp.addEventListener('click', e => {
		console.log('signup event listener');

		//Get email, password
		const email = txtEmail.value;
		const pass = txtPassword.value;

		// TODO: check for email
		// const verifyEmail = txtVerifyEmail.value;
		// const verifyPassword = txtVerifyPassword.value;
		// const userName = txtUserName.value;
		// const userFN = txtUserFN.value;
		// const userLN = txtUserLN.value;


		//firebase database
		const auth = firebase.auth();

		//Sign up
		const promise = auth.createUserWithEmailAndPassword(email, pass);
		promise.catch(e => console.log(e.message));
		error.style.color = "#FF0000";
		promise.catch(e => error.innerHTML = e.message);

	});
	
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
			console.log("inside firebase state changed if statement")				
			console.log(firebaseUser + ' is logged in');
			//console.log(JSON.stringify(snapshot.child('users/user_name').val()));
			error.style.color = "black"
			error.innerHTML = firebaseUser + " logged in";

			const sn = txtUserName.value;
			var user = firebase.auth().currentUser;

		user.updateProfile({
		displayName: sn,
		}).then(function(){
		console.log(JSON.stringify(firebase.auth().currentUser.displayName))
		},function(error){
		console.log(error);
		});

	//TODO: delete this probably
	//store user login information

	//var usersRef = firebase.database().ref().child("users");
	//usersRef.on('value', snap=> console.log(snap.val()));
	//console.log("line 76" + JSON.stringify(usersRef.on('value', snap=> console.log(snap.val()))));
	// usersRef.push({
	//
	//         "user_name" : txtUserName.value,
	//         "user_first_name" : txtUserFN.value,
	//         "user_last_name"  : txtUserLN.value,
	//         "user_email"      : JSON.stringify(firebase.auth().currentUser.email),
	//         "user_code"       : JSON.stringify(firebase.auth().currentUser.uid),
	//         "user_photo"      :""
	// })

	//go to confirmation page
	window.location = 'confirm.html';
	}
	//handle errors
	else{
	error.innerHTML = "<br>";
	console.log('not logged in');
	}

	});
	}());
