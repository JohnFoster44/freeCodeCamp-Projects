document.addEventListener('DOMContentLoaded', () => {

    // cards
    const cardArray = [
        {
            name: 'alien',
            img: 'images/alien.png'
        },
        
        {
            name: 'alien',
            img: 'images/alien.png'
        },

        {
            name: 'bat',
            img: 'images/bat.png'
        },
        
        {
            name: 'bat',
            img: 'images/bat.png'
        },

        {
            name: 'ghost',
            img: 'images/ghost.png'
        },
        
        {
            name: 'ghost',
            img: 'images/ghost.png'
        },

        {
            name: 'ogre',
            img: 'images/ogre.png'
        },
        
        {
            name: 'ogre',
            img: 'images/ogre.png'
        },

        {
            name: 'pumpkin',
            img: 'images/pumpkin.png'
        },
        
        {
            name: 'pumpkin',
            img: 'images/pumpkin.png'
        },

        {
            name: 'skull',
            img: 'images/skull.png'
        },
        
        {
            name: 'skull',
            img: 'images/skull.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    // create game board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/milkyway.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flip)
            grid.appendChild(card)
        }
    }

    // check for matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]){
            alert('matched')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/milkyway.png')
            cards[optionTwoId].setAttribute('src', 'images/milkyway.png')
            // alert('try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'congrats u won'
        }
    }

    // card flip
    function flip(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})