function toggleEnvelope() {
  var envelope = document.getElementById("envelope");
  var card = document.getElementById("card");
  
  if (envelope.classList.contains("open")) {
    envelope.classList.remove("open");
    card.style.display = "block";
  } else {
    envelope.classList.add("open");
    card.style.display = "none";
  }
}
