  // This controls the for Loop actions
  function forLoop() {
    var genNumber = '';
    var number = 1;
    for (var i = 0; i < number; i++) {
        var random = Math.floor((Math.random() * 100) + 1);
        if (i == 1) {
            genNumber += random;
        }
        else {
            genNumber += random + '';
        }
        document.getElementById('forloop').innerHTML = genNumber;
    }
}

// This controls the While Loop actions
function whileLoop() {
    var count = '';
    var number = 0;
    while (number < 10 + 1) {
        count += "<br>" + number;
        number++;
    }
    document.getElementById("whileloop").innerHTML = count;
}

// This controls the Do/While Loop actions
function whileDoLoop() {
    var count = "";
    var i = 0;
    do {
        count += "<br> Count this as number  :- " + [i];
        i++;
    }
    while (i < 5 + 1);
    document.getElementById("doLoop").innerHTML = count;
}

// This controls IF Statement actions
function domAnimal(domestic) {
    if (domestic == "Dog") {
        alert("Congratulation! You got the answer correct.");
    }
}

// This controls IF Else Statement actions
function wildAnimal(wild) {
    if (wild == "Dog") {
        alert("Opps! Dogs are human best friend not wild.");
    }
    else {
        alert("Yes! You got it right.");
    }
}

//Vairables and Parameters 
function convert(temperature) {
    var formula;
    if (temperature == 'C') {
        formula = document.getElementById('c').value * 9 / 5 + 32;
        document.getElementById('f').value = Math.round(formula);
    }
    else {
        formula = (document.getElementById('f').value - 32) * 5 / 9;
        document.getElementById('c').value = Math.round(formula);
    }
}

//Array
function world() {
    var continents = ["North America", "South America", "Africa", "Europe", "Asia", "Australia", "Antarctica"];
    document.getElementById("show").innerHTML = continents;
}
function clearList() {
    document.getElementById("show").innerHTML = "";
}

//Associative Arrays
function africaFact() {
    var Input = document.getElementById('africaFactinput').value;
    var africa = {
        Area: "30,370,000 km2 (11,730,000 sq mi)",
        Population: "1,225,080,510",
        GDP: "$6.74 trillion",
        Countries: "54 (and 2 disputed)",
        Language: "1250–3000 native languages",
        Timezones: "UTC-1 to UTC+4",
    }
    document.getElementById('showInfo').innerHTML = africa[Input];
}