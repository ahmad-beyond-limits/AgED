RULES:

- never git push without permission.
- never use emojies in the design.
- keep 2 consistent fonts on all website.
- premium look.
- always design anything follow the inspirations and design pricimples consistent we are using from landing page to home screen and now in lessons anaalyse attached image i need their design princimples.

### Animation & HCI Principles (Framer Motion)
We rely on high-performance, GPU-accelerated CSS animations via Framer Motion to create a premium, gamified, and story-telling feel without sacrificing responsiveness.

- **The Storybook Reveal (While-In-View):** Used for bringing new sections, chapters, or list items into the viewport gracefully. 
  - **Configuration:** `initial={{ opacity: 0, y: 100, filter: "blur(20px)", scale: 0.9 }}`, `whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}`.
  - **Luxurious Easing:** Must use a cinematic cubic-bezier curve `transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}`. This avoids linear, robotic movement by starting extremely fast and slowly "gliding" into its final resting place.
  
- **Typing on Scroll (Scroll-linked Text):** Used for deeply immersive narrative storytelling blocks.
  - **The Container Trick:** The parent container is artificially stretched (e.g., `200vh` to `300vh`) while the text element inside is locked via `sticky top-0 h-screen`. 
  - **The Logic:** Text is split into individual words. We track `scrollYProgress` (using `useScroll` and `useTransform`) to interpolate the opacity of each word from `0.15` (faint) to `1.0` (bright). Because the typing speed is physically tied to the user's mouse wheel, it provides total reading control.

- **Micro-Interactions & Responsiveness:** 
  - Hover states and active states should feel snappy but organic (e.g., subtle color shifts, minor scaling).
  - Never scale up large elements across scroll triggers if it risks causing horizontal overflow or breaking layout constraints.
  - UI controls (like back buttons, progress bars) should be minimal, floating, and glassmorphic (`backdrop-blur`) to keep the focus on cinematic hero images and typography.