
/*
console.log("Up and Running!")

var cardOne = "King";
var cardTwo = "King";
var cardThree = "Queen";
var cardFour = "Queen";

console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);
*/

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);

var cardTwo = cards[2];

cardsInPlay.push(cardTwo);

console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	//console.log("yup");
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.")
	}
}