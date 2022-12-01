const firebaseConfig = {
      apiKey: "AIzaSyBfQ7V3vYZ8s6BNK1yvGcSf0iVBie5ChFE",
      authDomain: "c-94-8007f.firebaseapp.com",
      databaseURL: "https://c-94-8007f-default-rtdb.firebaseio.com",
      projectId: "c-94-8007f",
      storageBucket: "c-94-8007f.appspot.com",
      messagingSenderId: "620052480200",
      appId: "1:620052480200:web:702e010faf3956903be5fd",
      measurementId: "G-1MVGR6K85Y"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - "+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);

      window.location = "kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
        window.location = "kwitter_room.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
