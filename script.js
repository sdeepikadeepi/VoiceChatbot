function getTime(){
let now = new Date();
return now.toLocaleTimeString();
}

function startListening() {

const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new SpeechRecognition();

recognition.lang = "en-US";

recognition.onresult = function(event) {

let text = event.results[0][0].transcript;
let chatbox = document.getElementById("chatbox");

chatbox.innerHTML += `
<p class="user">
<b>You 😊:</b> ${text}
<span>${getTime()}</span>
</p>`;

let reply = "";

text = text.toLowerCase();

if(text.includes("hello")){
reply = "Hello dear 😊";
}
else if(text.includes("name")){
reply = "I am your female chatbot 👩";
}
else{
reply = "Please say again 😔";
}

chatbox.innerHTML += `
<p class="bot typing">
<b>Bot 🤖:</b> Typing...
</p>`;

setTimeout(function(){

document.querySelector(".typing").remove();

chatbox.innerHTML += `
<p class="bot">
<b>Bot 🤖:</b> ${reply}
<span>${getTime()}</span>
</p>`;

let speech = new SpeechSynthesisUtterance(reply);
speech.pitch = 1.8;
speech.rate = 1;
speechSynthesis.speak(speech);

chatbox.scrollTop = chatbox.scrollHeight;

},1000);

};

recognition.start();
}

function clearChat(){
document.getElementById("chatbox").innerHTML = "";
}