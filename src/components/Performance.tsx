import { useMediaQuery } from "react-responsive";
import { performanceImages, performanceImgPositions } from "../constants";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Performance = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      // Text Animation
      gsap.fromTo(
        ".content p",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".content p",
            start: "top bottom",
            end: "top center",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      if (isMobile) return;

      // Image Positioning Timeline
      const tl = gsap.timeline({
        defaults: { duration: 2, ease: "power1.inOut", overwrite: "auto" },
        scrollTrigger: {
          trigger: sectionEl,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Position Each Performance Image. Target left/right/bottom percentages are
      // converted to x/y translations so scrubbing only composites instead of
      // re-running layout every frame. offset* ignore transforms, so the deltas
      // stay correct when invalidateOnRefresh recomputes them after a resize.
      const wrapper = sectionEl.querySelector<HTMLElement>(".wrapper");
      if (!wrapper) return;

      performanceImgPositions.forEach((item) => {
        if (item.id === "p5") return;

        const img = wrapper.querySelector<HTMLElement>(`.${item.id}`);
        if (!img) return;

        const vars: gsap.TweenVars = {};
        const { left, right, bottom } = item as {
          left?: number;
          right?: number;
          bottom?: number;
        };

        if (typeof left === "number") {
          vars.x = () => (left / 100) * wrapper.clientWidth - img.offsetLeft;
        } else if (typeof right === "number") {
          vars.x = () =>
            wrapper.clientWidth -
            img.offsetLeft -
            img.offsetWidth -
            (right / 100) * wrapper.clientWidth;
        }

        if (typeof bottom === "number") {
          vars.y = () =>
            wrapper.clientHeight -
            img.offsetTop -
            img.offsetHeight -
            (bottom / 100) * wrapper.clientHeight;
        }

        tl.to(img, vars, 0);
      });
    },
    { scope: sectionRef, dependencies: [isMobile] }
  );

  return (
    <section id="performance" ref={sectionRef}>
      <h2>Next-level graphics performance. Game on.</h2>
      <div className="wrapper">
        {performanceImages.map(({ id, src }, index) => (
          <img
            key={id}
            src={src}
            alt={id || `Performance Image #${index + 1}`}
            className={id}
          />
        ))}
      </div>
      <div className="content">
        <p>
          Run graphics-intensive workflows with a responsiveness that keeps up
          with your imagination. The M4 family of chips features a GPU with a
          second-generation hardware-accelerated ray tracing engine that renders
          images faster, so{" "}
          <span className="text-white">
            gaming feels more immersive and realistic than ever.
          </span>{" "}
          And Dynamic Caching optimizes fast on-chip memory to dramatically
          increase average GPU utilization — driving a huge performance boost
          for the most demanding pro apps and games.
        </p>
      </div>
    </section>
  );
};

export default Performance;
