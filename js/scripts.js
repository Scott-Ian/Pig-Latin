// Business Logic
const isAVowel = function (string) {
  let firstLetter = string.charAt(0);
  if (firstLetter === "a" || firstLetter === "A" || firstLetter === "e" || firstLetter === "E" || firstLetter === "i" || firstLetter === "I" || firstLetter === "o" || firstLetter === "O" || firstLetter === "u" || firstLetter === "U") {
    return true;
  } else {
    return false;
  }
}

const pigLatinConverter = function (string) {
  
  if (string.length === 1 && isAVowel(string)) {
    return string + "way"
  } else if (!isAVowel(string)) {
    let firstLetter = string.charAt(0);
    let newString = string.slice(1);
    newString = newString + firstLetter;
    return newString;
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

