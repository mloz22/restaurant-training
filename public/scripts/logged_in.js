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
	
	console.log('logged_in.js load success');
	
	//TODO: re-organize initialize database
	const dbRefUsers = firebase.database().ref().child("users");
	const dbRefList = dbRefUsers.child('user_name');
	
	//Entry fields for Homepage
	var txtUserName = document.getElementById('txtUserName');
	const btnLogout = document.getElementById('btnLogout');
	
	//TODO: fix const btnAnon = document.getElementById('btnAnon');

	//button event listener(s)
	btnLogout.addEventListener('click', e => {
		console.log('logout button event listener');
		firebase.auth().signOut();
		window.location = 'index.html';
	});

	//Add a realtime listener
	firebase.auth().onAuthStateChanged(function(user){
		console.log("firebase state change listener")
		const sn = txtUserName.value;
		var user = firebase.auth().currentUser;

		if (user){
			console.log("inside firebase state changed if statement")				
			user.updateProfile({
				displayName: sn,
			}).then(function(){
				console.log(JSON.stringify(firebase.auth().currentUser.displayName))
			},function(error){
			console.log(error);
		});

		dbRefUsers.on('value', snap=> console.log("line 34 " + snap.val()));
		console.log(firebase.auth().currentUser.email+" line 35 ");
		console.log(snap=>child('user_name').val());
		console.log(JSON.stringify(dbRefUsers.child("user_name").value)+" line 37");
		console.log("line 38 " + JSON.stringify(dbRefUsers.on('value', snap=> console.log(snap.val()))));
		txtUserName.innerHTML = "<em>Logged in as: </em><strong>" + firebase.auth().currentUser.displayName + "</strong>";

		dbRefList.on('value', snap => console.log("line 41 " + snap.val()));
		console.log("line 42" );
		}
		else if(btnLogout.addEventListener) {
			console.log("inside firebase state changed elseif  statement")
			console.log("btnLogout clicked");
			firebase.auth().signOut();
			window.location='index.html';
		}
		else{
			console.log("inside firebase state changed else  statement")
			//window.location='404.html';
		}
	});

//end of logged_in.js
}());
