document.getElementById("playername1").innerHTML = player1 + "'s score is : ";
document.getElementById("playername2").innerHTML = player2 + "'s score is : ";
document.getElementById("playerscore1").innerHTML = score1;
document.getElementById("playerscore2").innerHTML = score2;

function send()
{
    firstnumber = document.getElementById("no.1").value;
    secondnumber = document.getElementById("no.2").value;
    answer = parseInt(firstnumber) * parseInt(secondnumber);



    question = "<h4>" + firstnumber + " x " + secondnumber + "</h4>";
    input = "<br><br><input id='answer_input' placeholder='Answer'>";
    butt = "<br><br><button id = 'confirm' class='btn btn-info' onclick'check()'>Check</button>";
    div = question + input + butt;
    document.getElementById("answer-div").innerHTML = div;
    document.getElementById("no.1").innerHTML = "";
    document.getElementById("no.2").innerHTML = "";
}