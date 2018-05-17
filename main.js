var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var words = ["gandalf the grey", "bilbo baggins", "elrond", "the shire", "frodo baggins", "sauron", "legolas", "aragorn", "gollum", "arwen", "nazgul", "galadriel", "balrog", "gimli", "saruman", "samwise gamgee", "eowyn", "boromir", "peregrin took", "faramir", "meriadoc brandybuck", "tom bombadil", "theoden", "witch king of angmar", "eomer", "glorfindel", "radagast the brown", "treebeard", "shelob", "isildur", "elendil", "celeborn", "grima wormtongue", "varda", "anarion", "eldarion", "gamling", "old man willow", "beregond", "fredegar bolger", "forlong the fat", "harry goatleaf", "theodwyn"];

var randomWord;
// var lifeCount = 7;

function startGame() {
   
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
    var lifeCount = 7;
    var lifeStatus = document.getElementById("lives")
    lifeStatus.innerHTML = "Lives: " + lifeCount;
    document.addEventListener("keyup", function(){
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
                    if (blankArray[l] === " ") {
                        blankStr2 = blankStr2 +  "  |  ";
                    } else {
                        blankStr2 = blankStr2 + " " + blankArray[l];
                        blanks.innerHTML = blankStr2;
                    }
                }
            } else {
                lifeCount = lifeCount - 1;
                lifeStatus.innerHTML = "Lives: " + lifeCount;
            }
        } else {
            alert("Please press a letter key")

        }
    });

    
}