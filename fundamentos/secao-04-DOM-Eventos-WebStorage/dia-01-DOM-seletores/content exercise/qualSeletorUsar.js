const header = document.getElementById("header-container");
const emergency = document.getElementsByClassName("emergency-tasks")[0];
const subtitleEmergency = document.querySelectorAll(".emergency-tasks h3");
const noEmergency = document.getElementsByClassName("no-emergency-tasks")[0];
const subtitleNoEmergency = document.querySelectorAll(".no-emergency-tasks h3");
const footer = document.getElementById("footer-container");

function AddStyles() {
    header.style.backgroundColor = "#00B069";
    emergency.style.backgroundColor = "#FF9F84";
    subtitleEmergency[0].style.backgroundColor = "#A500F3";
    subtitleEmergency[1].style.backgroundColor = "#A500F3";
    noEmergency.style.backgroundColor = "#F9DB5E";
    subtitleNoEmergency[0].style.backgroundColor = "#232525";
    subtitleNoEmergency[1].style.backgroundColor = "#232525";
    footer.style.backgroundColor = "#003533";
}

AddStyles();
