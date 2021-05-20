var Score = 0;
function UpdateScore() {
    Score=Score+1;
    document.getElementById("ScoreID").innerHTML="Score : "+ Score;
}

function SaveScore() {
    localStorage.setItem("Score",Score);
}

function NextPage() {
    window.location = "Activity_2.html";
}