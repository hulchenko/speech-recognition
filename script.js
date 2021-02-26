window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; //global variable that lives in browser. First one is for Firefox, second one is for Chrome.

const recognition = new SpeechRecognition();
recognition.interimResults = true; //for browser to differentiate speech pauses

let p = document.createElement("p"); //create p element and append it to words div
const words = document.querySelector(".words");
words.appendChild(p);

//just like event listener listens for clicks, this one listens to result.
recognition.addEventListener("result", e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join("")
     //inside of event, that pops up in console, there will be results/0/0/SpeechRecognitionAlternative and a transcript, stating words that were just said, along with confidence % in the output.
     //it's nested very deeply, so mapping occurs twice, with joining it together 

     p.textContent = transcript; //append results to p element
     if (e.results[0].isFinal) {
         p = document.createElement("p"); //create a new p element, every time person speaks, as the default setting was overwriting the existing.
         words.appendChild(p);
     }
});

//after short pause even stops listening, as user stops speaking. We will run another even listener on the end of previous one, looping the function again and again.
recognition.addEventListener("end", recognition.start);
recognition.start();