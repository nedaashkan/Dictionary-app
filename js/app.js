// im using this API here the link : https://dictionaryapi.dev/
let inputValue = document.getElementById("input-el");
let displayWord = document.getElementById("word-el");
let displayWordType = document.getElementById("word-type-el");
let displayPronouns = document.getElementById("pronouns-el");
let displayMeaning = document.getElementById("meaning-el");
let meaningArray;
let wordType;
let pronouns;
let myExample;
let wordSound;
let playWordSound;
let audio;
let soundLink;
let dictionary = document.getElementById("dictionary-el");
// dictionary.style.display = "none";
let exampleArray = [];
let displayExamplesRowContainer = document.getElementById(
  "examplesColContainer-el"
);

function searchButton() {
  if (inputValue.value.length <= 0) {
    console.log("please write something");
  } else {
    // dictionary.style.display = "block";
    searchWord(inputValue.value);
  }
}
function searchWord(word) {
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  axios.get(apiUrl).then(displayAnswer);
}
function displayAnswer(response) {
  console.log(response);
  wordType = response.data[0].meanings[0].partOfSpeech;
  displayWordType.textContent = wordType;
  displayWord.textContent = response.data[0].word;
  pronouns = response.data[0].phonetic;
  displayPronouns.textContent = pronouns;
  meaningArray = displayMeanings(response.data[0].meanings[0].definitions);
  wordSound = play(response.data[0].phonetics);
  exampleArray = displayExamples(response.data[0].meanings[0].definitions);
}
// examples display
function displayMeanings(meaningArray) {
  let theMeaningArray = meaningArray;
  let liveMeaningArray = [];
  // let randomLiveMeaningArrayIndex = Math.floor(
  //   Math.random() * liveMeaningArray.length
  // );
  for (let i = 0; i < theMeaningArray.length; i++) {
    if (theMeaningArray[i].definition === undefined) {
    } else {
      liveMeaningArray.push(theMeaningArray[i].definition);
    }
  }
  displayMeaning.textContent = liveMeaningArray[0];
  liveMeaningArray = [];
}

let exampleColContainer = ` <div class="col-12 col-sm-10 col-md-8 col-lg-6">`;
function displayExamples(exampleArray) {
  let theExampleArray = exampleArray;
  for (let i = 0; i < theExampleArray.length; i++) {
    if (theExampleArray[i].example === undefined) {
    } else {
      exampleColContainer =
        exampleColContainer +
        `<div id="example-el" class="example-border w-100 mt-3">
                ${theExampleArray[i].example}
              </div>
  `;
    }
  }
  exampleColContainer = exampleColContainer + `</div>`;
  displayExamplesRowContainer.innerHTML = exampleColContainer;
}

// word sound sapling
let soundLinkIcon = document.getElementById("sound-link-el");
soundLinkIcon.addEventListener("click", displaySound);
function play(soundArray) {
  let theSoundArray = soundArray;
  let soundLinkArray = [];
  for (let i = 0; i < theSoundArray.length; i++) {
    if (theSoundArray[i].audio === "") {
    } else {
      soundLinkArray.push(theSoundArray[i].audio);
    }
  }
  soundLink = soundLinkArray[0];
  soundLinkArray = [];
}
function displaySound() {
  audio = new Audio(soundLink);
  audio.loop = false;
  audio.play();
}
searchWord("food");