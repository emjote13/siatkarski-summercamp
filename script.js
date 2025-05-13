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
