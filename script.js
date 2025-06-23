'use strict';
var rand=Math.floor(Math.random()*20)+1;
console.log(rand);
var high=document.querySelector(".highscore");
var s = document.querySelector(".score");
var k=20;

function check(){
document.querySelector(".check").addEventListener("click",function(){
    var v= document.querySelector("input").value;
    if(!(v>=1 && v<=20)){
        alert("You must guess number between 1 to 20.");
        return;
    }
    var guess=Number(v);
    if(k===0){
        alert("your score is 0 try again..");
        return;
    }else if(guess===rand){
        high.innerText=k;
        document.querySelector(".number").innerHTML=rand;
        document.querySelector(".message").innerHTML="Correct guess";
        document.querySelector("body").style.backgroundColor="green";
    }
    else{
        if(guess>rand){
             document.querySelector(".message").innerHTML="Guess lesser";
             document.querySelector("body").style.backgroundColor="black";             
        }else{
             document.querySelector(".message").innerHTML="Guess higher";
             document.querySelector("body").style.backgroundColor="black";
        }
        if(k>0){
        k--;
        s.innerText=k;
        }
       
    }
});
}
//you create a perimeter function also but syntax after should be function restart(key);
document.querySelector(".again").addEventListener("click", function restart() {
    rand = Math.floor(Math.random() * 20) + 1;
    console.log(rand);

     high = document.querySelector(".highscore");
     s = document.querySelector(".score");
     k = 20;
    s.innerText = k;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".message").innerHTML = "Start guessing...";
    document.querySelector(".number").innerHTML = "?";
    document.querySelector("input").value = "";
});


check();
