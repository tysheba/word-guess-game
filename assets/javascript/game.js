$(document).one("keyup", function() {

// Select a theme and create an array of words
var words = ["zeus", "apollo", "achilles", "styx", "warrior"];
// Randomly select a word from the words array
var randNum = Math.floor(Math.random() * words.length);
var randWord = words[randNum];
console.log(randWord);
// Display mask for the number of letters in the random word
var maskArray = [];
var mask;  
    for (i=0; i < randWord.length; i++) {
        mask = "_ ";
        maskArray.push(mask);

// create a variable that creates an element to hold the masked letters

        var maskspace = $("<span>");
// console.log(maskArray);
// add a style class to the masked spaces
        maskspace.addClass("mask-style");
// add a data attribute to the maskspace
        maskspace.attr("data-mask",i);
// add the mask text to the maskspace
        maskspace.text(maskArray[i]);
// append to guessword paragraph
        $("#guessword").append(maskspace); 
} 

// console.log(randWord.charAt(1));

// push letters in randWord to the lettersArray
    var lettersArray = [];
    for (j=0; j<randWord.length; j++) {
    var x = randWord.charAt(j);
    lettersArray.push(x);
    // console.log(lettersArray);
    }


// Use key events to listen for the letters that players will type
// Limit user to 10 guesses
var lettersUsedArray = [];
var guessremain = 10;
document.onkeyup = function(event) { 
    var letter = event.key;
    
// **if letter is not included in letterUsedArray AND is included in possibleArray add it to array and append to paragraph    
    if (event.keyCode >= 65 && event.keyCode <= 90 
    && lettersUsedArray.length < 10
    
    && lettersUsedArray.indexOf(letter) < 0
    ){
        lettersUsedArray.push(letter);
        console.log("Array: " + lettersUsedArray[0]);
        console.log("letter: " + letter);
        console.log("index: " + lettersUsedArray.indexOf(letter));
    
    
    var userguess = $("<p>");
    userguess.addClass("guessstyle");
    userguess.text(letter);
    $("#playerguesses").append(userguess);
    
    console.log(lettersUsedArray);
    guessremain = guessremain -1;
    console.log(guessremain);
    $("#remaining").text("You have " + guessremain + " guesses remaining");

    var rightguess = [];
    if (randWord.indexOf(letter) > 0 ) {
        rightguess.push(letter);
    //   var  n = randWord.indexOf(letter);
    //   maskArray[n] = letter;
    }

}
else if (lettersUsedArray.length > 9) {

}
}
   


// If maskArray = lettersArray; add to wins, show image, alert "You Wim"
// Initialize to reset values- empty maskArray;
// To replace a value in the mask array set mask[j] = input letter where it matches a letter in the word
// Display Wins (# of times user guessed the word correctly)
// When game starts display a mask for the number of letters in the word the player needs to guess
// Reveal correct letters as they are guessed
// Display number of guesses remaining
// Display letters already guessed 
// When user wins/loses automatically go to another word for player to guess
});