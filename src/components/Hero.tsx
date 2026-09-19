import { useEffect, useRef } from "react";
import useVideoInView from "../hooks/useVideoInView";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useVideoInView(videoRef);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  return (
    <section id="hero">
      <div className="">
        <h1 className="">Macbook Pro</h1>
        <img src="/title.webp" alt="Macbook Title" fetchPriority="high" />
      </div>
      <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />
      <button>Buy</button>
      <p className="">From $1599 or $133/mo for 12 months</p>
    </section>
  );
};

export default Hero;
