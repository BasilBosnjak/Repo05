function main() {

    var myNoun, myVerb, myAdjective, myAdverb;
    myNoun = "dog";
    myVerb = "ran";
    myAdjective = "big";
    myAdverb = "quickly";

    var wordBlanks;
    wordBlanks = "My " +myAdjective+" "+myNoun+" "+myVerb+" "+myAdverb+ " through the forest.";
    return wordBlanks;
}
console.log(main());
module.exports = main();