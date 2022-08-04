var readlineSync = require('readline-sync');

var user = readlineSync.question('May I have your name? ');
console.log('Hello! My name is ' + user + '! ')

const index = readlineSync.keyIn("Hey " + user + " enter 'w' to walk or 'q' to quit if, you're too chicken.", {limit: "wpq"})

class Player {
    constructor(player, hp, ap) {
        this.player = player
        this.hp = hp
        this.ap = ap
        this.inventory = []
        this.enemyKilled = 0;
    }
    //player is alive Function
    isAlive() {
        return this.hp > 0;
    }
    reduceHP(damage) {
        this.hp -= damage;
        if (this.hp < 0) {
            this.hp = 0;

        }
    }
}
      
let player = new Player(user, 100)


class Enemies {
    constructor(enemy, hp, ap) {
        this.enemy = enemy
        this.hp = hp
        this.ap = ap
    }
    isAlive() {
        return this.hp > 0;
    }
    reduceHP(damage) {
        this.hp -= damage;
        if (this.hp < 0) {
            this.hp = 0;
        }
    }
}
let enemy = []
let enemy1 = new Enemies("Buggs Bunny", 100, "gold ring")
let enemy2 = new Enemies("Donald Duck", 100, "diamond ring")
let enemy3 = new Enemies("The Martian",100, "Platinum")
enemy.push(enemy1, enemy2,enemy3)

let isAlive = true;
while (isAlive === true) {
   if(index === 'w') {
      walking()     
   }
   else if(index === 'q') {
      console.log("Wow. I didn't take you as a quitter. ")
      break
   }
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

   function enemyAppear() {
   
   let randomEnemy = enemy[Math.floor(Math.random() * enemy.length)]
   let escapingChance = Math.random()
   
       var chooseEnemy= readlineSync.keyIn(randomEnemy.enemy + ' has appeared. If you choose to escape this enemy, hit no[n]. If you choose this enemy, hit yes[y] ', {limit:'ny'})
       if (chooseEnemy === 'n'){
          console.log(' I guess you have to work on your skills')
          //from the instructions, your player should have a chance       //to escape if they choose to escape the enemy.
          // you need to create an escape function and call it here. 
          //for example:
          //escape(escapingChance)
            //see escape function below
      }
       else if(chooseEnemy === 'y'){
          console.log('let the match begin ......')
          attack(randomEnemy)
       }
       
   }

   function escape(escapingChance) {
      // if chance of escaping is 50%
      if(escapingChance > 0.50) {
         //console log something about the player escaping
     } else {
         //console log something about the enemy defeating the player

         //if isAlive is false, the game should end
         isAlive = false
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
   // const score = [1] // getting a strict score without using math.random (math.floor+1??)
   let playerLoseHp = Math.floor(Math.random()*100)
   let enemyLoseHp = Math.floor(Math.random()*100)
   let playerBlocked = 3
   let remainingEnemyHp = randomEnemy.hp - 100
   

   let pointScore = readlineSync.keyIn(' Tap [s] in order to shoot. Tap [p] to view current status',{limit:'sp'})
      if (pointScore === 'p'){
          console.log('This is what you have earned so far'  + player.hp + " health " + player.inventory+ '.Keep fighting to earn more')
      }
      else if(pointScore === 's'){
          player.hp = player.hp - playerLoseHp
      //if player scores, the enemy loses hp(health points)
         console.log('Yayyyy!!!! you scored 1 point, keep shooting.')
         console.log('Because you scored, the enemy loses ' + enemyLoseHp + ' health points. ' + randomEnemy.enemy +  ' now has ' + remainingEnemyHp + ' health points. ')
      }
      
      // console.log(randomEnemy, "random enemy")
    //   console.log(playerBlocked, "player blocked chances")

        else if(playerBlocked <= 1){
         console.log("player blocked is true")
         //if player is blocked, the player loses hp(health points)
         console.log(' Booooo!! you were blocked you lose 3 points, dont give up keep going')
         console.log('Since the player was blocked, the player loses ' + playerLoseHp + ' health points. The player now has ' + remainingPlayerHp + ' health points. ')
         
         attack(randomEnemy)
      } 

         if(remainingEnemyHp <= 0){
          player.inventory.push(randomEnemy.ap)
          console.log(player.inventory)
      }
      //***NEW NOTES:
      // You can think about doing something like: "if remainingPlayerHp equals 0, console log that the enemy won the game" and 
      //"if remainingEnemyHp equals 0, then remove the enemy from the enemy array and then player wins the game.

      //i think the reason why it is going back to that "Donald Duck has appeared..." statement that is coming from your enemy appear function 
      //is because 
      //if(enemy.length <= 0){
               //console.log("You have defeated all of the enemies in Bizzare Town. Congratulations! You aren't a wimp after all. ")
               ///isAlive = false
         //}
         //is not true. Since it's not true, it seems to keep calling the enemyAppear function. Try finding a way to use indexOf and splice to remove the enemy from the array
         //when the player defeats the enemy. Once all the enemies are removed from the enemy array, then this statement should be true
         //and console log stating that all the enemies are defeated should appear in the terminal.  

      //i would try to find a way to get the remaining hp for the player and the enemy to reach 0. once that happens, then the game ends.

      
      if(playerLoseHp > enemyLoseHp * 3){
         console.log( user +" you have lost three times game is over you have to start from the begging ")

         // calling "isAlive = false" will end the game, meaning the player has lost. so call "isAlive = false" when the player is suppose to die and the game ends
         isAlive = false
      }
   
   }
   