$(document).ready(function() {

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
    mask = "_";
    maskArray.push(mask);
    console.log(maskArray);
   }
// create a variable that creates an element to hold the masked letters
var maskspace = $("<p>");
// add a style class to the masked spaces
maskspace.addClass("mask-style");
// add a data attribute to the maskspace
maskspace.attr("data-mask", maskArray[i]);
// add the mask text to the maskspace
maskspace.text,(maskArray[i]);
// append to guessword paragraph
$("#guessword").append(maskspace);




// Use key events to listen for the letters that players will type
// Display Wins (# of times user guessed the word correctly)
// When game starts display a mask for the number of letters in the word the player needs to guess
// Reveal correct letters as they are guessed
// Display number of guesses remaining
// Display letters already guessed 
// When user wins/loses automatically go to another word for player to guess
});