import { Slider } from "antd";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

export default function Player() {
  const track = {
    image: "https://picsum.photos/100",
    name: "Волки",
    artistName: "Илья Сильчуков",
    src: "demo.m4a",
  };

  const secToTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const strMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const strSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${strMinutes}:${strSeconds}`;
  };

  const [player, setPlayer] = useState({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
  });
  const audioComponent = useRef();

  const handleTimeUpdate = (e) => {
    const seconds = e.target.currentTime;
    const newPlayer = { ...player, currentTime: seconds };
    if (seconds === player.duration) {
      newPlayer.isPlaying = false;
    }
    setPlayer(newPlayer);
  };

  const handleMetadataUpdate = (e) => {
    const seconds = e.target.duration;
    setPlayer({ ...player, duration: seconds });
  };

  const handleSliderChange = (value) => {
    const currentTime = (player.duration * value) / 100;
    setPlayer({ ...player, currentTime: currentTime });
    audioComponent.current.currentTime = currentTime;
  };

  const handlePlayPause = () => {
    if (player.isPlaying) {
      audioComponent.current.pause();
    } else {
      audioComponent.current.play();
    }
    setPlayer({ ...player, isPlaying: !player.isPlaying });
  };

  return (
    <div className="flex items-center justify-center bg-grey p-5 rounded-xl max-w-fit">
      <audio
        src={track.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleMetadataUpdate}
        ref={audioComponent}
      />
      <Image
        src={track.image}
        alt="Song Image"
        className="rounded-xl"
        width={100}
        height={100}
      />

      <div className="flex flex-col items-left justify-center ml-3">
        <h3 className="text-2xl font-bold text-white">{track.name}</h3>
        <h4 className="text-xl font-normal text-gray-300">
          {track.artistName}
        </h4>
        <div className="flex items-left justify-center align-middle items-center">
          <p className="text-white text-sm tabular-nums">
            {secToTime(player.currentTime)}
          </p>
          <div className="w-36 pr-2 pl-2">
            <Slider
              defaultValue={0}
              max={100}
              tooltip={{ open: false }}
              onChange={handleSliderChange}
              value={(player.currentTime / player.duration) * 100}
            />
          </div>
          <p className="text-white text-sm mr-2 tabular-nums">
            {secToTime(player.duration)}
          </p>
          <button className="mr-2" onClick={handlePlayPause}>
            {player.isPlaying ? (
              <FaPauseCircle className="text-white text-3xl" />
            ) : (
              <FaPlayCircle className="text-white text-3xl" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
