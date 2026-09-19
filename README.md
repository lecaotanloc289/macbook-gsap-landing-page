<div align="center">
  <br />
    <a href="https://macbook.lecaotanloc.dev" target="_blank">
      <img src="public/readme.png" alt="Project Banner">
    </a>
  <br />

  <div>
<img src="https://img.shields.io/badge/-React-58C4DC?style=for-the-badge&logo=React&logoColor=white" />
<img src="https://img.shields.io/badge/-GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" />
<img src="https://img.shields.io/badge/-Three.js-27136A?style=for-the-badge&logo=three.js&logoColor=white" />
<img src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
<img src="https://img.shields.io/badge/-CodeRabbit-FF6C37?style=for-the-badge&logo=visual-studio-code&logoColor=white" />
<img src="https://img.shields.io/badge/-Cloudflare_Workers-F38020?style=for-the-badge&logo=cloudflare&logoColor=white" />


  </div>

  <h3 align="center">Apple MacBook Landing Page Website</h3>

   
</div>

## <a name="table">Table of Contents </a>


- [Table of Contents ](#table-of-contents-)
- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [ Quick Start](#-quick-start)

## <a name="tech-stack">Introduction</a>
Apple-style 3D website built with React, Three.js GSAP, and TailwindCSS! This is a project I have learn from a Youtube Chanel - JS Mastery. In this project showcase products in immersive 3D scenes, scroll-animated models, and pinned sections. Featuring responsive design, smooth timeline animations, and visually striking image transitions-perfect for developers creating interactive, modern web experiences.

If you're getting started and need assistance or face any bugs. Please contact me, or watching this tutorial to help you find out your problem.
<a href="https://youtu.be/DEeaT6FxEws" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a>


## <a name="tech-stack">Tech Stack</a>
- **[CodeRabbit](https://jsm.dev/mbook-coderabbit)** is an AI-powered code review tool that integrates with Git platforms such as GitHub and Git CLI. It provides real-time, context-aware feedback on pull requests, including line-by-line analysis, security vulnerability detection, and adherence to coding standards. CodeRabbit adapting its reviews over time to enhance code quality and developer productivity.

- **[GSAP](https://gsap.com/)** is a powerful JavaScript animation library used in this project to create dynamic, scroll-driven visuals. Features include SplitText animations for bold text reveals, ScrollTrigger for timeline control, parallax scrolling, pinned sections, scroll-synced video playback, seamless multi-section timelines, image masking effects, and a fully custom animated carousel.

- **[Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/)** serves the built site as static assets on Cloudflare's global network. This project is live at [macbook.lecaotanloc.dev](https://macbook.lecaotanloc.dev).

- **[React](https://react.dev/)** is a declarative JavaScript library for building interactive UIs. It provides the component structure for modular development, allowing smooth integration of GSAP animations, reusable logic for scroll behavior, and support for responsive layout and state-driven UI features like carousels and video sections.

- **[Tailwind CSS](https://tailwindcss.com/)** is a utility-first CSS framework that allows developers to design custom user interfaces by applying low-level utility classes directly in HTML, streamlining the design process.

- **[Three.js](https://threejs.org/)** is a powerful JavaScript 3D library used in this project to render interactive 3D graphics in the browser. Features include WebGL-based rendering, support for cameras, lights, and materials, 3D model importing, geometry and texture manipulation, scene graph management, animation capabilities, raycasting for interactivity, and integration with physics and post-processing effects for immersive experiences.

- **[Vite](https://vitejs.dev/)** is a lightning-fast build tool and development server that powers this project’s workflow. It enables instant hot module replacement, fast startup, and optimized production builds—ideal for an animation-heavy React site with smooth, real-time development feedback and minimal config.

- **[Zustand](https://zustand-demo.pmnd.rs/)** is a lightweight and flexible state management library for React. In this project, it’s used to manage global state efficiently, enabling reactive updates with minimal boilerplate. Features include simple store creation, easy state slicing, middleware support for logging and persistence, seamless integration with React components, and performant state updates without unnecessary re-renders.

## <a name="features">Features</a>

- **3D Product Scene with Realistic Lighting System**: Showcase products in lifelike 3D environments for maximum visual impact.

- **Animate 3D Model on Scroll**: Create immersive interactions by animating 3D models based on user scroll position.

- **ScrollTrigger Effects**: Power scroll-based animations and timeline control with GSAP’s ScrollTrigger.

- **Pinned Sections**: Lock sections in view while animating content for engaging scroll experiences.

- **Image Masking Effects**: Use scroll-triggered pins and masks for visually striking image transitions.

- **Seamless Timeline Animations**: Craft smooth animation timelines that span across multiple sections.

- **Responsive Design**: Ensure fluid UI and adaptive GSAP animations across all screen sizes.

And many more, including code architecture and reusability.

## <a name="quick-start"> Quick Start</a>
Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [pnpm](https://pnpm.io/) (Performance NPM)

**Cloning the Repository**

```bash
git clone https://github.com/lecaotanloc289/macbook-gsap-landing-page.git
cd macbook-gsap-landing-page
```

**Installation**

Install the project dependencies using npm:

```bash
pnpm install
```

**Running the Project**

```bash
pnpm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

**Deploying**

The site is deployed to Cloudflare Workers (static assets) with the custom domain `macbook.lecaotanloc.dev`, configured in `wrangler.jsonc`. Log in once with `pnpm exec wrangler login`, then:

```bash
pnpm run deploy
```
