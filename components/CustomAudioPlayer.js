import Image from 'next/image';
import React, { useRef, useState } from 'react';

const CustomAudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Play/Pause Toggle
  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  // Update Progress
  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    setCurrentTime(audio.currentTime);
  };

  // Format time in mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  // Handle Audio Loaded Metadata
  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    setDuration(audio.duration);
  };

  // Seek Functionality
  const handleSeek = (e) => {
    const audio = audioRef.current;
    const seekTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  return (
    <div className="flex items-center space-x-3 px-2 py-1 rounded-3xl bg-[#222222] text-white w-full max-w-xl">
      {/* Play/Pause Button */}
      <button
        className="text-xl rounded-full focus:outline-none"
        onClick={togglePlayPause}
      >
        {isPlaying ? <Image src={"/pause.png"} alt={"play"} height={10} width={16} unoptimized /> : <Image src={"/play.png"} alt={"play"} height={10} width={10} unoptimized />}
      </button>

      {/* Time Progress Display */}
      <div className="text-sm">{formatTime(currentTime)}</div>

      {/* Progress Bar */}
      <input
        type="range"
        className="flex-grow h-1 rounded-lg cursor-pointer"
        value={(currentTime / duration) * 100 || 0}
        onChange={handleSeek}
        style={{ accentColor: '#fff' }} // Change slider color
      />

      {/* Total Duration */}
      <div className="text-sm">{formatTime(duration)}</div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        className="hidden"
      />
    </div>
  );
};

export default CustomAudioPlayer;
