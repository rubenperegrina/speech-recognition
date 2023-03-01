const textArea = document.getElementById('text-area');

const recognition = new webkitSpeechRecognition();

recognition.continuous = true;
recognition.lang = 'es-ES';
recognition.interimResult = false;

recognition.start();

recognition.onresult = (event) => {
    const text = event.results[event.results.length - 1][0].transcript;
    textArea.value = text;
    readText(text);
}

function readText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.volume = 1;
    speech.rate = 0.7;
    speech.pitch = 0.4;
    speech.lang = 'es-ES'

    window.speechSynthesis.speak(speech);
}