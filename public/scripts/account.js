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

    const userName = document.getElementById('txtUserName');
    const txtNewUserName = document.getElementById('txtNewUserName');
    const txtChangeSN = document.getElementById('txtChangeSN');

 console.log('logged_in.js load success');
    //Entry fields for Homepage
    const btnLogout = document.getElementById('btnLogout');
    const btnChangeSN = document.getElementById('btnChangeSN');
    const btnSubmitSN = document.getElementById('btnSubmitSN');
    const btnCancelSN = document.getElementById('btnCancelSN');

    btnLogout.addEventListener('click', e => {
        console.log('clicked logout button');
        firebase.auth().signOut();
        window.location = 'index.html';
	});

    btnChangeSN.addEventListener('click', e=>{
        console.log('clicked btnChangeSN');
        btnChangeSN.classList.add("hide");
        txtChangeSN.classList.remove("hide");
        btnSubmitSN.classList.remove("hide");
        btnCancelSN.classList.remove("hide");
    })

    btnSubmitSN.addEventListener('click', e=>{
        const sn = txtChangeSN.value;
        var user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: sn,
        }).then(function(){
            console.log(JSON.stringify(firebase.auth().currentUser.displayName))
        },function(error){
            console.log(error);
        });
        txtUserName.innerHTML = "logged in as: " + firebase.auth().currentUser.displayName;
        btnChangeSN.classList.remove("hide");
        txtChangeSN.classList.add("hide");
        btnSubmitSN.classList.add("hide");
        btnCancelSN.classList.add("hide");

        window.location = 'account.html';

    })
    btnCancelSN.addEventListener('click', e=>{
        btnChangeSN.classList.remove("hide");
        txtChangeSN.classList.add("hide");
        btnSubmitSN.classList.add("hide");
        btnCancelSN.classList.add("hide");
    })

	//Add a realtime listener
    firebase.auth().onAuthStateChanged(function(user){
        const sn = txtUserName.value;
        var user = firebase.auth().currentUser;

        if (user){
            user.updateProfile({
                displayName: sn,
            }).then(function(){
                console.log(JSON.stringify(firebase.auth().currentUser.displayName))
            },function(error){
                console.log(error);
            });
            txtUserName.innerHTML = "logged in as: " + firebase.auth().currentUser.displayName;
            txtNewUserName.innerHTML = firebase.auth().currentUser.displayName;
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
