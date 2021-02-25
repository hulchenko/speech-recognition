window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; //global variable that lives in browser. First one is for Firefox, second one is for Chrome.

const recognition = new SpeechRecognition();
recognition.interimResults = true(); //for browser to differentiate speech pauses

let p = document.createElement("p"); //create p element and append it to words div
const words = document.querySelector(".words");
words.appendChild(p);

//just like event listener listens for clicks, this one listens to results.
recognition.addEventListener("results", e => {
    console.log(e);
});