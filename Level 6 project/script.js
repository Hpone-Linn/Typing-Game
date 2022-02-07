let random = document.querySelector("#random");

const url="https://game-of-thrones-quotes.herokuapp.com/v1/random/5";
async function getData(){
    let response = await fetch(url);
    let data = await response.json()

    let randomWord = Math.floor(Math.random() * data.length);

    random.innerHTML = data[randomWord].sentence;
}
getData();

function skip(){
    getData();
}

let typedWord = document.querySelector("#typedWord");
let displayScore = document.querySelector("#score");
let score = 0 ;

typedWord.addEventListener("keyup", () => {
    if(typedWord.value.trim() === random.innerText){
        score++;
        displayScore.innerHTML = score;
        getData();
        typedWord.value= " ";
        let extraTime = [3,5,8,10,15];
        let randomNumber = Math.floor(Math.random() * extraTime.length);
        let randomTime = extraTime[randomNumber];
        time+= randomTime;
        localStorage.setItem("storedScore",score);
        gameWin()

        // localStorage.setItem("storedScore", score);
        // storedPoints = localStorage.getItem("storedScore");
        // localStorage.setItem("storedTime", time);
        // showTime.innerHTML = time + "s";

        // let day = date.getDate();
        // let month = date.getMonth();
        // let year = date.getFullYear();
        // let monthName = ["January" , "February", "March", "April", "May", "June", "July", "August", "September" , "October" , "November" ,  "December" ];
        // let lastPlayDate = `${day} , ${monthName[month]} , ${year}`;
        // localStorage.setItem("lastDate", lastPlayDate);
    }
})


let storedScore = localStorage.getItem("storedScore")

// function getStored(){
//     if(storedScore){
//         displayScore.innerHTML = storedScore
//     }else{
//         display.innerHTML = 0
//     }
// }

let time = 40;

function displayTime(){
    let showTime = document.querySelector("#time");
    time--;
    showTime.innerHTML = time+"s";
    if(time == 0){
        clearInterval(counter);
        gameOver()
    }
}

let counter=setInterval(displayTime, 1000);
let skipButton = document.querySelector("#skip")
let playAgain = document.querySelector("#playAgain");
let gameStatus = document.querySelector("#gameStatus")

function gameOver(){
    random.style.display="none"
    gameStatus.innerHTML="You Lose"
    typedWord.style.display = "none";
    skipButton.style.display = "none";
    playAgain.style.display = "inline-Block";
    // getStored()
    clearInterval(counter)
}

function gameWin(){
    if(score >= 5){
        typedWord.style.display = "none";
        skipButton.style.display = "none";
        playAgain.style.display = "inline-Block";
        random.style.display="none"
        gameStatus.innerHTML="You Won"
        // getStored()
        clearInterval(counter)
    }
}

playAgain.addEventListener("click", () => {
    window.location.reload();
    playAgain.style.display = "none";
});


let data = new Date();
let hours = data.getHours();
let timeInterval  = document.getElementById("timeInterval")

if (hours >= 1 && hours <=5){
    timeInterval.innerHTML = "Hello, Early Morning";
}else if (hours >= 6 && hours < 12){
    timeInterval.innerHTML = "Hello, Good Morning";
}else if (hours >= 12 && hours < 14){
    timeInterval.innerHTML = "Hello, Good Afternoon";
}else if (hours >= 15 && hours < 18){
    timeInterval.innerHTML = "Hello, Good Evening";
}else if (hours >= 19 && hours < 14 || hours == 0){
    timeInterval.innerHTML = "Hello, Good Night";
}else{
    timeInterval.innerHTML = "What are you";
}


let showUser = document.querySelector("#show");
function popUp(){
    let username = prompt("What is your name ?");
    localStorage.setItem("storedUser", username);
    showUser.innerHTML = username;
}

let storedUser = localStorage.getItem("storedUser");
if(storedUser){
    showUser.innerHTML = storedUser;
}else{
    showUser.innerHTML = "User";
}





    