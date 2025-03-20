// BeatCrafter - Example Code
// Demonstrating skills from Unit 0

// 1. Values, Data Types, and Operations
let bpm = 120; // Stores beats per minute (number data type)
let beatName = "Chill Vibes"; // Stores the name of the beat (string data type)
console.log("Now playing: " + beatName + " at " + bpm + " BPM.");

// 2. Stringing Characters Together
let artistName = "Justin";
let trackMessage = "Track created by " + artistName + ". Enjoy the beat!";
console.log(trackMessage);

// 3. Control Structures and Logic
if (bpm >= 60 && bpm <= 200) {
    console.log("Valid BPM. Playing beat...");
} else {
    console.log("Error: BPM out of range.");
}

// 4. Working with Loops
// A loop to play a simple beat sequence (1 represents a drum hit, 0 represents silence)
let beatPattern = [1, 0, 1, 0, 1, 1, 0, 1];
console.log("Playing beat sequence:");
for (let i = 0; i < beatPattern.length; i++) {
    if (beatPattern[i] === 1) {
        console.log("Hit! 🎵");
    } else {
        console.log("Rest...");
    }
}

// 5. Building Arrays
let soundLibrary = ["Kick", "Snare", "Hi-hat", "Clap"];
console.log("Available sounds:", soundLibrary);

// 6. Using Arrays
// Adding a new sound to the library
soundLibrary.push("Crash Cymbal");
console.log("Updated Sound Library:", soundLibrary);

// Removing a sound
soundLibrary.splice(2, 1); // Removes "Hi-hat"
console.log("After removing Hi-hat:", soundLibrary);