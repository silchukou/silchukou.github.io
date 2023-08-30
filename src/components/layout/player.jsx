import { Skeleton, Slider } from "antd";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { getBannerSong } from "../../services/sanity";
import { LocaleContext } from "../../contexts/locale";

export default function Player() {
  const { locale } = useContext(LocaleContext);
  const [loading, setLoading] = useState(true);

  const [track, setTrack] = useState({});

  useEffect(() => {
    setLoading(true);
    getBannerSong()
      .then((data) => {
        setLoading(false);
        setTrack(data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
    <>
      <div className="flex items-center justify-center bg-grey p-5 rounded-xl max-w-fit">
        <audio
          src={track?.song_url}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleMetadataUpdate}
          ref={audioComponent}
        />
        {!loading && (
          <Image
            src={track?.image_url}
            alt="Song Image"
            className="rounded-xl"
            width={100}
            height={100}
          />
        )}
        {loading && (
          <Skeleton.Image
            style={{ width: 100, marginBottom: 4 }}
            className="rounded-xl"
            active={true}
          />
        )}

        <div className="flex flex-col items-left justify-center ml-3">
          {!loading && (
            <h3 className="text-2xl font-bold text-white">
              {track[locale + "_name"]}
            </h3>
          )}
          {loading && (
            <Skeleton.Input
              style={{
                width: 200,
                height: 32,
              }}
              active={true}
              size="small"
            />
          )}
          {!loading && (
            <h4 className="text-xl font-normal text-gray-300">
              {track[locale + "_artistName"]}
            </h4>
          )}
          {loading && (
            <Skeleton.Input
              className="mt-1"
              style={{ width: 160, height: 20 }}
              active={true}
              size="small"
            />
          )}
          <div className="flex items-left justify-center align-middle items-center">
            {!loading && (
              <p className="text-white text-sm tabular-nums">
                {secToTime(player.currentTime)}
              </p>
            )}
            {loading && (
              <Skeleton
                paragraph={false}
                className="mt-1 mb-1"
                style={{ width: 35, height: 10 }}
                active={true}
                size="small"
              />
            )}
            <div className="w-20 sm:w-36 pr-2 pl-2">
              <Slider
                defaultValue={0}
                max={100}
                tooltip={{ open: false }}
                onChange={handleSliderChange}
                value={(player.currentTime / player.duration) * 100}
                disabled={loading}
              />
            </div>
            {!loading && (
              <p className="text-white text-sm mr-2 tabular-nums">
                {secToTime(player.duration)}
              </p>
            )}
            {loading && (
              <Skeleton
                paragraph={false}
                className="mt-1 mr-2"
                style={{ width: 35, height: 10 }}
                active={true}
                size="small"
              />
            )}
            <button
              className="mr-2"
              onClick={handlePlayPause}
              disabled={loading}
            >
              {player.isPlaying ? (
                <FaPauseCircle className="text-white text-3xl" />
              ) : (
                <FaPlayCircle className="text-white text-3xl" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
