function parsetext() {

    var txt = '{"name" : "Nkenta Ferdinand" , "country" : "Nigeria" , "email" : "ferdouche@gmail.com" , "contact" : "+234-2332-003"}';
    var parsedtxt = JSON.parse(txt);

    document.getElementById("parseinfo").innerHTML = parsedtxt.name + " is from " + parsedtxt.country + ".<br>Contact me via " + parsedtxt.email + "<br>Or call " + parsedtxt.contact;
}

function closeparsetext() {
    document.getElementById("parseinfo").innerHTML = "";
}


function stringtext() {

    var txt = { name: "Nkenta Ferdinand", country: "Nigeria", email: "ferdouche@gmail.com", contact: "+234-2332-003" };
    var stringtxt = JSON.stringify(txt);

    document.getElementById("stringinfo").innerHTML = stringtxt;
}

function closestringtext() {
    document.getElementById("stringinfo").innerHTML = "";
}
