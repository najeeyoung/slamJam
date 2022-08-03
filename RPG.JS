var readlineSync = require('readline-sync');

var user = readlineSync.question('May I have your name? ');
console.log("Hello! My name is " + user)



const index = readlineSync.keyIn("Hey " + user + " enter 'w' to walk or 'q' to quit if, you're too chicken.", {limit: "wpq"})
var enemy = []
  var enemy1 = new Enemies("Buggs Bunny", 100, "gold ring")
  var enemy2 = new Enemies("Donald Duck", 100, "diamond ring")
  enemy.push(enemy1, enemy2)

let isAlive = true;
while (isAlive === true) {
   if(index === 'w') {
      walking()     }
      else if(index === 'q') {
         console.log("Wow. I didn't take you as a quitter. ")
         break}
}
      
      function Enemies(enemyName, hp, ring) {
         this.enemyName = enemyName;
         this.hp = hp;
         this.ring = ring;
      }


 function walking() { 

   
   let random = Math.random(); 
   console.log(random, "random number")
      if(random > 0.70 ) {
         const index2 = readlineSync.keyIn("No enemies in sight. Keep walking 'w'. ", {limit: 'w'})
         if(index2 === 'w') {
            console.log("You continue on your journey. ")
         }
      } else {
         
         if(enemy.length <= 0){
               console.log("You have defeated all of the enemies in Bizzare Town. Congratulations! You aren't a wimp after all. ")
               isAlive = false
         } else{
            enemyAppear()
      }
   }
}
// This function should randomly choose an enemy for the user to fight 
   function enemyAppear() {
   
   let randomEnemy = enemy[Math.floor(Math.random() * enemy.length)]
   
       var chooseEnemy= readlineSync.keyIn('you choose to take on ' + randomEnemy.enemyName + '? If you choose not to take this enemy, hit no[n]. If you choose this enemy, hit yes[y] ', {limit:'ny'})
       if (chooseEnemy === 'n'){
            console.log(' I guess you have to work on your skills')
      }
       else if(chooseEnemy === 'y'){
          console.log('let the match begin ......')
          attack(randomEnemy)
       }
       
   }

// function checkPoints(enemy){
//    if (user.score <= 30) 
//          {console.log( " you have won the game! congrats")}
//       else if (enemy.score <= 30){ 
//          console.log("you have been defeated")}
//          else(user.score < enemy.score)
//             console.log("game over!")
//             // return index
         
//    }

function attack(randomEnemy){
   const score = [1] // getting a strict score without using math.random (math.floor+1??)
   let playerLoseHp = Math.floor(Math.random()*100)
   let enemyLoseHp = Math.floor(Math.random()*100)

function block(player){ 
   var pointScore= readlineSync.keyIn(' Tap [s] in order to shoot',{limit:'s'})
   while (pointScore === 's'){
      //if player scores, the enemy loses hp(health points)
      console.log('Yayyyy!!!! you scored 1 point, keep shooting.')
      console.log('Enemy loses ' + enemyLoseHp + ' health points.')
      
      if (randomEnemy === 50){
      //if player is blocked, the player loses hp(health points)
      console.log('Player loses ' + playerLoseHp + ' health points.')
      console.log(' Booooo!! you were blocked you lose 3 points, dont give up keep going')}

      //***NEW NOTES:
      //if player or enemy reach 0 health points first, then they lose
      //then you can console whether or not the player won or loss
   
      else if(playerLoseHp > enemyLoseHp * 3){
         console.log( user +"you have lost three times game is over you have to start from the begging ")
      }

   
   }
   
    
   }
   }
   function reward (user){
   let inventory = []

    inventory.push(randomEnemy.ring)
    function Enemies(enemyName, ring) {
            this.enemyName = enemyName;
            this.ring = ring
      }
   
   let enemy = []
       let enemy1 = new Enemies("Ghoul", "diamond ring")
     enemy.push(enemy1)  
      const index4 = readlineSync.keyIn("Do you want to check your inventory and continue [p] to embark on your journey into Bizarre Town or was that last enemy too much for you [q]?", {limit: "pq"})
            if(index4 === 'p'){
               console.log(inventory)
               console.log("You continue to walk through Bizzare Town. ")
          walking()
     } 
            else if(index4 === 'q') {
               console.log("You couldn't take the heat, so you left Bizzare Town. ")
               isAlive = false
         }

   }
