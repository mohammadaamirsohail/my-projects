console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("Myprogressbar");
let gif = document.getElementById("gif");
let songitem = Array.from(document.getElementsByClassName('songitem'));
let totalSongs = 7;

// Array of songs
let songs = [
    { songName: "Let me love you", filePath: "songs/1.mp3", coverPath: "cover/1.jpg" },
    { songName: "Kismat", filePath: "songs/2.mp3", coverPath: "cover/2.jpg" },
    { songName: "Tum jo kah do", filePath: "songs/3.mp3", coverPath: "cover/3.jpg" },
    { songName: "Memories", filePath: "songs/4.mp3", coverPath: "cover/4.jpg" },
    { songName: "Senorita", filePath: "songs/5.mp3", coverPath: "cover/5.jpg" },
    { songName: "Salooq", filePath: "songs/6.mp3", coverPath: "cover/6.jpg" },
    { songName: "Sach kah raha hai deewana", filePath: "songs/7.mp3", coverPath: "cover/7.jpg" }
];

// Populate song items dynamically
songitem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

// Function to reset all play buttons
const makeallplays = () => {
    Array.from(document.getElementsByClassName("songest")).forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-circle-play");
    });
};

// Masterplay click event
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

        // Update the play button for the current song
        const currentSongButton = document.getElementById(id.toString());
        if (currentSongButton) {
            currentSongButton.classList.remove("fa-circle-play");
            currentSongButton.classList.add("fa-pause-circle");
        }
    } else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

        // Reset the play button for the current song
        const currentSongButton = document.getElementById(songIndex.toString());
        if (currentSongButton) {
            currentSongButton.classList.remove("fa-pause-circle");
            currentSongButton.classList.add("fa-circle-play");
        }
    }
});

// Progress bar update
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;
});

// Seek functionality
myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
});

// Individual song click event
Array.from(document.getElementsByClassName("songest")).forEach((element) => {
    element.addEventListener("click", (e) => {
        songIndex = parseInt(e.target.id); // Get the clicked song's index
        makeallplays(); // Reset all play buttons
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-pause-circle");

        // Load and play the selected song
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();

        // Update masterplay state
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
    });
});

// Previous button functionality
document.getElementById("previous").addEventListener("click", () => {
    songIndex = (songIndex - 1 + totalSongs) % totalSongs; // Wrap-around logic
    makeallplays();
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();

    // Sync buttons
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-pause-circle');
    document.getElementById(songIndex.toString()).classList.remove("fa-circle-play");
    document.getElementById(songIndex.toString()).classList.add("fa-pause-circle");
});

// Next button functionality
document.getElementById("next").addEventListener("click", () => {
    songIndex = (songIndex + 1) % totalSongs; // Wrap-around logic
    makeallplays();
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();

    // Sync buttons
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-pause-circle');
    document.getElementById(songIndex.toString()).classList.remove("fa-circle-play");
    document.getElementById(songIndex.toString()).classList.add("fa-pause-circle");
});
