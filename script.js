// Accessing all the div to assign random color to them
let one = document.getElementById("div1");
let two = document.getElementById("div2");
let three = document.getElementById("div3");
let four = document.getElementById("div4");
let five = document.getElementById("div5");
let six = document.getElementById("div6");
let score = document.getElementById("score");
let highscore = document.getElementById("highScore");
let answerColor = document.getElementById("color");
let congrats = document.getElementById("congrats");
let wrong = document.getElementById("wrong");

// Accessing the local storage to store and fetch the score and high score
let storedScore = 0;
let storedHighScore = 0;
if(localStorage.getItem("storedScore") === null){
    storedScore = 0;
    score.innerText = storedScore;
}
else{
    storedScore = localStorage.getItem("storedScore");
    score.innerText = storedScore;
}

if(localStorage.getItem("storedHighScore") === null){
    storedHighScore = 0;
    highscore.innerText = storedHighScore;

}
else{
    storedHighScore = localStorage.getItem("storedHighScore");
    highscore.innerText = storedHighScore;
}


function generateColor(){
    // Generating the random hex color value
    // let color = "";
    // let num = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
    // for(let i=0; i<6; i++){
    //     let a = Math.floor(Math.random()*16);
    //     color = color + num[a];
    // }
    // color = "#" + color;
    // return color;

    // Code to generate the random rgb color
    let o = Math.round, r = Math.random, s = 255;
        return 'rgb( ' + o(r()*s) + ' , ' + o(r()*s) + ' , ' + o(r()*s) + ' )';
}


// Array to store the colors
let colorArray = [];
function assignColor(){
    congrats.style.display = "none";
    let answer = Math.floor( Math.random() * 7 );
    if(answer === 0){
        answer++;
    }

    for(let i=1; i<=6; i++){
        let mycolor = generateColor();
        colorArray.push(mycolor);
        if(answer === i){
            answerColor.innerText = mycolor;
        }
        let option = document.getElementById(`div${i}`);
        option.style.backgroundColor = mycolor;
    }
}

function check(element, index){
    if(colorArray[index] === answerColor.innerText){
        congrats.style.display = "block";

        // Updating the score and high score of the user
        score.innerText = Number(score.innerText) + 1;
        if(Number(score.innerText) > Number(highscore.innerText)){
            highscore.innerText = score.innerText;
        }
        localStorage.setItem("storedScore", `${Number(score.innerText)}`);
        localStorage.setItem("storedHighScore", `${Number(highscore.innerText)}`);

        colorArray = [];
        setTimeout(() => {
            assignColor();
        }, 1000);
    }
    else{
        score.innerText = Number(score.innerText) - 1;
        localStorage.setItem("storedScore", `${Number(score.innerText)}`);
        wrong.style.display = "block";
        setTimeout(() => {
            wrong.style.display = "none";
        }, 1000);
    }
}