import React, { useRef, useState, useEffect } from "react";
import "./App.css";

const songs = [
  {
    title: "Chill Vibes",
    artist: "Lo-fi Beats",
    src: "/assets/song1.mp3",
    cover: "/assets/cover1.jpg"
  },
  {
    title: "Night Drive",
    artist: "Synth Wave",
    src: "/assets/song2.mp3",
    cover: "/assets/cover2.jpg"
  }
];

function App() {

  const audioRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [search, setSearch] = useState("");
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);

  const currentSong = songs[currentIndex];

  // Play / Pause
  const playPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Next Song
  const nextSong = () => {
    setCurrentIndex((currentIndex + 1) % songs.length);
    setIsPlaying(false);
  };

  // Previous Song
  const prevSong = () => {
    setCurrentIndex(
      (currentIndex - 1 + songs.length) % songs.length
    );
    setIsPlaying(false);
  };

  // Auto next when song ends
  const handleEnd = () => {
    nextSong();
  };

  // Progress Update
  const updateProgress = () => {
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setProgress((current / duration) * 100);
  };

  // Seek
  const seek = (e) => {
    const width = e.target.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    const duration = audioRef.current.duration;

    audioRef.current.currentTime = (clickX / width) * duration;
  };

  // Volume
  const changeVolume = (e) => {
    const vol = e.target.value;
    audioRef.current.volume = vol;
    setVolume(vol);
  };

  // Filter songs
  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>🎵 Spotify</h2>
        <p>Home</p>
        <p>Search</p>
        <p>Library</p>
      </div>

      {/* Main */}
      <div className="main">

        <input
          className="search"
          placeholder="Search songs..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="song-list">
          {filteredSongs.map((song, index) => (
            <div
              key={index}
              className="song-card"
              onClick={() => setCurrentIndex(index)}
            >
              <img src={song.cover} alt="" />
              <h4>{song.title}</h4>
              <p>{song.artist}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Player Bar */}
      <div className="player-bar">

        {/* Song Info */}
        <div className="song-info">
          <img src={currentSong.cover} alt="" />
          <div>
            <p>{currentSong.title}</p>
            <span>{currentSong.artist}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="controls">
          <button onClick={prevSong}>⏮</button>
          <button onClick={playPause}>
            {isPlaying ? "⏸" : "▶"}
          </button>
          <button onClick={nextSong}>⏭</button>
        </div>

        {/* Progress */}
        <div className="progress-container" onClick={seek}>
          <div
            className="progress"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Volume */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={changeVolume}
        />

        <audio
          ref={audioRef}
          src={currentSong.src}
          onTimeUpdate={updateProgress}
          onEnded={handleEnd}
        />

      </div>

    </div>
  );
}

export default App;