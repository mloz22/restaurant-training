(function(){

    const txtUserName = document.getElementById('txtUserName');
    const txtNewUserName = document.getElementById('txtNewUserName');
    const txtChangeSN = document.getElementById('txtChangeSN');
    const imgUserPhoto = document.getElementById('imgUserPhoto');

    console.log('account.js: load success');

    //console.log('account.js for' + firebase.auth().currentUser.displayName)
    //Entry fields for Homepage
    const btnLogout = document.getElementById('btnLogout');
    const btnChangeSN = document.getElementById('btnChangeSN');
    const btnSubmitSN = document.getElementById('btnSubmitSN');
    const btnCancelSN = document.getElementById('btnCancelSN');
    const btnChangePicture = document.getElementById('btnChangePicture');
    const selectPicture = document.getElementById('selectPicture');
    const btnSubmitPicture = document.getElementById('btnSubmitPicture');
    const btnCancelPicture = document.getElementById('btnCancelPicture');
    const imgError = document.getElementById('imgError');

    //console.log(selectPicture.value);
    btnLogout.addEventListener('click', e => {
        console.log('account.js: clicked btnLogout');
        firebase.auth().signOut();
        window.location = 'index.html';
	});
    btnChangePicture.addEventListener('click', e=>{
        console.log('account.js: clicked btnChangePicture');
        if($(btnChangePicture).hasClass("disabled")){
            console.log("account.js: change picture disabled");
            imgError.innerHTML = "Disabled";
        }
        else{
        console.log("account.js: change picture not disabled");
        btnChangePicture.classList.add("hide");
        selectPicture.classList.remove("hide");
        btnSubmitPicture.classList.remove("hide");
        btnCancelPicture.classList.remove("hide");}
    })
    btnCancelPicture.addEventListener('click', e=>{
        console.log('account.js: clicked btnCancelPicture');
        btnCancelPicture.classList.add("hide");
        selectPicture.classList.add("hide");
        btnSubmitPicture.classList.add("hide");
        btnChangePicture.classList.remove("hide");
    });
    //     selectPicture.addEventListener('change',e=> {
//         if (this.files && this.files[0]) {
//             var reader = new FileReader();
//             reader.onload = imageIsLoaded;
//             reader.readAsDataURL(this.files[0]);
//         }
//         function imageIsLoaded(e) {
//     $('#imgUserPhoto').attr('src', e.target.result);
// };
//     });
//console.log("asdf" + selectPicture.src);

    // function imageIsLoaded(e) {
//     $('#myImg').attr('src', e.target.result);
// };

    btnSubmitPicture.addEventListener('click', e=>{
        console.log("account.js: what I chose is: " + selectPicture.value);
        const profile_picutre = selectPicture.value;
        var user = firebase.auth().currentUser;
        user.updateProfile({
            user_photo: profile_picutre,
        }).then(function(){
            console.log(JSON.stringify(firebase.auth().currentUser.photoURL))
        },function(error){
            console.log(error);
        });

        btnChangeSN.classList.remove("hide");
        txtChangeSN.classList.add("hide");
        btnSubmitSN.classList.add("hide");
        btnCancelSN.classList.add("hide");

        window.location = 'account.html';

    })

    btnChangeSN.addEventListener('click', e=>{
        console.log('account.js: clicked btnChangeSN');
        btnChangeSN.classList.add("hide");
        txtChangeSN.classList.remove("hide");
        btnSubmitSN.classList.remove("hide");
        btnCancelSN.classList.remove("hide");
    })

    btnSubmitSN.addEventListener('click', e=>{
        console.log("account.js: clicked btnSubmit");
		console.log("account.js: txtUserName value " + txtUserName.value);
        console.log("account.js: txtNewUserName value " + txtNewUserName.value);

        var user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: txtChangeSN.value,
        }).then(function(){
            console.log("account.js: inside btnSubmitSN.addEventListener user.updateProfile 1 -- " + JSON.stringify(firebase.auth().currentUser.displayName))
            txtUserName.innerHTML = "logged in as: " + firebase.auth().currentUser.displayName;
            txtNewUserName.innerHTML = firebase.auth().currentUser.displayName;
        },function(error){
            console.log("account.js: inside btnSubmitSN.addEventListener" + error);
        });
        console.log("account.js: inside btnSubmitSN.addEventListener user.updateProfile 2 -- " + JSON.stringify(firebase.auth().currentUser.displayName))

        txtUserName.innerHTML = "logged in as: " + firebase.auth().currentUser.displayName;
        txtNewUserName.innerHTML = "logged in as: " + firebase.auth().currentUser.displayName;
        console.log("account.js: inside btnSubmitSN.addEventListener user.updateProfile 3 -- " + JSON.stringify(firebase.auth().currentUser.displayName))

        btnChangeSN.classList.remove("hide");
        txtChangeSN.classList.add("hide");
        btnSubmitSN.classList.add("hide");
        btnCancelSN.classList.add("hide");
    })

    btnCancelSN.addEventListener('click', e=>{
        console.log("account.js: clicked btnCancelSN");
        btnChangeSN.classList.remove("hide");
        txtChangeSN.classList.add("hide");
        btnSubmitSN.classList.add("hide");
        btnCancelSN.classList.add("hide");
    })

	//Add a realtime listener
    firebase.auth().onAuthStateChanged(function(user){
        console.log("account.js: inside *.onAuthStateChanged");
        const sn = txtUserName.value;
        const newSN = txtNewUserName.value;
        const pic = selectPicture.value;
        var user = firebase.auth().currentUser;
        //TODO: trying to figure out how to upload imgs
        //console.log(firebase.auth().currentUser.user_photo);
        // if(firebase.auth().currentUser.user_photo == null){
        //     console.log("images/profile.png" + imgUserPhoto);
        //     imgUserPhoto.src="images/profile.png";
        // }
        // else{
        //     imgUserPhoto = firebase.auth().currentUser.user_photo;
        // }
        //console.log("i am the " + JSON.stringify(user));
        if (user){  console.log('account.js: ' + firebase.auth().currentUser.displayName)
			if(btnSubmitSN.addEventListener.hasOwnProperty('onClick')){
				console.log("account.js:  inside *.onAuthStateChanged: inside btnSubmitSN.hasOwnProperty");
            user.updateProfile({
                displayName: txtUserName.value,
                //photoURL: pic
            }).then(function(){
                console.log(JSON.stringify("account.js:  inside *.onAuthStateChanged: " + firebase.auth().currentUser.displayName))
                //console.log(firebase.auth().currentUser.user_photo);
            },function(error){
                console.log("account.js:  inside *.onAuthStateChanged: "+error);
            });
            txtUserName.innerHTML = "<em>Lsdfgogged in as: </em><strong>" + firebase.auth().currentUser.displayName + "</strong>";
            txtNewUserName.innerHTML = firebase.auth().currentUser.displayName;
			window.location = 'account.html';
			}
		}
        else if(btnLogout.addEventListener.hasOwnProperty('onClick')) {
            console.log("account.js:  inside *.onAuthStateChanged: btnLogout clicked");
            firebase.auth().signOut();
            window.location='index.html';
        }
        else{
            //window.location='404.html';
        }
    });

}());
