// Elements
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const speakBtn = document.querySelector("#speak");

// Speech recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// SR start
recognition.onstart = function() {
    console.log("vr active");
    stopBtn.style.display = "block";
    startBtn.style.display = "none";
};

recognition.onresult = function(event) {
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;
    
    transcript = transcript.toLowerCase();
    console.log(`chinnu: ${transcript}`);
    
    if (transcript.includes("hello")) {
        readOut("hello sir welcome to Chinnu jarvis ");
        console.log("hello sir");
    }
    if (transcript.includes("who are you")) {
        readOut("hello sir welcome to chinnu jarvis vitual assistance! . I’m JARVIS your personal virtual assistant designed to web browsing easier and smarter.");
        console.log("hello sir");
    }
    if (transcript.includes("audible")) {
        readOut("yeah, sir you are audible to me");
    }
    if (transcript.includes("morning")) {
        readOut("very good morning sir ! have a beautiful day");
    }
    if (transcript.includes("afternoon") || transcript.includes("after noon")) {
        readOut("very good after noon sir ! have a beautiful after noon");
    }
    if (transcript.includes("evening")) {
        readOut("very good evening sir ! have a wonderful evening sir");
    }
    if (transcript.includes("thanks") || transcript.includes("thank")) {
        readOut("It's ok sir!");
    }
    if (transcript.includes("how are you") || transcript.includes("how areyou")) {
        readOut("I am fine sir");
    }
    if (transcript.includes("open youtube")) {
        readOut("opening youtube sir");
        window.open("https://www.youtube.com/");
    }
    if (transcript.includes("open instagram")) {
        readOut("opening instagram sir");
        window.open("https://www.instagram.com/");
    }
    if (transcript.includes("open facebook")) {
        readOut("opening facebook sir");
        window.open("https://www.facebook.com/");
    }
    if (transcript.includes("open twitter")) {
        readOut("opening twitter sir");
        window.open("https://www.twitter.com/");
    }
    if (transcript.includes("open whatsapp")) {
        readOut("opening whatsapp sir");
        window.open("https://web.whatsapp.com/");
    }
    if (transcript.includes("open git")) {
        readOut("opening github sir");
        window.open("https://github.com/");
    }
    if (transcript.includes("open linkedin")) {
        readOut("opening linkedin sir");
        window.open("https://www.linkedin.com/");
    }
    if (transcript.includes("open movies") || transcript.includes("watch movies")) {
        readOut("opening movies sir");
        window.open("https://men.ibomma.bond/");
    }
    if (transcript.includes("open hacker rank") || transcript.includes("open hackerrank")) {
        readOut("opening Hacker rank sir");
        window.open("https://www.hackerrank.com/dashboard/");
    }
    if (transcript.includes("open music") || transcript.includes("play music")) {
        readOut("opening music sir");
        window.open("https://wynk.in/");
    }
    if (transcript.includes("open chatbot") || transcript.includes("open chat bot")) {
        readOut("opening chat GPT sir");
        window.open("https://chat.openai.com/");
    }
    if (transcript.includes("open google")) {
        readOut("opening google sir");
        window.open("https://www.google.com/");
    }
    if (transcript.includes("open my favorite song")) {
        readOut("opening favorite song");
        window.open("https://wynk.in/music/song/unstoppable/sm_A10328E0007615859P?q=unst");
    }
    if (transcript.includes("search in google")) {
        readOut("here is result");
        let input = transcript.split("");
        input.splice(0, 17);
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log(input);
        window.open(`https://www.google.com/search?q=${input}`);
    }
    if (transcript.includes("search in youtube")) {
        readOut("here is result");
        let input = transcript.split("");
        input.splice(0, 17);
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log(input);
        window.open(`https://www.youtube.com/search?q=${input}`);
    }
    if (transcript.includes("open leet code") || transcript.includes("open leetcode") || transcript.includes("open lead code")){
        readOut("opening leet code sir");
        window.open("https://leetcode.com/");
    }
    if (transcript.includes("open our site")) {
        readOut("opening our site sir");
        window.open("https://sites.google.com/view/virtual-assistance-javascript");
    }
    
};

// SR stop
recognition.onend = function() {
    console.log("vr deactive");
    stopBtn.disabled = true;
    startBtn.disabled = false;
};
recognition.continuous = true;

startBtn.addEventListener("click", () => {
    recognition.start();
    startBtn.disabled = true;
    stopBtn.disabled = false;
});
stopBtn.addEventListener("click", () => {
    recognition.stop();
    stopBtn.disabled = true;
    startBtn.disabled = false;
});

function readOut(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
    console.log("speaking out");
}

// Example
speakBtn.addEventListener("click", () => {
    readOut("hii welcome to ChinnuJarvis");
});

// On load
window.onload = function() {
    readOut("   ");
};
