const math = document.querySelector('.math');
const history = document.querySelector('.history');
const science = document.querySelector('.science');
const music = document.querySelector('.music');
const sports = document.querySelector('.sports');
const start = document.querySelector('.sBtn')
const restart = document.querySelector('.rBtn')
let scoreBoard = 0


let isPlayerTurn = true
let playerScoreTracker = {
    true : 0,
    false: 0
}

window.timerBox = function(){
    var seconds = 00;
    var appendSeconds = document.querySelector('.timer')
    // sBtn.onclick = function()
} 



// start button function 

function startGame() {
    var players = ['Player One' , 'Player Two']
    randomPlayer = {}

    for (var i = 0 ; i < players.length ; i++){
         randomPlayer = players[Math.floor(Math.random() * players.length)];
         

        if (randomPlayer === 'Player One'){
            isPlayerTurn = true
             return alert('Player One goes first. Please select a question !')
        } else if (randomPlayer === 'Player Two') {
            isPlayerTurn = false
            return alert('Player Two goes first. Please select a question !')
        } else {
            return alert('Please press start again !')
        }
    }
}

// jeopardy question sysytem 

// -------------Math Questions -------------

    // math question 1
const  toggleMathOne = () => {
    
    let mathRiddleOne = prompt(' 30 + 40 = ? ')
    if (mathRiddleOne === '70') {
        alert('Correct! Player goes again !')
        playerScoreTracker[isPlayerTurn] += 100
        if (isPlayerTurn === true) {
            document.querySelector('.scoreBoardOne').innerHTML = playerScoreTracker[isPlayerTurn]
        } else {
             document.querySelector('.scoreBoardTwo').innerHTML = playerScoreTracker[isPlayerTurn]
        }
       
    } else {
        alert('Incorrect! Next player goes !')
        playerScoreTracker[isPlayerTurn] -= 50
        if (isPlayerTurn === true) {
            document.querySelector('.scoreBoardOne').innerHTML = playerScoreTracker[isPlayerTurn]
        } else {
             document.querySelector('.scoreBoardTwo').innerHTML = playerScoreTracker[isPlayerTurn]
        }
        isPlayerTurn = !isPlayerTurn
        
    }
    console.log(playerScoreTracker)
}


    // math question 2
    const  toggleMathTwo = () => {
    
        let mathRiddleTwo = prompt(' 60 / ? = 5 ')
        if (mathRiddleTwo === '12') {
            alert('Correct! Player goes again !')
            playerScoreTracker[isPlayerTurn] += 200
            if (isPlayerTurn === true) {
                document.querySelector('.scoreBoardOne').innerHTML = playerScoreTracker[isPlayerTurn]
            } else {
                 document.querySelector('.scoreBoardTwo').innerHTML = playerScoreTracker[isPlayerTurn]
            }
           
        } else {
            alert('Incorrect! Next player goes !')
            playerScoreTracker[isPlayerTurn] -= 50
            if (isPlayerTurn === true) {
                document.querySelector('.scoreBoardOne').innerHTML = playerScoreTracker[isPlayerTurn]
            } else {
                 document.querySelector('.scoreBoardTwo').innerHTML = playerScoreTracker[isPlayerTurn]
            }
            isPlayerTurn = !isPlayerTurn
            
        }
        console.log(playerScoreTracker)
    }

    // math question 3
    const  toggleMathThree = () => {
    
        let mathRiddleThree = prompt(' 9 * 12 = ? ')
        if (mathRiddleThree === '108') {
            alert('Correct! Player goes again !')
            playerScoreTracker[isPlayerTurn] += 300
            if (isPlayerTurn === true) {
                document.querySelector('.scoreBoardOne').innerHTML = playerScoreTracker[isPlayerTurn]
            } else {
                 document.querySelector('.scoreBoardTwo').innerHTML = playerScoreTracker[isPlayerTurn]
            }
           
        } else {
            alert('Incorrect! Next player goes !')
            playerScoreTracker[isPlayerTurn] -= 50
            if (isPlayerTurn === true) {
                document.querySelector('.scoreBoardOne').innerHTML = playerScoreTracker[isPlayerTurn]
            } else {
                 document.querySelector('.scoreBoardTwo').innerHTML = playerScoreTracker[isPlayerTurn]
            }
            isPlayerTurn = !isPlayerTurn
            
        }
        console.log(playerScoreTracker)
    }

        // math question 4 
    const  toggleMathFour = () => {
    
        let mathRiddleFour = prompt(' 55 * 3 = ? ')
        if (mathRiddleFour === '165') {
            alert('Correct! Player goes again !')
            playerScoreTracker[isPlayerTurn] += 400
            if (isPlayerTurn === true) {
                document.querySelector('.scoreBoardOne').innerHTML = playerScoreTracker[isPlayerTurn]
            } else {
                 document.querySelector('.scoreBoardTwo').innerHTML = playerScoreTracker[isPlayerTurn]
            }
           
        } else {
            alert('Incorrect! Next player goes !')
            playerScoreTracker[isPlayerTurn] -= 50
            if (isPlayerTurn === true) {
                document.querySelector('.scoreBoardOne').innerHTML = playerScoreTracker[isPlayerTurn]
            } else {
                 document.querySelector('.scoreBoardTwo').innerHTML = playerScoreTracker[isPlayerTurn]
            }
            isPlayerTurn = !isPlayerTurn
            
        }
        console.log(playerScoreTracker)
    }

   // math question 5 
   const  toggleMathFive = () => {
    
    let mathRiddleFive = prompt("Shane's mom said to take a break after lunch at 12:25 p.m. His break was over at 1:10 p.m. How long was his break?")
    if (mathRiddleFive === '45 min') {
        alert('Correct! Player goes again !')
        playerScoreTracker[isPlayerTurn] += 500
        if (isPlayerTurn === true) {
            document.querySelector('.scoreBoardOne').innerHTML = playerScoreTracker[isPlayerTurn]
        } else {
             document.querySelector('.scoreBoardTwo').innerHTML = playerScoreTracker[isPlayerTurn]
        }
       
    } else {
        alert('Incorrect! Next player goes !')
        playerScoreTracker[isPlayerTurn] -= 50
        if (isPlayerTurn === true) {
            document.querySelector('.scoreBoardOne').innerHTML = playerScoreTracker[isPlayerTurn]
        } else {
             document.querySelector('.scoreBoardTwo').innerHTML = playerScoreTracker[isPlayerTurn]
        }
        isPlayerTurn = !isPlayerTurn
        
    }
    console.log(playerScoreTracker)
}

// points system with questions 






// restart button function 








