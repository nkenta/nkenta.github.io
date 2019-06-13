//Local storage Data
function run() {
    var button = document.getElementById("button");
    button.addEventListener("click", saveData, false);
}

function saveData() {
    var name = document.getElementById("name").value;
    var location = document.getElementById("location").value;
    sessionStorage.setItem(name,location);
    
    display(name);
}

function display(name){
    var result = document.getElementById("result");
    var location = sessionStorage.getItem(name);
    result.innerHTML = "Your name is " +name+ ". And your current location is  "+location+".";
}

window.addEventListener("load", run, false);




// Local Storage Oject
function select(){
  var game = document.getElementById("choice").value;
 localStorage.setItem("choice", game);
}

function gameResult(){
 if (typeof(Storage) !== "undefined") {
     var choice= localStorage.getItem("choice");
     alert(choice);  
 } 

}
function gameReset(){
 localStorage.clear();
}