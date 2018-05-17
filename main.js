var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var words = ["gandalf the grey", "bilbo baggins", "elrond", "frodo baggins", "sauron", "legolas", "aragorn", "gollum", "arwen", "nazgul", "galadriel", "balrog", "gimli", "saruman", "samwise gamgee", "eowyn", "boromir", "peregrin took", "faramir", "meriadoc brandybuck", "tom bombadil", "theoden", "witch king of angmar", "eomer", "glorfindel", "radagast the brown", "treebeard", "shelob", "isildur", "elendil", "celeborn", "grima wormtongue", "varda", "anarion", "eldarion", "gamling", "old man willow", "beregond", "fredegar bolger", "forlong the fat", "harry goatleaf", "theodwyn"];

var randomWord;
// var lifeCount = 7;
// var lossCount = 0;
// var winCount = 0;
// var blankArray = [];
function startGame() {
    var lifeCount = 7;
    var blankStr2 = ""
    var randomNum = (Math.floor(Math.random() * words.length));
    randomWord = words[randomNum];
    var blanks = document.getElementById("lines");
    var blankArray = [];

    for(var i = 0; i < randomWord.length; i++) {
        if (letters.indexOf(randomWord[i]) !== -1) {
            blankArray.push("_");
        } else if (randomWord[i] === " ") {
            blankArray.push(" ");
        } else {
        
        }
    }

    var blankStr = ""; 
    for(var j = 0; j < blankArray.length; j++) {
        if (blankArray[j] === "_") {
            blankStr = blankStr + " " + blankArray[j];
        } else if (blankArray[j] === " ") {
            blankStr = blankStr +  "  |  ";
        } else {

        }
    }

    blanks.innerHTML = blankStr;

    var guessed = [];
    var guessedStr = "";
    var letGuessed = document.getElementById("lettersGuessed");
    // var lifeCount = 7;
    var lifeStatus = document.getElementById("lives");
    // var lossCount = 0;
    var lossTally = document.getElementById("losses");
    // var winCount = 0;
    var winTally = document.getElementById("wins");
    var blankStr3 = "";

    // lifeStatus.innerHTML = "Lives: " + lifeCount;
    
    document.addEventListener("keyup", function(){
        var lossCount = 0;
        var winCount = 0;
        // var lifeCount = 7;

        if (letters.indexOf(event.key) !== -1) {
            guessed.push(event.key);
            guessedStr = guessedStr + " " + event.key;
            letGuessed.innerHTML = "Letters Guessed: " + guessedStr;
            blankStr2 = "";

           
            if (randomWord.indexOf(event.key) !== -1) {
                for (var k = 0; k < randomWord.length; k++) {
                    if (event.key === randomWord[k]) {
                        blankArray[k] = event.key;

                    } else {

                    }
                    
                }
                
                for (l = 0; l < randomWord.length; l++) {
                    // blankStr3 = blankStr3 + blankArray[l];
                    if (blankArray[l] === " ") {
                        blankStr2 = blankStr2 +  "  |  ";
                    } else {
                        blankStr2 = blankStr2 + " " + blankArray[l];
                        blanks.innerHTML = blankStr2;
                    }
                }
                
                // if (blankArray.indexOf("_") === -1) {
                //     winCount = winCount + 1;
                //     winTally.innerHTML = "Wins: " + winCount;
                //     blankArray[0] = "_";
                // } else {

                // }

            } else {
                lifeCount = lifeCount - 1;
                lifeStatus.innerHTML = "Lives: " + lifeCount;
                var hanged = document.getElementById("hangPic");
    
                if (lifeCount == 6) {
                    hanged.src = "./assets/images/hangman1.jpg";
                } else if (lifeCount == 5) {
                    hanged.src = "./assets/images/hangman2.jpg";
                } else if (lifeCount == 4) {
                    hanged.src = "./assets/images/hangman3.jpg";
                } else if (lifeCount == 3) {
                    hanged.src = "./assets/images/hangman4.jpg";
                } else if (lifeCount == 2) {
                    hanged.src = "./assets/images/hangman5.jpg";
                } else if (lifeCount == 1) {
                    hanged.src = "./assets/images/hangman6.jpg";
                } else if (lifeCount == 0) {
                    hanged.src = "./assets/images/hangman7.jpg";
                    lossCount = lossCount + 1;
                    lossTally.innerHTML = "Losses: " + lossCount;
                    alert("You Lose! Press Start to Play Again.");
                } else {
            
                }
            }
            
        } else {
            alert("Please press a letter key");

        }
        
        
    });

    
   
    
}