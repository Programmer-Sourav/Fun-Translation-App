

var textInput = document.querySelector("#txt-input")
var buttonToTranslate = document.querySelector("#btn-translate")
var textOutput = document.querySelector("#output-box")

var serverURL = "https://api.funtranslations.com/translate/chef.json";

buttonToTranslate.addEventListener("click", buttonClickHandler)


function buttonClickHandler(){
    var inputText = textInput.value;
    var urlAfterAppendingText = getTranslationURL(inputText);
  
    fetch(urlAfterAppendingText)
    .then(response => response.json())
    .then(json => {
      var translatedText = json.contents.translated;
      textOutput.innerText = translatedText;
      console.log("Translated Text: " + translatedText);
    })
    .catch(error => {
      var errorText = "Some error occured in the server. Please come back later.";
      alert(errorText);
      console.log("Error Occured:\n" + error);
    })
}
function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input
}