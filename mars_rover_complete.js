// Rover Object Goes Here
// ======================
let myRover = {
  direction: "N",
  travelLog:[],
  position: {
    x:0,
    y:0,
  }
}
var grid = [ 
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ','X',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' '] ];



// =====================


function turnLeft(){
  switch (myRover.direction){
    case "N":
      myRover.direction = "W"
      // console.log(myRover.direction)
      break;
    case "W":
      myRover.direction = "S"
      // console.log(myRover.direction)
      break;
    case "S":
      myRover.direction = "E"
      // console.log(myRover.direction)
      break;
    case "E":
      myRover.direction = "N"
      // console.log(myRover.direction)
      break;
  }
 } 

function turnRight(){
    switch (myRover.direction){
    case "N":
      myRover.direction = "E"
      // console.log(myRover.direction)
      break;
    case "E":
      myRover.direction = "S"
      // console.log(myRover.direction)
      break;
    case "S":
      myRover.direction = "W"
      // console.log(myRover.direction)
      break;
    case "W":
      myRover.direction = "N"
      // console.log(myRover.direction)
      break;
  }
}

// turnRight();
// turnLeft();


//=====================


function moveForward(){
  if (myRover.position.x >= 0 && myRover.position.x <= 9 && myRover.position.y >= 0 && myRover.position.y <= 9 ){
    switch (myRover.direction){
      case "N": 
       myRover.position.x --
      //  console.log(myRover.position)
        break;
      case "S":
        myRover.position.x ++
        // console.log(myRover.position)
        break;
      case "E": 
        myRover.position.y ++
        // console.log(myRover.position)
        break;
      case "W": 
        myRover.position.y --
        // console.log(myRover.position)
        break;
    }
   } else {
    console.log(`rover cannot move in that direction`)
  }
 }


 //====================

 
function moveBackward(){
  if (myRover.position.x > 0 && myRover.position.x <= 9 && myRover.position.y >= 0 && myRover.position.y <= 9 ){
    switch (myRover.direction){
      case "N": 
       myRover.position.x ++
        break;
      case "S":
        myRover.position.x --
        break;
      case "E": 
        myRover.position.y --
        break;
      case "W": 
        myRover.position.y ++
        break;
    }
   } else {
    console.log(`rover cannot move in that direction`)
  }
 }
// moveBackward()


//===================


function moveMyRover(command){
  for (let i = 0; i <= command.length ; i++){
  console.log(myRover.position)
    switch(command.charAt(i)){
      case "l":
        turnLeft();
        break;
      case "r":
        turnRight();
        break;  
      case "f": 
        moveForward();
        break; 
      case "b": 
        moveBackward();
        break;
    }
    myRover.travelLog.push([(myRover.position.x), (myRover.position.y)])
  } 
  console.log(myRover.travelLog);
}


moveMyRover("rffffrffffff");
grid[6][4] = 'X';