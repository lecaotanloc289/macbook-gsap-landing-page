import { useEffect, type RefObject } from "react";
import useInView from "./useInView";

/** Plays a muted video only while it is on screen, so offscreen videos stop decoding. */
const useVideoInView = (ref: RefObject<HTMLVideoElement | null>) => {
  const inView = useInView(ref, "0px");

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (inView) {
      // A finished one-shot video (hero intro) must not restart on scroll-back.
      if (video.ended && !video.loop) return;
      // Autoplay can be rejected (e.g. low-power mode); nothing to recover.
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView, ref]);
};

export default useVideoInView;
