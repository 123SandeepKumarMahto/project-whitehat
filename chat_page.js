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
user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        massage:msg,
        like:0
    });
    document.getElementById("msg").value ="";
}
