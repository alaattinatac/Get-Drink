function getDrink(money, costPerBottle) {
    console.log("Leave house");
    console.log("Turn left");
    console.log("Go to the market");
    console.log("Buy " + calcBottles(money, costPerBottle) + " bottles of drink");
    console.log("Pay for drink");
    console.log("Leave market");
    console.log("Come back to the house");
}

function calcBottles(startingMoney, costPerBottle) {
    let numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}

getDrink(20, 3);
