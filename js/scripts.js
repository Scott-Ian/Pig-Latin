// Business Logic
const isAVowel = function (string) {
  let firstLetter = string.charAt(0);
  if (firstLetter === "a" || firstLetter === "A" || firstLetter === "e" || firstLetter === "E" || firstLetter === "i" || firstLetter === "I" || firstLetter === "o" || firstLetter === "O" || firstLetter === "u" || firstLetter === "U") {
    return true;
  } else {
    return false;
  }
}

const whereIsTheVowel = function (string) {
  for(let i = 0; i < string.length; i++) {
    if (isAVowel(string.charAt(i))) {
      return i;
    }
  }
}

const pigLatinConverter = function (string) {

  if (string.length === 1 && isAVowel(string)) {
    return string + "way"
  } else if (!isAVowel(string)) {

    const firstVowelLocation = whereIsTheVowel(string);
    const firstConsonants = string.slice(0, firstVowelLocation);
    let pigLatinString = string.slice(firstVowelLocation);
    pigLatinString = pigLatinString + firstConsonants + "ay";
    return pigLatinString;
  } else {
      return string;
  }
}



// UI Logic
$(document).ready (function () {
  $("form#piggy-form").submit(function (event) {
    event.preventDefault();
    const userInput = $("input#human-input").val();
    const vowels = ["a", "e", "i", "o", "u"];
    
    const results = pigLatinConverter(userInput);

    $("#results").text(results);

  });
});

