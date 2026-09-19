import { useEffect, useState, type RefObject } from "react";

/**
 * Tracks whether an element is (near) the viewport. Used to stop WebGL render
 * loops and video decoding for sections the user cannot see.
 */
const useInView = (
  ref: RefObject<Element | null>,
  rootMargin = "200px 0px"
) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return inView;
};

export default useInView;
