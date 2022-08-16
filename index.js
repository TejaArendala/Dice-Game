let player1_image = document.querySelectorAll("img")[0];
console.log(player1_image);
let player2_image = document.querySelectorAll("img")[1];
console.log(player2_image);

let play1_button = document.getElementById("player1");
play1_button.addEventListener("click",play1);

let play2_button = document.getElementById("player2");
play2_button.addEventListener("click",play2);

let randomimage1;
let randomimage2;

document.getElementById("startgame").style.visibility="hidden";

function play1()
{
     randomimage1=  Math.floor(Math.random() * (6) + 1);
    let src = `./images/dice${randomimage1}.png`;
    
    player1_image.setAttribute("src",src);
    play1_button.style.visibility="hidden";
}

function play2()
{
     randomimage2=  Math.floor(Math.random() * (6) + 1);
    let src = `./images/dice${randomimage2}.png`;
    
    player2_image.setAttribute("src",src);
    
    play2_button.style.visibility="hidden";
    
    let resultelement=  document.createElement("h2");
    let head_div = document.getElementById("heading");

    if(randomimage1>randomimage2)
{
   
    resultelement.innerText="Player 1 Wins!";
    
    
}
else if(randomimage1<randomimage2)
   {resultelement.innerText="Player 2 Wins!";
}
else{
    resultelement.innerText="Game Draw!!";
}

head_div.append(resultelement);
document.getElementById("startgame").style.visibility="visible";


}

document.getElementById("startgame").addEventListener("click",startgame);

function startgame()
{
    location.reload();
}


