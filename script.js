const timer = document.getElementById("timer");
const startDate = new Date("2025-07-01T09:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = startDate - now;

  if (distance < 0) {
    timer.innerHTML = "Turnus już się rozpoczął!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
function updateCountdown() {
  const countdownElement = document.getElementById("timer");
  const eventDate = new Date("2025-05-26T17:00:00");
  const now = new Date();
  const difference = eventDate - now;

  if (difference <= 0) {
    countdownElement.innerHTML = "Camp już trwa!";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  countdownElement.innerHTML = `
    ${days} dni ${hours}h ${minutes}m ${seconds}s
  `;
}

setInterval(updateCountdown, 1000);
updateCountdown();
