function loadTeamContent() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("dynamic-team-content").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "index.html", true); 
    xhttp.send();
}

window.onload = function() {
    loadTeamContent();
};
