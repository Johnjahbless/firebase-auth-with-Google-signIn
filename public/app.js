initApp = function() {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            let displayName = user.displayName;
            let email = user.email;
            let emailVerified = user.emailVerified;
            let photoURL = user.photoURL;
            let uid = user.uid;
            let phoneNumber = user.phoneNumber;
            let providerData = user.providerData;
            document.getElementById("name-container").innerHTML=displayName;
            document.getElementById("basta_esci").addEventListener("click", function(){
                
                //function to sign out user
                firebase.auth().signOut().then(function() {
                 window.location.replace("index.html");
              }).catch(function(error) {
                // An error happened.
              });
            });
            
            }else {
            // User is signed out.
            window.location.replace("index.html");
          }
        }, function(error) {
          console.log(error);
        });
      };

      window.addEventListener('load', function() {
        initApp()
      });

