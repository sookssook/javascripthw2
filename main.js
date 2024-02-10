let computerNum=0;
let chances =5;
let PlayButton = document.getElementById("PlayButton")
let UserInput = document.getElementById("UserInput")
let ResultArea = document.getElementById("result-area")
let ChanceArea = document.getElementById("chance-area")
let ResetButton = document.getElementById("ResetButton")
let GameOver = false;
let history =[];

PlayButton.addEventListener("click",Play);
ResetButton.addEventListener("click",Reset);
UserInput.addEventListener("click"," ");

function PickNumber(){
    computerNum=Math.floor(Math.random()*100) +1
    console.log("정답",computerNum);
}

function Play(){
    let UserValue= UserInput.value
    if(UserValue<=0 || UserValue>100){
        ResultArea.textContent="1에서 100까지의 숫자만을 입력하세요!"
        return;
    }
    if(history.includes(userValue)){
        resultArea.textContent ="이미 입력한 숫자입니다. 다른 숫자를 입력해주세요!";
        return;
    }
    chances --;
    console.log("chances "+chances)
    ChanceArea.textContent=`남은 기회는 ${chances}번 입니다.`
        if (computerNum>UserValue){
        ResultArea.textContent="Up!"
    }
        else if(computerNum<UserValue){
        ResultArea.textContent="Down!"
    }
        else{
        ResultArea.textContent="정답입니다!"
        GameOver=True;
    }

    history.push(UserValue)
    console.log(history)

    if(chances =0){
        GameOver=True
    }
    if(GameOver){
        PlayButton.disabled =True;
        ChanceArea.textContent="남은 기회는 없습니다!"
    }
    
}
function Reset(){
    UserInput.value =" ";
     pickRandomNum();
     resultArea.textContent ="결과값이 여기 나옵니다.";
     chances = 5;
     play()

}

PickNumber()

