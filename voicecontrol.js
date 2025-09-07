// voiceControl.js
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-IN';

recognition.onresult = function(event) {
    const command = event.results[0][0].transcript.toLowerCase();
    console.log('You said: ' + command);  // Just for testing, to see if speech is recognized

    // Command actions
    if (command.includes("youtube")) {
        window.open("https://www.youtube.com", "_blank");
    } else if (command.includes("calculator")) {
        window.location.href = "calculator.html"; 
    } else if (command.includes("expense tracker") || command.includes("expense") || command.includes("tracker")) {
        window.location.href = "Expense.html"; 
    } else if (command.includes("home") || command.includes("one click") || command.includes("main page") || command.includes("main")) {
        window.location.href = "index.html";
    }else if (command.includes("netflix")) {
        window.open("https://www.netflix.com", "_blank");
    }else if (command.includes("disney")) {
        window.open("https://www.disneyplus.com", "_blank")
    }else if (command.includes("amazon prime") || command.includes("prime")){
        window.open("https://www.primevideo.com", "_blank");
    }else if (command.includes("twitch")) {
        window.open("https://www.twitch.tv", "_blank");
    }else if (command.includes("entertainment")) {
        window.location.href = "Entertainment.html";
    }else if (command.includes("googleapps") || command.includes("google apps")) {
        window.location.href = "GoogleApps.html";
    }else if (command.includes("social media") || command.includes("social")) {
        window.location.href = "SocialMedia.html";
    }else if (command.includes("helpline") || command.includes("government") || command.includes("govi")) {
        window.location.href = "HelpLine.html";
    }else if ((command === "ai") || (command.includes(" a i ")) || (command.includes("tools"))) {
        window.location.href = "AI.html";;
    }else if (command.includes("gmail")) {
        window.open("https://mail.google.com/mail/u/0/", "_blank");
    }else if (command.includes("map") || command.includes("maps") || command.includes("googlemaps")) {
        window.open("https://maps.google.com", "_blank");
    }else if (command.includes("meet") || command.includes("googlemeet") || command.includes("google meet")) {
        window.open("https://meet.google.com/#", "_blank");
    }else if (command.includes("news") || command.includes("new") || command.includes("googlenews") || command.includes("google news")) {
        window.open("https://news.google.com", "_blank");
    }else if (command.includes("playstore") || command.includes("store")) {
        window.open("https://play.google.com/store/games", "_blank");
    }else if (command.includes("google") || command.includes("search")) {
        window.open("https://google.com", "_blank");
    }else if (command.includes("facebook") || command.includes("face book")) {
        window.open("https://www.facebook.com", "_blank");
    }else if (command.includes("instagram") || command.includes("insta") || command.includes("insta gram")) {
        window.open("https://instagram.com", "_blank");
    }else if (command.includes("linkedin") || command.includes("linked")) {
        window.open("https://in.linkedin.com", "_blank");
    }else if (command.includes("snapchat") || command.includes("snap")) {
        window.open("https://www.snapchat.com", "_blank");
    }else if (command.includes("x") || command.includes("ex") || command.includes("twitter") || command.includes("x app") || command.includes("axe")) {
        window.open("https://x.com", "_blank");
    }else if (command.includes("whatsapp") || command.includes("whats app")) {
        window.open("https://www.whatsapp.com", "_blank");
    }else if (command.includes("aadhar") || command.includes("adhar") || command.includes("aadhar card")) {
        window.open("https://myaadhaar.uidai.gov.in/genricDownloadAadhaar/en", "_blank");
    }else if (command.includes("blooddonation") || command.includes("blood donation") || command.includes("erakt")) {
        window.open("https://eraktkosh.mohfw.gov.in/eraktkoshPortal/#/", "_blank");
    }else if (command.includes("cybercrime") || command.includes("cyber crime")) {
        window.open("https://cybercrime.gov.in", "_blank");
    }else if (command.includes("digilocker") || command.includes("digi locker")) {
        window.open("https://digilocker.gov.in", "_blank");
    }else if (command.includes("driving licence") || command.includes("drivinglicence") || command.includes("parivahan") || command.includes("licence")) {
        window.open("https://parivahan.gov.in", "_blank");
    }else if (command.includes("pan") || command.includes("pancard") || command.includes("pan card") || command.includes("apply for pan")) {
        window.open("https://onlineservices.proteantech.in/paam/endUserRegisterContact.html", "_blank");
    }else if (command.includes("passport") || command.includes("pass port")) {
        window.open("https://www.passportindia.gov.in", "_blank");
    }else if (command.includes("a i video") || command.includes("videomaker") || command.includes("video maker") || command.includes("veed")) {
        window.open("https://www.veed.io", "_blank");
    }else if (command.includes("gemini")) {
        window.open("https://gemini.google.com", "_blank");
    }else if (command.includes("chatgpt") || command.includes("gpt") || command.includes("chat gpt") || command.includes("chat")) {
        window.open("https://chatgpt.com/", "_blank");
    }else if (command.includes("m d college") || command.includes("college") || command.includes("m d")) {
        window.open("https://mdcollege.in/", "_blank");
    }else if (command.includes("deadshot") || command.includes("dead shot") || command.includes("shot")) {
        window.open("https://deadshot.io/", "_blank");
    }else if (command.includes("mumbaiuniversity") || command.includes("mumbai university") || command.includes("university") ) {
        window.open("https://mu.samarth.edu.in/", "_blank");
    }
    
};

recognition.onerror = function(event) {
    const errorBox = document.getElementById("micError");
    errorBox.textContent = "Oops! Didn't catch that 🎤 (" + event.error + ")";
    errorBox.classList.add("show");

    // Hide after 3 seconds
    setTimeout(() => {
        errorBox.classList.remove("show");
    }, 3000);
};

   


// Start listening
function startListening() {
    recognition.start();
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        startListening();
    }

    if (event.ctrlKey && event.key === "F1") {
        event.preventDefault(); 
        startListening();
    }

    if (event.key === "Q" && event.shiftKey) {
        event.preventDefault();
        startListening();
    }
});