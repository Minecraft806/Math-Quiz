var Variable1=localStorage.getItem("Player1");
var Variable2=localStorage.getItem("Player2");
Player1_Score=0;
Player2_Score=0;

document.getElementById("Player_Number1_Name").innerHTML=Variable1+" : ";
document.getElementById("Player_Number2_Name").innerHTML=Variable2+" : ";

document.getElementById("Player_1_Score").innerHTML=Player1_Score;
document.getElementById("Player_2_Score").innerHTML=Player2_Score;

document.getElementById("Player_Question").innerHTML="Question Turn : "+Variable1;
document.getElementById("Player_Answer").innerHTML="Answer Turn : "+Variable2;

function Send() {
    Get_Word=document.getElementById("Enter_Word").value;
    Word=Get_Word.toLowerCase();
    window.location=="Activity2.html"
    //console.log("Word In Lower Case"+Word);

    CharacterAt1=Word.charAt(1);
    length_2=Math.floor(Word.length/2);
    //console.log(length_2);
    CharacterAt2=Word.charAt(length_2);
    length_1=Word.length-1;
    //console.log(length_1)
    CharacterAt3=Word.charAt(length_1);
    Remove_CharacterAt1=Word.replace(CharacterAt1,"_");
    Remove_CharacterAt2=Remove_CharacterAt1.replace(CharacterAt2,"_");
    Remove_CharacterAt3=Remove_CharacterAt2.replace(CharacterAt3,"_");

    Question_Word="<h4 id='Word_Display'> Q."+Remove_CharacterAt3+"</h4>";
    Input_Box="<br>Answer : <input type='text' id='Input_Box'>";
    Check_Button="<br><br><button class='btn btn-info' onclick='Check()'> Check </button>";
    Row=Question_Word+Input_Box+Check_Button;
    document.getElementById("Output").innerHTML=Row;
    document.getElementById("Enter_Word").value="";
}

Answer_Turn="Variable2";
Question_Turn="Variable1";

function Check() {
    Get_Answer=document.getElementById("Input_Box").value;
    Answer=Get_Answer.toLowerCase();
    console.log("Answer In Lower Case "+Answer);
    if (Answer==Word) {
        if (Answer_Turn=="Variable1") {
            Player1_Score=Player1_Score+1;
            document.getElementById("Player_1_Score").innerHTML=Player1_Score;
        }
        else {
            Player2_Score=Player2_Score+1;
            document.getElementById("Player_2_Score").innerHTML=Player2_Score;
        }
    }

    if (Question_Turn=="Variable1") {
        Question_Turn="Variable2";
        document.getElementById("Player_Question").innerHTML="Question Turn - "+Variable2;
    }
    else {
        Question_Turn="Variable1";
        document.getElementById("Player_Question").innerHTML="Question Turn - "+Variable1;
    }
    if (Answer_Turn=="Variable1") {
        Answer_Turn="Variable2";
        document.getElementById("Player_Answer").innerHTML="Answer Turn - "+Variable2;
    }
    else {
        Answer_Turn="Variable1";
        document.getElementById("Player_Answer").innerHTML="Answer Turn - "+Variable1;
    }
    document.getElementById("Output").innerHTML="";
}