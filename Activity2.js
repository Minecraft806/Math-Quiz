function GoBack() {
    window.location="Activity_1.html";
}

function GetScore() {
    Variable_Score=localStorage.getItem("Score");
    document.getElementById("Update").innerHTML="<h1> Score : "+Variable_Score+"</h1>";
}