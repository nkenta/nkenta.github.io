function changeColor() {
    document.getElementById('text').style.color = 'crimson';
}

function colorDefault() {
    document.getElementById('text').style.color = '';
}

function invisible() {
    document.getElementById('text').style.visibility = 'hidden';
}

function visible() {
    document.getElementById('text').style.visibility = 'visible';
}

function textSize() {
    document.getElementById('text').style.fontSize = '34px';

}

function resetText() {
    document.getElementById('text').style = "";
}

function clockwise() {
    document.getElementById("ball").style.transform = "rotate(360deg)";
}

function anticlockwise() {
    document.getElementById("ball").style.transform = "";
}

function siteColor() {
    document.getElementById('siteBody').style.backgroundColor = "orange";
}

function resetSiteColor() {
    document.getElementById('siteBody').style = "";
}

function mobile() {
    document.getElementById('mobileView').style.width = '25%';

}

function desktop() {
    document.getElementById('mobileView').style.width = '';

}

