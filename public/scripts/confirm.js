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

 console.log('confirm.js load success');

	//Add a realtime listener
    firebase.auth().onAuthStateChanged(function(user){
		console.log("firebase state change listener")
        
		const sn = txtUserName.value;
        var user = firebase.auth().currentUser;

        if (user){
			console.log("inside firebase state changed if statement")
			txtUserName.innerHTML = "Thanks for signing up, <strong><em>" + firebase.auth().currentUser.displayName + "</strong></em>!!!";

        }
        else{
			console.log("inside firebase state changed else statement")
            firebase.auth().signOut();
            window.location='index.html';
        }

    });

//end of confirm.js
}());
