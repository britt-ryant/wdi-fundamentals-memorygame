

//Defining the cards in an array

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
} , {
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
} , {
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
} , {
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
} 
];

var cardsInPlay = [];


var scoreIncrementer = 1;

//function to check if the identities of the cards match

var checkForMatch = function () {
	
	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			document.getElementById('scoreNumber').innerHTML = scoreIncrementer++;
		} else {
			alert("Sorry, try again.")
		}
}


//function that gets the attrubute of the card that was clicked, checks for a match to previous card (if applicable), and displays image of the card that is clicked. 

var flipCard = function () {

	var cardId = this.getAttribute('data-id');

	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {

	checkForMatch();

	cardsInPlay = [];

	}
}

//function to create the images of the back of the card.  Function also includes a listeneing event for the user to click the card.  Imbedded within the function is a for loop that cycles through all the card elements in the array.

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);	
	};
}

//function to reset the image on the card AND if the user hits reset while only one card is in play, resets the cardsInPlay array.

var flipCardBack = function () {
	for (var i = 0; i < cards.length; i++) {
		var showBack = document.getElementsByTagName('img')[i];
		showBack.setAttribute('src', "images/back.png");
	}
	cardsInPlay.pop();
}

var resetBoard = function () {
		var resetButton = document.getElementById('reset');
		resetButton.addEventListener('click', flipCardBack);
}




resetBoard();
createBoard();

