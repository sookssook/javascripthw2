let computerNum=0;
let chances =5;
let PlayButton = document.getElementById("PlayButton")
let UserInput = document.getElementById("UserInput")
let ResultArea = document.getElementById("result-area")


PlayButton.addEventListener("click",Play);

function PickNumber(){
    computerNum=Math.floor(Math.random()*100) +1
    console.log("정답",computerNum);
}

function Play(){
    let UserValue= UserInput.value
    if (computerNum>UserValue){
        ResultArea.textContent="Up!"
    }
        else if(computerNum<UserValue){
        ResultArea.textContent="Down!"
    }
        else{
        ResultArea.textContent="정답입니다!"
    }}



PickNumber()

