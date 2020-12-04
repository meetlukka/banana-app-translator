var input = document.querySelector(".input-box"); 
var output = document.querySelector(".output-box");
var apiURL = "https://api.funtranslations.com/translate/minion.json";
var button = document.querySelector(".btn");

function constructURL(text){
    var encodedURI = encodeURI(text);
    return apiURL + "?text=" + encodedURI;
}

button.addEventListener("click", eventHandler)

function eventHandler(){

    var inputText = input.value;
    fetch(constructURL(inputText))
    .then(response=>response.json())
    .then(json=>{
        output.innerText = json.contents.translated;
    })
    .catch(()=>{
        alert("some error occured")
        console.log(error,"error occured")
        })
}