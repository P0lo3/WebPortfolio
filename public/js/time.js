function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero to minutes and seconds if less than 10
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Format time as HH:MM:SS
    const currentTime = hours + ':' + minutes + ':' + seconds;

    // Display time in the "time" div
    document.getElementById('time').textContent = currentTime;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();