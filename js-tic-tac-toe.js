var readline = require('readline');
var currentTurn = "O";
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log('Welcome to CLI Tic-Tac-Toe!')
console.log('Players enter 1-9 coresponding to these spots on the board:')
console.log(` 1 | 2 | 3 \n---|---|---\n 4 | 5 | 6 \n---|---|---\n 7 | 8 | 9 `)
var one='1', two='2', three='3', four='4', five='5', six='6', seven='7', eight='8', nine='9';
console.log(`"O" Player, please enter your move.`)
rl.on('line', function(line){
  if(line!=="1" && line!=="2" && line!=="3" && line!=="4" && line!=="5" &&
     line!=="6" && line!=="7" && line!=="8" && line!=="9"){
    console.log("Invalid Move. Try Again.")
  }
  if(line==="1"){
    if(one==="1"){
      one=`${currentTurn}`
      checkWin();
    } else {
      console.log("Invalid Move. Tcdy Again.")
    }
  }
  if(line==="2"){
    if(two==="2"){
      two=`${currentTurn}`
      checkWin();
    } else {
      console.log("Invalid Move. Try Again.")
    }
  }
  if(line==="3"){
    if(three==="3"){
      three=`${currentTurn}`
      checkWin();
    } else {
      console.log("Invalid Move. Try Again.")
    }
  }
  if(line==="4"){
    if(four==="4"){
      four=`${currentTurn}`
      checkWin();
    } else {
      console.log("Invalid Move. Try Again.")
    }
  }
  if(line==="5"){
    if(five==="5"){
      five=`${currentTurn}`
      checkWin();
    } else {
      console.log("Invalid Move. Try Again.")
    }
  }
  if(line==="6"){
    if(six==="6"){
      six=`${currentTurn}`
      checkWin();
    } else {
      console.log("Invalid Move. Try Again.")
    }
  }
  if(line==="7"){
    if(seven==="7"){
      seven=`${currentTurn}`
      checkWin();
    } else {
      console.log("Invalid Move. Try Again.")
    }
  }
  if(line==="8"){
    if(eight==="8"){
      eight=`${currentTurn}`
      checkWin();
    } else {
      console.log("Invalid Move. Try Again.")
    }
  }
  if(line==="9"){
    if(nine==="9"){
      nine=`${currentTurn}`
      checkWin();
    } else {
      console.log("Invalid Move. Try Again.")
    }
  }
});

var checkWin = function() {
  if((one===currentTurn&&two===currentTurn&&three===currentTurn)||
     (four===currentTurn&&five===currentTurn&&six===currentTurn)||
     (seven===currentTurn&&eight===currentTurn&&nine===currentTurn)||
     (one===currentTurn&&five===currentTurn&&nine===currentTurn)||
     (three===currentTurn&&five===currentTurn&&seven===currentTurn)||
     (one===currentTurn&&four===currentTurn&&seven===currentTurn)||
     (two===currentTurn&&five===currentTurn&&eight===currentTurn)||
     (three===currentTurn&&six===currentTurn&&nine===currentTurn)){
    console.log(`\n\n\n${currentTurn} wins!!`)
    console.log(` ${one} | ${two} | ${three} \n---|---|---\n ${four} | ${five} | ${six} \n---|---|---\n ${seven} | ${eight} | ${nine} `)
    rl.close();
  } else {
    console.log(`\n\n ${one} | ${two} | ${three} \n---|---|---\n ${four} | ${five} | ${six} \n---|---|---\n ${seven} | ${eight} | ${nine} `)
    if(currentTurn==="O"){
      currentTurn="X";
    } else {
      currentTurn="O";
    }
    console.log(`"${currentTurn}" Player, please enter your move.`)
  }
}
