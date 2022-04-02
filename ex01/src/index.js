function main() {

    var myFirstName, myLastName, myHomeTown;
    myFirstName = "Basil";
    myLastName = "Bosnjak";
    myHomeTown = "Mostar";

    return {
        myFirstName,
        myLastName,
        myHomeTown
    };
}

console.log(main());
module.exports = main;