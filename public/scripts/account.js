(function(){

  //console.log(firebase.auth().currentUser.displayName);

    const userName = document.getElementById('txtUserName');
    const txtNewUserName = document.getElementById('txtNewUserName');
    const txtChangeSN = document.getElementById('txtChangeSN');
    const imgUserPhoto = document.getElementById('imgUserPhoto');

 console.log('logged_in.js load success');
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

    console.log(selectPicture.value);




    btnLogout.addEventListener('click', e => {
        console.log('clicked logout button');
        firebase.auth().signOut();
        window.location = 'index.html';
	});
    btnChangePicture.addEventListener('click', e=>{

        if($(btnChangePicture).hasClass("disabled")){
            console.log("change picture disabled");
            imgError.innerHTML = "Disabled";
        }
        else{
        console.log('clicked btnChangeSN');
        btnChangePicture.classList.add("hide");
        selectPicture.classList.remove("hide");
        btnSubmitPicture.classList.remove("hide");
        btnCancelPicture.classList.remove("hide");}
    })
    btnCancelPicture.addEventListener('click', e=>{
        console.log('clicked btnChangeSN');
        btnCancelPicture.classList.add("hide");
        selectPicture.classList.add("hide");
        btnSubmitPicture.classList.add("hide");
        btnChangePicture.classList.remove("hide");
    });
    selectPicture.addEventListener('change',e=> {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
        function imageIsLoaded(e) {
    $('#imgUserPhoto').attr('src', e.target.result);
};
    });
console.log("asdf" + selectPicture.src);

function imageIsLoaded(e) {
    $('#myImg').attr('src', e.target.result);
};
    btnSubmitPicture.addEventListener('click', e=>{
        console.log("what I chose is: " + selectPicture.value);
        const profile_picutre = selectPicture.value;
        var user = firebase.auth().currentUser;
        user.updateProfile({
            user_photo: profile_picutre,
        }).then(function(){
            console.log(JSON.stringify(firebase.auth().currentUser.photoURL))
        },function(error){
            console.log(error);
        });
        txtUserName.innerHTML = "logged in as: " + firebase.auth().currentUser.photoURL;
        btnChangeSN.classList.remove("hide");
        txtChangeSN.classList.add("hide");
        btnSubmitSN.classList.add("hide");
        btnCancelSN.classList.add("hide");

        window.location = 'account.html';

    })

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
        console.log("i am the " + JSON.stringify(user));
        if (user){
            user.updateProfile({
                displayName: sn,
                //photoURL: pic
            }).then(function(){
                console.log(JSON.stringify(firebase.auth().currentUser.displayName))
                //console.log(firebase.auth().currentUser.user_photo);
            },function(error){
                console.log(error);
            });
            txtUserName.innerHTML = "<em>Logged in as: </em><strong>" + firebase.auth().currentUser.displayName + "</strong>";
            txtNewUserName.innerHTML = firebase.auth().currentUser.displayName;
        }
        else if(btnLogout.addEventListener.hasOwnProperty('onClick')) {
            console.log("btnLogout clicked");
            firebase.auth().signOut();
            window.location='index.html';
        }
        else{
            //window.location='404.html';
        }
    });

}());
