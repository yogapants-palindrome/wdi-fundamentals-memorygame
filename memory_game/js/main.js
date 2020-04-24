console.log("Up and running!");


const cards = [
    {
        rank: "queen",
        suit: "heart",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "heart",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    },
];

let cardsInPlay = [];

function checkForMatch () {
    if (cardsInPlay[0] === cardsInPlay [1]) {
        console.log("You Found a Match!");
    } else {
        console.log("Sorry, Try Again.");
      }
  }
function flipcard () {
    let cardId = this.getAttribute('data-id')
    console.log("user flipped" + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    checkForMatch();
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    this.setAttribute("src", cards[cardId].cardImage);
     if (cardsInPlay.length === 2) {
        checkForMatch();
   } 
}

function createBoard() {
    for (let i = 0; i < cards.length; i++) {
       let cardElement = document.createElement('img');
    cardElement.setAttribute('src',"images/back.png");
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click',flipcard);
document.getElementById('game-board').appendChild(cardElement);
    }

}

createBoard();














