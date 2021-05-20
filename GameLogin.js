function AddUser() {
    PlayerName1=document.getElementById("Player1_Name").value;
    PlayerName2=document.getElementById("Player2_Name").value;

    localStorage.setItem("Player1",PlayerName1);
    localStorage.setItem("Player2",PlayerName2);

    window.location="GamePage.html";
}