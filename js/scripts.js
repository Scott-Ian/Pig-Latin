// Business Logic
function pigLatinConverter(string) {
  return string;
}


// UI Logic
$(document).ready (function () {
  $("form#piggy-form").submit(function (event) {
    event.preventDefault();
    const userInput = $("input#human-input").val();

    const results = pigLatinConverter(userInput);

    $("#results").text(results);
    
  });
});
