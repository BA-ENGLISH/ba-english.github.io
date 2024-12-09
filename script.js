document.addEventListener('DOMContentLoaded', function() {
    // Check if the popup should be shown (true) or not (false)
    var showPopup = false; // Change this to false to not show the popup

    if (showPopup) {
        var popupContainer = document.getElementById('popup-container');
        var popupTimer = document.getElementById('popup-timer');
        var popupClose = document.getElementById('popup-close');
        var countdown = 5;
        var countdownInterval;

        // Show the popup
        popupContainer.style.display = 'block';

        // Update the timer every second
        countdownInterval = setInterval(function() {
            countdown--;
            popupTimer.textContent = countdown;
            if (countdown <= 0) {
                clearInterval(countdownInterval);
                popupContainer.style.display = 'none';
            }
        }, 1000);

        // Close the popup when the close icon is clicked
        popupClose.addEventListener('click', function() {
            clearInterval(countdownInterval);
            popupContainer.style.display = 'none';
        });
    }
});