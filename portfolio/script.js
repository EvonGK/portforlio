// window.onload = function() {
//     var profileImg = document.querySelector('.profile-img');
//     var rotation = 0;
//     var totalRotation = 360; // Total rotation in degrees
//     var intervalDuration = 100; // 10 seconds
//     var framesPerSecond = 60; // Number of frames per second for smoother animation
//     var rotationIncrement = totalRotation / (intervalDuration / 1000 * framesPerSecond); // Incremental rotation in degrees per frame
//     var rotationInterval; // Variable to store the interval reference

//     // Function to rotate the profile image clockwise
//     function rotateImage() {
//         rotation += rotationIncrement;
//         if (rotation >= totalRotation) {
//             clearInterval(rotationInterval);
//             rotation = totalRotation; // Ensure the rotation stops exactly at 360 degrees
//         }
//         profileImg.style.transform = 'rotate(' + rotation + 'deg)';
//     }

//     // Start rotating the profile image
//     rotationInterval = setInterval(rotateImage, 1000 / framesPerSecond);
// };
