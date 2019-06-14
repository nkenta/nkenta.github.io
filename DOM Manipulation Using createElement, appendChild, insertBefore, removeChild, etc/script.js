function users() {
    var user = ["User: Daniel | Password: w2W32dd5", "User: James | Password: 95nsd2@n", "User: Willam | Password: jfhn6%$Q",
    "User: Samuel | Password: Nb2jjs^s", "User: Ferdinand | Password: 7Thhsvc%", "User: Anderson | Password: 8&ctge$s",
    "User: Kelvin | Password: dj37sw4!", "User: Alex | Password: (urenf%@", "User: Willson | Password: Ksge&54M",
    "User: Samson | Password: Guegd6%$", "User: Frankline | Password: Kndhe553", "User: Millicent | Password: !774Abfs"];
    var select = Math.floor(Math.random() * user.length);
    return user[select];
}

function create() {
    var newLine = document.createElement("div");
    var text = document.createTextNode(users());
    
    newLine.append(text);
    var element = document.getElementById("usersBox");
    element.append(newLine);
}

// This will control the insert of a new user in the beginging of all users list
function addAtBeginning() {
    var userS = document.getElementById("usersBox");
    var userInfo = document.createElement("div");

    var userText = document.createTextNode("User: " + document.getElementById('userName').value
     + " | Password: " + document.getElementById('password').value);
    userInfo.appendChild(userText);
    userS.insertBefore(userInfo, userS.childNodes[0]);
}

// This will control the insert of a new user at the end of all users list
function addAtEnd() {
    var userS = document.getElementById("usersBox");
    var userInfo  = document.createElement("div");

    var userText = document.createTextNode("User: " + document.getElementById('userName').value
     + " | Password: " + document.getElementById('password').value);
    userInfo.appendChild(userText);
    userS.appendChild(userInfo);
}

// This will remove the first list of the users
function deleteFirst() {
    var userS = document.getElementById("usersBox");
    if (userS.childNodes.length > 0) {
        userS.removeChild(userS.childNodes[0]);
    }
}

// This will remove the last list of the users
function deleteLast() {
    var userS = document.getElementById("usersBox");
    if (userS.childNodes.length > 0) {
        userS.removeChild(userS.childNodes[userS.childNodes.length - 1]);
    }
}

// This controls the clear all list action
function clearAll(){
    document.getElementById("usersBox").innerHTML = "";
}