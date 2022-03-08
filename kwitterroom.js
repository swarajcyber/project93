const firebaseConfig = {
    apiKey: "AIzaSyAVZaQLHjQIUE2Mouvji44qiOBqi-V9s_M",
    authDomain: "let-chat-web-app-41d20.firebaseapp.com",
    databaseURL: "https://let-chat-web-app-41d20-default-rtdb.firebaseio.com",
    projectId: "let-chat-web-app-41d20",
    storageBucket: "let-chat-web-app-41d20.appspot.com",
    messagingSenderId: "939854760980",
    appId: "1:939854760980:web:5d000d1c55b92b01da2b01"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  function addUser(){
    user_name=document.getElementById("user_name").value
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    })
}