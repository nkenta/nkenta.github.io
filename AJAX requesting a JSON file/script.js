function ajaxJson(){
	var display = document.getElementById("display");
    var aof = new XMLHttpRequest();
    aof.open("GET", "verses.json", true);
    aof.setRequestHeader("Title", "THE ARTICLES OF FAITH ", true);
    aof.onreadystatechange = function() {
	    if(aof.readyState == 4 && aof.status == 200) {
		    var data = JSON.parse(aof.responseText);
			display.innerHTML = "";
			for(var obj in data){
				display.innerHTML += data[obj].verse + "<hr />";
			}
	    }
    }
    aof.send(null);
    display.innerHTML = "initializing please wait...";
}

function closeajaxJson() {
    document.getElementById("display").innerHTML = "";
}
