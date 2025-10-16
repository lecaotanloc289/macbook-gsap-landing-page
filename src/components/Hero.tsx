import React, { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  return (
    <section id="hero">
      <div className="">
        <h1 className="">Macbook Pro</h1>
        <img src="/title.png" alt="Macbook Title" />
      </div>
      <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />
      <button>Buy</button>
      <p className="">From $1599 or $133/mo for 12 months</p>
    </section>
  );
};

export default Hero;
