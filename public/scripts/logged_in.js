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

var userName = document.getElementById('userName');


 console.log('logged_in.js load success');
    //Entry fields for Homepage
    const btnLogout = document.getElementById('btnLogout');
    //const btnAnon = document.getElementById('btnAnon');

    btnLogout.addEventListener('click', e => {
        console.log('clicked logout button');
        firebase.auth().signOut();
        window.location = 'index.html';
	});

	//Add a realtime listener
    firebase.auth().onAuthStateChanged(function(user){
        if (user){
            console.log(firebase.auth().currentUser.email);
            userName.innerHTML = "logged in as: " + JSON.stringify(firebase.auth().currentUser.email);

            //TODO: Display user name as logged in
            //displayName.on('value', snap => userName.innerText = snap.val());
        }
        else if(btnLogout.addEventListener) {
            console.log("btnLogout clicked");
            firebase.auth().signOut();
            window.location='index.html';
        }
        else{
            //window.location='404.html';
        }
    });

}());
