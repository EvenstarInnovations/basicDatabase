

var initialInput;
var scoreInput;
var submitButton;



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyATzybvAUAbfblJCaPunLT1xBx3s0tcxxg",
    authDomain: "firebasics-da971.firebaseapp.com",
    databaseURL: "https://firebasics-da971.firebaseio.com",
    projectId: "firebasics-da971",
    storageBucket: "firebasics-da971.appspot.com",
    messagingSenderId: "851404477338"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var initials;
  var ref = database.ref('scores');
  var item = ref.child('-LOBd4K_dMea1aqinb2z')

  var preDisplay = document.getElementById("testing");
  var listObjects = document.getElementById("list");

  //Prints all of the Score entry objects
  //ref.on('value',function(datasnapshot){

  item.on('value',function(datasnapshot){
  var li = document.createElement('li');
  li.innerText = JSON.stringify(datasnapshot,null,3);
  li.id = datasnapshot.key;
  listObjects.appendChild(li);
  });



//Take note that if no directory at database matches name, it will create one
//When defining tree/field in Firebase you must create root, then unique id per entry
//then you can define each attribute under the id

//If you want to link or add new data to an existing object the set() method will be more useful
function submitScore() {
   initialInput = document.getElementById("name").value;
   scoreInput = document.getElementById("num").value;


  var data = {
    name: initialInput,
    score: scoreInput
  }


  //Second parameter is a function to be called after a successful push to database
  ref.push(data,alert("Your scores have been submitted"));
}