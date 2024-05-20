import { useRef, useState } from "react";
import "./App.css";

export const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef();
  return (
    <>
      <div className="videoplayer">
        <h1>VideoPlayer</h1>
        <video style={{ maxWidth: "100%" }} ref={videoRef}>
          <source src="./sample.mp4"></source>
        </video>
        <button
          onClick={() => {
            if (playing) {
              videoRef.current.pause();
            }
            if (!playing) {
              videoRef.current.play();
            }
            setPlaying((prev) => !prev);
          }}
        >
          {playing ? "stop" : "play"}
        </button>
      </div>
    </>
  );
};
