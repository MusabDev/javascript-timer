// Some variables
audio = new Audio("audio.mp3");
alerts = document.getElementById("alerts");

// Play audio function
function playAudio(audio) {
    audio.play();
}

// Stop audio function
function stopAudio(audio) {
    audio.pause();
    alerts.innerHTML = "<span class='text-success'>Timer stopped successfully.</span>";
    document.getElementById("stopTimer").innerHTML = "";
}

// Set timer function
function setTimer() {
    time = document.getElementById("time");
    if (time.value == "") {
        alerts.innerHTML = "<span class='text-danger'>Please enter a time.</span>";
    } else {
        alerts.innerHTML = "Setting timer for " + time.value + "...";
        timer = new Date(time.value);
        now = new Date();
        setTimeoutTime = timer - now;
        if (setTimeoutTime >= 0) {
            alerts.innerHTML = "<span class='text-success'>Timer set successfully.</span>";
            setTimeout(() => {
                // Play audio after finish the timer
                playAudio(audio);
                document.getElementById("stopTimer").innerHTML = '<button class="btn btn-danger" onclick="stopAudio(audio)">Stop Timer</button>';
            }, timer - now);
        } else {
            alerts.innerHTML = "<span class='text-danger'>Timer should be a future time.</span>";
        }
    }
}