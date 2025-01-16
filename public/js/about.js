// Get references to elements
const canvas2 = document.getElementById("aboutCanvas");
const content2 = document.getElementById("contentMain");
const ctx1 = canvas2.getContext("2d");

// Load a map image
const mapImage = new Image();
mapImage.src = 'https://via.placeholder.com/800x2000'; // Replace with your map image URL

// canvas2 properties
const canvasWidth = canvas2.width = 160;
const canvasHeight = canvas2.height = window.innerHeight;

// Scroll ratio
let mapHeight = 2000;  // Height of the map image (can be replaced with actual map height)

// Function to draw the map and the scroll indicator
function drawMap(scrollPosition) {
    // Clear the canvas2
    ctx1.clearRect(0, 0, canvasWidth, canvasHeight);

    // Draw the map image (scaled to fit the canvas2 height)
    ctx1.drawImage(mapImage, 0, 0, mapImage.width, mapHeight, 0, 0, canvasWidth, canvasHeight);

    // Calculate the scroll ratio (how much of the map should be visible)
    const scrollRatio = scrollPosition / (content2.scrollHeight - window.innerHeight);

    // The indicator (marker) that shows where the user is on the map
    const indicatorY = scrollRatio * canvasHeight;

    // Draw the indicator (a red circle) on the canvas2
    ctx1.fillStyle = "red";
    ctx1.beginPath();
    ctx1.arc(canvasWidth / 2, indicatorY, 10, 0, Math.PI * 2);
    ctx1.fill();
}

// Handle scroll event
content2.addEventListener("scroll", () => {
    const scrollPosition = content2.scrollTop;
    drawMap(scrollPosition);
});

// Draw the map initially once the image is loaded
mapImage.onload = function() {
    // Initialize the drawing based on initial scroll position
    drawMap(content2.scrollTop);
};

// Optional: Adjust canvas2 size based on window size changes
window.addEventListener('resize', () => {
    canvas2.height = window.innerHeight;
    drawMap(content2.scrollTop);
});