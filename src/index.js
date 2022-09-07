document.addEventListener("DOMContentLoaded", () =>{
    // card options
    const cardsArray = [
        {
            name: "fries",
            img: "src/images/fries.png"
        },
        {
            name:"cheeseburger",
            img:"src/images/cheeseburger.png"
        },
        {
            name:"ice-cream",
            img:"src/images/ice-cream.png"
        },
        {
            name:"hotdog",
            img:"src/images/hotdog.png"
        },
        {
            name:"milkshake",
            img:"src/images/milkshake.png"
        },
        {
            name:"pizza",
            img:"src/images/pizza.png"
        },
        {
            name: "fries",
            img: "src/images/fries.png"
        },
        {
            name:"cheeseburger",
            img:"src/images/cheeseburger.png"
        },
        {
            name:"ice-cream",
            img:"src/images/ice-cream.png"
        },
        {
            name:"hotdog",
            img:"src/images/hotdog.png"
        },
        {
            name:"milkshake",
            img:"src/images/milkshake.png"
        },
        {
            name:"pizza",
            img:"src/images/pizza.png"
        }
    ]

    // How to sort the array at random?
    // 0.5-Math.random() gives a positive or negative number at random 
    // every index of the array gets a random number and .sort()
    // calculates a-b for each pair of elements.a-b <0 a to the left of b 
    // a-b >0 a to the right of b
    // this way the array gets randomly shuffled
    cardsArray.sort(() => 0.5 - Math.random())
    console.log(cardsArray)

    const grid = document.querySelector(".grid")
    const resultDisplay = document.querySelector("#result")
    let cardsChosen = []
    let cardsChosenIDs = []
    let cardsWon = []

    function createBoard() {
        for (let i= 0; i<cardsArray.length; i++) {
            const card = document.createElement("img")
            card.setAttribute("src","src/images/blank.png")
            card.setAttribute("data-id", i)
           card.addEventListener("click",flipCard)
            grid.appendChild(card)
        }
    }



function flipCard() {
    // .this() refers to the card thats flipped in the for loop above
    let cardID = this.getAttribute("data-id")
    cardsChosen.push(cardsArray[cardID].name)
    cardsChosenIDs.push(cardID)
    this.setAttribute("src", cardsArray[cardID].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
    console.log(cardsChosenIDs)
}
function checkForMatch() {
    const cards = document.querySelectorAll("img")
    const optionOneID = cardsChosenIDs[0]
    const optionTwoID = cardsChosenIDs[1]
if (optionOneID === optionTwoID){
    alert("Du hast das gleiche Bild zweimal gewählt")
    cards[optionOneID].setAttribute("src","src/images/blank.png")
    cards[optionTwoID].setAttribute("src","src/images/blank.png")
    // check if the names of the two chosen cards match
} else if (cardsChosen[0] === cardsChosen[1]){
alert("Du hast ein Paar gefunden!")
cards[optionOneID].setAttribute("src","src/images/white.png")
cards[optionTwoID].setAttribute("src","src/images/white.png")
cards[optionOneID].removeEventListener("click", flipCard)
cards[optionTwoID].removeEventListener("click", flipCard)
cardsWon.push(cardsChosen)
}else{
    cards[optionOneID].setAttribute("src","src/images/blank.png")
    cards[optionTwoID].setAttribute("src","src/images/blank.png")
    alert("Leider kein treffer.")
}
// After two cards have been selected clear the array
cardsChosen=[]
cardsChosenIDs = []
resultDisplay.textContent = cardsWon.length
if (cardsWon.length === cardsArray.length /2) {
    resultDisplay.textContent = "Glückwunsch! Du hast gewonnen!"
}

console.log(cardsChosen)
console.log(cardsWon)
}

createBoard()
})