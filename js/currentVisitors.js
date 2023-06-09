document.addEventListener("DOMContentLoaded", function() {
    var visitorCountElement = document.getElementById("visitorCount");

    // Update visitor count every 5 seconds
    setInterval(function() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "php/currentVisitors.php", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                var visitorCount = xhr.responseText;
                visitorCountElement.textContent = visitorCount;
            }
        };
        xhr.send();
    }, 5000);
});
