"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Loading() {
  return (
    <div className="max-w-7xl h-screen mx-auto flex justify-center items-center">
      <DotLottieReact
        src="/loading.json"
        loop
        style={{ width: "400px", height: "auto" }}
      />
    </div>
  );
}
