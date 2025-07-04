function countdown() {
    const targetDate = new Date("2025-12-31T23:59:59");
    const now = new Date();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "Countdown finished!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    setTimeout(countdown, 1000);
}

countdown();