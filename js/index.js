// const math = document.querySelector('.math');
// const history = document.querySelector('.history');
// const science = document.querySelector('.science');
// const music = document.querySelector('.music');
// const sports = document.querySelector('.sports');
// const start = document.querySelector('.sBtn')
// const restart = document.querySelector('.rBtn')
// let scoreBoard = 0



// let timer = document.querySelector('.timer')
// window.timer = function (){
//     var seconds = 20
// }


// var timer = 20;
// var downloadTimer = setInterval(function(){
//   if(timer <= 0){
//     clearInterval(downloadTimer);
//     document.querySelector(".timer").innerHTML = alert('Ran out of time! Next player goes !');
//   } else {
//     document.querySelector(".timer").innerHTML = timer + " Sec ";
//   }
//   timer -= 1;
// }, 1000);



// let winner = true;
// let loser = false

// var winnerResult = function(){
//     if (playerScoreTracker[isPlayerTurn] >= 2500) {
//         isPlayerTurn = true
//         alert(`${playerScoreTracker[isPlayerTurn]} you are the winner !`)
//     }else if
//          (playerScoreTracker[isPlayerTurn] <= 2500) {
//             isPlayerTurn = false
//             alert(`${playerScoreTracker[isPlayerTurn]} you are the loser !`)
//     } else {
//         alert(" Continue playing till you reach 2,500 points")
//     }
//     // console.log('you are the winner!')
// }


// -------------- restart button ----------------------

function restartBtn() {
    alert('Please press "start game" to start ! ')
    if (playerScoreTracker[isPlayerTurn] >= 2500){
    //    player 1
         playerScoreTracker[isPlayerTurn] = 0
         if (isPlayerTurn === true) {
             document.querySelector('.scoreBoardOne').innerHTML = playerScoreTracker[isPlayerTurn]
         } else {
              document.querySelector('.scoreBoardTwo').innerHTML = playerScoreTracker[isPlayerTurn]
         }
    } else if(playerScoreTracker[isPlayerTurn] <= 2500) {
        
        playerScoreTracker[isPlayerTurn] = 0
        if (isPlayerTurn === true ) {
            document.querySelector('.scoreBoardOne').innerHTML = playerScoreTracker[isPlayerTurn]
        } else {
             document.querySelector('.scoreBoardTwo').innerHTML = playerScoreTracker[isPlayerTurn]
        }
    } else {
        console.log('Error Please refresh the page ! ')

    }

    if (playerScoreTracker[isPlayerTurn] >= 2500){
    //    player 2
        playerScoreTracker[isPlayerTurn] = 0
        if (isPlayerTurn === false) {
            document.querySelector('.scoreBoardOne').innerHTML = playerScoreTracker[isPlayerTurn]
        } else {
             document.querySelector('.scoreBoardTwo').innerHTML = playerScoreTracker[isPlayerTurn]
        }
   } else if(playerScoreTracker[isPlayerTurn] <= 2500) {
       
       playerScoreTracker[isPlayerTurn] = 0
       if (isPlayerTurn === false ) {
           document.querySelector('.scoreBoardOne').innerHTML = playerScoreTracker[isPlayerTurn]
       } else {
            document.querySelector('.scoreBoardTwo').innerHTML = playerScoreTracker[isPlayerTurn]
       }
   } else {
       console.log('Error Please refresh the page ! ')

   }

}

// ----------- players one true and player two false --------------
let isPlayerTurn = true
let playerScoreTracker = {
    true : 0,
    false: 0
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
    
    let math = document.querySelector('.mathOne')
    math.classList.toggle('noCard')


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
    
        let math = document.querySelector('.mathTwo')
        math.classList.toggle('noCard')

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
        
        let math = document.querySelector('.mathThree')
        math.classList.toggle('noCard')

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
    
        let math = document.querySelector('.mathFour')
        math.classList.toggle('noCard')

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
    
    let math = document.querySelector('.mathFive')
    math.classList.toggle('noCard')

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


// ----------------- History Questions ------------

  // history question 1
  const  toggleHsOne = () => {

    let math = document.querySelector('.hsOne')
    math.classList.toggle('noCard')
    
    let hsRiddleOne = prompt(' The year World War I started ? ')
    if (hsRiddleOne === '1914') {
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

// history question 2 
const  toggleHsTwo = () => {
    
    let math = document.querySelector('.hsTwo')
    math.classList.toggle('noCard')

    let hsRiddleTwo = prompt(' What are the 2 dual court systems ? ')
    if (hsRiddleTwo === 'Federal and State') {
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

// history question 3
const  toggleHsThree = () => {

    let math = document.querySelector('.hsThree')
    math.classList.toggle('noCard')
    
    let hsRiddleThree = prompt(' Who was the first African American president ? ')
    if (hsRiddleThree === 'Obama') {
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

// history question 4
const  toggleHsFour = () => {

    let math = document.querySelector('.hsFour')
    math.classList.toggle('noCard')
    
    let hsRiddleFour = prompt(' Who was the president during the great depression ? ')
    if (hsRiddleFour === 'Franklin D. Roosevelt') {
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

// history question 5
const  toggleHsFive = () => {

    let math = document.querySelector('.hsFive')
    math.classList.toggle('noCard')
    
    let hsRiddleFive = prompt(' Which President never lived in the White House ? ')
    if (hsRiddleFive === 'George Washington') {
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


// --------------- Science Questions -------------- 

// science question 1
const  toggleSciOne = () => {

    let math = document.querySelector('.sciOne')
    math.classList.toggle('noCard')
    
    let sciRiddleOne = prompt(' What type of scientist studies motion? ')
    if (sciRiddleOne === 'Physicist') {
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

// science question 2
const  toggleSciTwo = () => {

    let math = document.querySelector('.sciTwo')
    math.classList.toggle('noCard')
    
    let sciRiddleTwo = prompt('If it is Summer in the United States, what season is it in Australia in the Southern Hemisphere?')
    if (sciRiddleTwo === 'Winter') {
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

// science question 3
const  toggleSciThree = () => {

    let math = document.querySelector('.sciThree')
    math.classList.toggle('noCard')
    
    let sciRiddleThree = prompt('What might a larva eventually turn into ?')
    if (sciRiddleThree === 'Egg') {
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

// science question 4
const  toggleSciFour = () => {

    let math = document.querySelector('.sciFour')
    math.classList.toggle('noCard')
    
    let sciRiddleFour = prompt('Which object orbits the Earth ?')
    if (sciRiddleFour === 'Moon') {
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

// science question 5
const  toggleSciFive = () => {

    let math = document.querySelector('.sciFive')
    math.classList.toggle('noCard')
    
    let sciRiddleFive = prompt(' In what type of rock would you most likely find a fossil ?')
    if (sciRiddleFive === 'Sedimentary') {
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

// ----------------- Music Questions --------------

// music question 1
const  toggleMusOne = () => {

    let math = document.querySelector('.musOne')
    math.classList.toggle('noCard')
    
    let musRiddleOne = prompt(' Which artist sings "All I want for christmas is you" ? ')
    if (musRiddleOne === 'Mariah Carey') {
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

// music question 2
const  toggleMusTwo = () => {

    let math = document.querySelector('.musTwo')
    math.classList.toggle('noCard')
    
    let musRiddleTwo = prompt(' Which artist is known as the "King of Pop" ? ')
    if (musRiddleTwo === 'Michael Jackson') {
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

// music question 3
const  toggleMusThree = () => {

    let math = document.querySelector('.musThree')
    math.classList.toggle('noCard')
    
    let musRiddleThree = prompt(' Which artist is known as "YEEZY" ? ')
    if (musRiddleThree === 'Kanye West') {
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

// music question 4
const  toggleMusFour = () => {

    let math = document.querySelector('.musFour')
    math.classList.toggle('noCard')
    
    let musRiddleFour = prompt(' Which band wrote the song "Hey Jude" ? ')
    if (musRiddleFour === 'The Beatles') {
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

// music question 5
const  toggleMusFive = () => {

    let math = document.querySelector('.musFive')
    math.classList.toggle('noCard')
    
    let musRiddleFive = prompt(' Which K-POP group is the most known ? ')
    if (musRiddleFive === 'bts') {
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


// ------------------ Sport Questions ------------ 
// sport question 1
const  toggleSportsOne = () => {

    let math = document.querySelector('.sportsOne')
    math.classList.toggle('noCard')
    
    let sportsRiddleOne = prompt(' Who is the greatest basketball player of all time ? ')
    if (sportsRiddleOne === 'Michael Jordan') {
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

// sport question 2
const  toggleSportsTwo = () => {

    let math = document.querySelector('.sportsTwo')
    math.classList.toggle('noCard')
    
    let sportsRiddleTwo = prompt(' The Olympics are held every how many years ? ')
    if (sportsRiddleTwo === '4 years') {
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

// sport question 3
const  toggleSportsThree = () => {

    let math = document.querySelector('.sportsThree')
    math.classList.toggle('noCard')
    
    let sportsRiddleThree = prompt(' What do you call it when a bowler makes three strikes in a row ? ')
    if (sportsRiddleThree === 'Turkey') {
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

// sport question 4
const  toggleSportsFour = () => {

    let math = document.querySelector('.sportsFour')
    math.classList.toggle('noCard')
    
    let sportsRiddleFour = prompt(' Which boxer fought against Muhammad Ali and won ? ')
    if (sportsRiddleFour === 'Joe Frazier') {
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

// sport question 5
const  toggleSportsFive = () => {

    let math = document.querySelector('.sportsFive')
    math.classList.toggle('noCard')
    
    let sportsRiddleFive = prompt(' How many players are on a baseball teamn ? ')
    if (sportsRiddleFive === '9') {
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












