"use client";

import { DotLottie, DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useRef, useState } from "react";

import Icon from "../Common/Icon";
import PauseIcon from "@/icons/pause.svg";
import PlayIcon from "@/icons/play.svg";
import { useBreakpoints } from "@/utils/useBreakpoints";

type PlayerProps = {
  src: string;
};

export default function Player({ src }: PlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lottieRefLeft = useRef<DotLottie | null>(null);
  const lottieRefRight = useRef<DotLottie | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const { down } = useBreakpoints();

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      lottieRefLeft.current?.pause();
      lottieRefRight.current?.pause();
    } else {
      audioRef.current.play();
      lottieRefLeft.current?.play?.();
      lottieRefRight.current?.play?.();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop />

      {down("xl") ? (
        isPlaying ? (
          <>
            <Icon title="Pause" icon="PlayerPause" onClick={togglePlay} />
          </>
        ) : (
          <>
            <Icon title="Start" icon="PlayerStart" onClick={togglePlay} />
          </>
        )
      ) : (
        <div className="absolute top-16 left-1 z-10 xl:flex items-center justify-center">
          <div
            className={`
transition-opacity duration-500 ease-in-out pointer-events-none
}
`}
          >
            <DotLottieReact
              src="https://lottie.host/a41fb4d1-83ce-49c1-82f7-037b5cbce400/1CYytftFjL.lottie"
              loop
              autoplay={false}
              speed={0.5}
              dotLottieRefCallback={(instance) => {
                lottieRefLeft.current = instance;
              }}
              className="w-60 h-auto pointer-events-none"
            />
          </div>
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
            className="absolute w-10 h-10 rounded-full border border-[#D9D9D9] bg-white flex items-center justify-center hover:scale-105 transition"
          >
            {isPlaying ? (
              <PauseIcon className="w-auto h-4 invert brightness-100" />
            ) : (
              <PlayIcon className="w-auto h-4 pl-0.5 invert brightness-100" />
            )}
          </button>
          <div
            className={`transition-opacity duration-500 ease-in-out pointer-events-none}`}
          >
            <DotLottieReact
              src="https://lottie.host/a41fb4d1-83ce-49c1-82f7-037b5cbce400/1CYytftFjL.lottie"
              loop
              autoplay={false}
              speed={0.5}
              dotLottieRefCallback={(instance) => {
                lottieRefRight.current = instance;
              }}
              className="w-60 h-auto pointer-events-none scale-x-[-1]"
            />
          </div>
        </div>
      )}
    </>
  );
}
