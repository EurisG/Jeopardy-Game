const math = document.querySelector('.math');
const history = document.querySelector('.history');
const science = document.querySelector('.science');
const music = document.querySelector('.music');
const sports = document.querySelector('.sports');
const start = document.querySelector('.sBtn')
const restart = document.querySelector('.rBtn')
let scoreBoard = 0


// start button function 

function startGame() {
    var players = ['Player One' , 'Player Two']
    randomPlayer = {}

    for (var i = 0 ; i < players.length ; i++){
         randomPlayer = players[Math.floor(Math.random() * players.length)];
         

        if (randomPlayer === 'Player One'){
             return alert('Player One select a question !')
        } else if (randomPlayer === 'Player Two') {
            return alert('Player Two select a question !')
        } else {
            return alert('Please press start again !')
        }
    }
    console.log(`${randomPlayer}  can pick question ! `)
}


// points system with questions 



// jeopardy question sysytem 


// restart button function 















// function start(){
//    let players = ['Player One' , 'Player Two'];
//     let randomPlayer = [];

//     for (let i = 0 ; i = players.length ; i++) {
//         randomPlayer.push(i);
//     }

//     if (randomPlayer === 'Player One'){
//         alert('Player One gets to Pick')
//     } else {
//         alert('Player Two gets to first')
//     }
// }

// var randomPlayerChosen = []; 
// for (var i = 0 ; i < 2 ; i++){
//     var players = randomPlayer.length
//     var randomPlayer = Math.floor(Math.random() * players);

//     randomPlayerChosen.push(players[randomPlayer]);


// }
    