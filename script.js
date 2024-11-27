// This script controls the interaction with the "emulator"

function startEmulator() {
    const screen = document.getElementById("screen");
    screen.innerHTML = "<p>Emulator Running...</p>";

    // Simulate loading of emulator
    setTimeout(() => {
        screen.innerHTML = "<p>Welcome to MSX Emulator</p>";
    }, 2000);  // Simulate the loading screen for 2 seconds
}
