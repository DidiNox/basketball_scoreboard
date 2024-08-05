// HOME PROGRAM
let homeCounts = 0
let homeScore = document.getElementById("homeBoard")

function home_add1() {
    homeCounts += 1
    homeScore.textContent = homeCounts
}

function home_add2() {
    homeCounts += 2
    homeScore.textContent = homeCounts
}


function home_add3() {
    homeCounts += 3
    homeScore.textContent = homeCounts
}



// GUEST PROGRAM
let guestCounts = 0;
let guestScore = document.getElementById("guestBoard");

function guest_add1() {
    guestCounts += 1
    guestScore.textContent = guestCounts
}

function guest_add2() {
    guestCounts += 2
    guestScore.textContent = guestCounts
}


function guest_add3() {
    guestCounts += 3
    guestScore.textContent = guestCounts
}



// NEW GAME PROGRAM

function newGame() {
    homeScore.textContent = 0
    homeCounts = 0
    home.textContent = "HomeScore Counts: " + homeCounts + " - "

    guestScore.textContent = 0
    guestCounts = 0
    guest.textContent = "GuestScore Count: " + guestCounts + " - "
}


// SAVE GAME PROGRAM

let homeSaveGame;
let home = document.getElementById("homeSave")

let guestSaveGame;
let guest = document.getElementById("guestSave")

function saveGame() {
    homeSaveGame = homeCounts + " - "
    home.textContent += homeSaveGame

    guestSaveGame = guestCounts + " - "
    guest.textContent += guestSaveGame
}