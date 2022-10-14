var firebaseConfig = {
  apiKey: "AIzaSyApWwQH5CE7Ze6Fio88wPYBy6dGgelCskE",
  authDomain: "kwitter-89020.firebaseapp.com",
  databaseURL: "https://kwitter-89020-default-rtdb.firebaseio.com",
  projectId: "kwitter-89020",
  storageBucket: "kwitter-89020.appspot.com",
  messagingSenderId: "902837684514",
  appId: "1:902837684514:web:a899e734ebcff033b0bd7b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!"

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name "
});

localStorage.setItem("room_name" , room_name)
window.location = "chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
console.log("room name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "chat_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "chat.html";
}
