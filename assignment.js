// Problem number one solve

function feetToMile(feet) {

    let mile = feet / 5280; //  5280 foot = one mile
    return mile;
}

let result = feetToMile(105600);
result = result.toFixed(3);

console.log('Feet to Mile =', result);



// Problem number two solve

function woodCalculator(chair, table, bed) {

    var wood = (1 * chair) + (3 * table) + (5 * bed);
    return wood;
}

let quantity = woodCalculator(4, 5, 6);

console.log('Total wood need =', quantity);


// problem number three solve

function brickCalculator(brick) {

    let building = brick;
    if (building <= 10) {
        return (building * 15 * 1000);
    } else if (building <= 20) {
        return ((10 * 15) + (building - 10) * 12) * 1000;
    } else return ((10 * 15) + (10 * 12) + (building - 20) * 10) * 1000;
}

let tenOutput = brickCalculator(10);
let twentyOutput = brickCalculator(20);
let twentyAbove = brickCalculator(26);

console.log('First 1 to 10th floor =', tenOutput);
console.log('Second 11 to 20th floor =', twentyOutput);
console.log('Third 20th floor above =', twentyAbove);


// Problem number four slove

let name = ['Oshmi', 'Rimpi', 'Sohel', 'Mimo'];
function tinyFriend(arr) {

    let small = arr[0].length;
    let smallest;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < small) {
            small = arr[i].length;
            smallest = arr[i];
        }
    }

    return smallest;
}

let myFriend = tinyFriend(name);

console.log('Small spelling friend name =', myFriend);