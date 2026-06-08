function scrollToBooking() {
  document.getElementById("booking").scrollIntoView({
    behavior: "smooth"
  });
}

function sendBooking(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;

  document.getElementById("confirmation").innerText =
    `Grazie ${name}! Ti contatteremo presto per confermare il tuo appuntamento del ${date}.`;

  document.querySelector("form").reset();
}
