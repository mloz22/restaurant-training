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

    console.log('load success');
	//Entry fields for Homepage
	const txtEmail = document.getElementById('txtEmail');
	const txtPassword = document.getElementById('txtPassword');

    //Verification fields once sign up is selected
	//const txtVerifyEmail = document.getElementById('verifyEmail');
	//const txtVerifyPassword = document.getElementById('verifyPassword');
    const btnSignUp = document.getElementById('btnSignUp');
    var error =  document.getElementById("error");

    btnSignUp.addEventListener('click', e => {
        console.log('signup event listener');

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
    firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
			console.log(firebaseUser + ' is logged in');
            error.style.color = "black"
            error.innerHTML = firebaseUser + " logged in";
            window.location = 'confirm.html';
		} else{
            error.innerHTML = "<br>";
			console.log('not logged in');
		}

	});
}());
