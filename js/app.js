//  axios;
// use api winch it have these information
let inputValue = document.getElementById("input-el").value;
let displayWord = document.getElementById("word-el");
let displayWordType = document.getElementById("word-type-el");
let displayPronouns = document.getElementById("pronouns-el");
let displayMeaning = document.getElementById("meaning-el");
let word = inputValue;
let meaning;
let wordType;
let pronouns;
let wordSound;
let example;
let displayExamplesRowContainer = document.getElementById(
  "examplesColContainer-el"
);

let exampleColContainer = ` <div class="col-12 col-sm-10 col-md-8 col-lg-6">`;
let ColContainer = `<div id="example-el" class="example-border w-100 mt-3">`;
function searchButton() {
  console.log("click search word");
  searchWord(word);
}
function searchWord() {
  let apiUrl = "";
  let appKey = "";
  axios.get(apiUrl).then(displayAnswer);
}
function displayAnswer(response) {
  displayWord.textContent = "word : serene";
  wordType = "adjective";
  displayWordType.textContent = wordType;
  pronouns = "/sɪˈriːn/";
  displayPronouns.textContent = pronouns;
  meaning = "calm, peaceful, and untroubled; tranquil.";
  wordSound = "get word sound from api";
  displayMeaning.textContent = meaning;
  example = "bring array from api";
  displayExamples(example);
}

// examples display

function displayExamples(example) {
  let exampleArray = example;
  for (let i = 0; i < example.length; i++) {
    exampleColContainer =
      exampleColContainer +
      `<div id="example-el" class="example-border w-100 mt-3">
              ${example[i].sentence}
            </div>
`;
  }
  exampleColContainer = exampleColContainer + `</div>`;
  displayExamplesRowContainer.innerHTML = exampleColContainer;
}

// word sound sapling
function soundOnOff() {
  return wordSound;
}
displayExamples();
searchWord("serene");
