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

var question_choices = ['firebase.database().ref()child("questions").child("db_t_or_f")',
                        'firebase.database().ref()child("questions").child("db_multiple_answer")',
                        'firebase.database().ref()child("questions").child("db_single_answer")'
                        ]
var random_question_choices = question_choices[Math.floor(Math.random() * question_choices.length)];

var question = document.getElementById('question');
var dbRefQuestion = random_question_choices;


var answer = {

}



  //initialize database
  const dbRefUsers = firebase.database().ref().child("users");
  const dbRefList = dbRefUsers.child('user_name');

  var txtUserName = document.getElementById('txtUserName');

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
        const sn = document.getElementById("txtUserName");
        var user = firebase.auth().currentUser;

        if (user){
            user.updateProfile({
                displayName: sn,
            }).then(function(){
                console.log(JSON.stringify(firebase.auth().currentUser.displayName))
            },function(error){
                console.log(error);
            });

            sn.innerHTML = firebase.auth().currentUser.displayName;

            dbRefList.on('value', snap => console.log("line 41 " + snap.val()));
            console.log("line 42" );
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
