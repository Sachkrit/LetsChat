


 var firebaseConfig = {
      apiKey: "AIzaSyAlPv57tBGDaUT83tGNHwvnWHoHZRmOvoQ",
      authDomain: "kwittr-96cf0.firebaseapp.com",
      projectId: "kwittr-96cf0",
      storageBucket: "kwittr-96cf0.appspot.com",
      messagingSenderId: "803233990103",
      appId: "1:803233990103:web:0993dc9836f5d2b8953792"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
