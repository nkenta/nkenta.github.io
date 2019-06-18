//Create a simple message Function
(function () {

    function msg() { };
    Object.defineProperty(msg.prototype, 'to', {
        get: function () {
            var inputTo = document.getElementById('inputTo');
            return inputTo.value || "";
        },
        enumerable: true
    });
    Object.defineProperty(msg.prototype, 'from', {
        get: function () {
            var inputFrom = document.getElementById('inputFrom');
            return inputFrom.value || "";
        },
        enumerable: true
    });
    Object.defineProperty(msg.prototype, 'message', {
        get: function () {
            var inputMessage = document.getElementById('inputMessage');
            return inputMessage.value || "<i>Message box is empty...</i>";
        },
        enumerable: true
    });

    function msgBox() { }
    Object.defineProperty(msgBox.prototype, 'constructor', {
        value: msgBox,
        enumerable: false,
        writable: true
    });
    msgBox.prototype = Object.create(msg.prototype);
    msgBox.prototype.updateView = function () {
        var msgTo = document.getElementById('msgTo');
        var msgFrom = document.getElementById('msgFrom');
        var message = document.getElementById('message');
        msgTo.innerHTML = this.to;
        msgFrom.innerHTML = this.from;
        message.innerHTML = this.message;
    }
    msgBox.prototype.addEventListeners = function () {

        var btn = document.getElementById('createmsg');
        btn.addEventListener('click', () => this.updateView());
    }
    var msgbox = new msgBox();
    msgbox.updateView();
    msgbox.addEventListeners();

})();



//Add Fruit Baskets | Max: 3 Function
var baskets = [];

// Create a basket object.
function doBasket() {
    this.fruit = document.getElementById('fruit').value;
    this.color = document.getElementById('color').value;
    this.weight = document.getElementById('weight').value;
    this.description = function () {
        return "Fruit: " + this.fruit + "<br />" +
            "Color: " + this.color + "<br />" +
            "Weight: " + this.weight + "<br />";
    };
}

// add baskets
function addToBasket() {
    baskets.push(new doBasket());
    
    // Controls first basket
    if (baskets.length == 1) {
        var button = document.createElement("BUTTON");
        var create = document.createTextNode("Basket 1");
        button.appendChild(create);
        button.addEventListener("click", function () { getBaskets(1); });
        document.getElementById('basket').appendChild(button);
    }
    // Controls second basket
    else if (baskets.length == 2) {
        var button = document.createElement("BUTTON");
        var create = document.createTextNode("Basket 2");
        button.appendChild(create);
        button.addEventListener("click", function () { getBaskets(2); });
        document.getElementById('basket').appendChild(button);
    } 
    // Controls third basket
    else if (baskets.length == 3) {
        var button = document.createElement("BUTTON");
        var create = document.createTextNode("Basket 3");
        button.appendChild(create);
        button.addEventListener("click", function () { getBaskets(3); });
        document.getElementById('basket').appendChild(button);
    }
    // Controls notification message of maximum basket reached
    else if (baskets.length > 3) {
        document.write("Sorry! You've achieved the maximum basket. Please reload the page to continue.");
    }
    //Reset and prepare element for next input
    document.getElementById('fruit').value = '';
    document.getElementById('color').value = '';
    document.getElementById('weight').value = '';
}

//Display the basket keyed in informations
function getBaskets(num) {
    document.getElementById('basketDescription').innerHTML = baskets[num - 1].description();
}