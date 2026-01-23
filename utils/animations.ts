// animations.ts
import gsap from "gsap";

// Overlay fade in
export const fadeInOverlay = (element: HTMLElement | null, duration = 0.3) => {
  if (!element) return;
  gsap.fromTo(element, { opacity: 0 }, { opacity: 1, duration });
};

// Modal open animation
export const openModalAnimation = (
  element: HTMLElement | null,
  duration = 0.4
) => {
  if (!element) return;
  gsap.fromTo(
    element,
    { opacity: 0, scale: 0.95, y: 50 },
    { opacity: 1, scale: 1, y: 0, duration }
  );
};

// Slide image and show text
export const slideImageAndShowText = (
  imgEl: HTMLElement | null,
  textEl: HTMLElement | null,
  xImg = -200,
  xText = -100,
  duration = 1
) => {
  if (!imgEl || !textEl) return;

  gsap.killTweensOf([imgEl, textEl]);

  gsap.to(imgEl, { x: xImg, duration, ease: "power2.out" });
  gsap.to(textEl, { opacity: 1, x: xText, duration, ease: "power2.out" });
};

// export const slideImageAndShowText = (
//   imgEl: HTMLElement | null,
//   textEl: HTMLElement | null,
//   xImg = -200,
//   xText = -100,
//   duration = 1
// ) => {
//   if (!imgEl || !textEl) return;
//   gsap.to(imgEl, { x: xImg, duration, ease: "power2.out" });
//   gsap.to(textEl, { opacity: 1, x: xText, duration, ease: "power2.out" });
// };

// Slide image and show icons
export const slideImageAndShowIcons = (
  imgEl: HTMLElement | null,
  iconsEl: HTMLElement | null,
  xImg = -200,
  xIcons = -100,
  duration = 1
) => {
  if (!imgEl || !iconsEl) return;

  gsap.killTweensOf([imgEl, iconsEl]);

  gsap.to(imgEl, { x: xImg, duration, ease: "power2.out" });
  gsap.to(iconsEl, {
    opacity: 1,
    x: xIcons,
    duration,
    ease: "power2.out",
    display: "flex",
  });
};

// export const slideImageAndShowIcons = (
//   imgEl: HTMLElement | null,
//   iconsEl: HTMLElement | null,
//   xImg = -200,
//   xIcons = -50,
//   duration = 1
// ) => {
//   if (!imgEl || !iconsEl) return;
//   gsap.to(imgEl, { x: xImg, duration, ease: "power2.out" });
//   gsap.to(iconsEl, {
//     opacity: 1,
//     x: xIcons,
//     duration,
//     ease: "power2.out",
//     display: "flex",
//   });
// };

// Reset hover
export const resetHover = (
  imgEl: HTMLElement | null,
  textEl?: HTMLElement | null,
  iconsEl?: HTMLElement | null
) => {
  gsap.killTweensOf([imgEl, textEl, iconsEl]);

  if (imgEl) gsap.to(imgEl, { x: 0, duration: 0.8, ease: "power2.out" });
  if (textEl)
    gsap.to(textEl, { opacity: 0, x: 50, duration: 0.6, ease: "power2.out" });
  if (iconsEl)
    gsap.to(iconsEl, { opacity: 0, x: 50, duration: 0.6, ease: "power2.out" });
};

// export const resetHover = (
//   imgEl: HTMLElement | null,
//   textEl?: HTMLElement | null,
//   iconsEl?: HTMLElement | null
// ) => {
//   if (imgEl) gsap.to(imgEl, { x: 0, duration: 1.5, ease: "power2.out" });
//   if (textEl)
//     gsap.to(textEl, { opacity: 0, x: 50, duration: 1, ease: "power2.out" });
//   if (iconsEl)
//     gsap.to(iconsEl, { opacity: 0, x: 50, duration: 1, ease: "power2.out" });
// };

export const scaleContentToFit = (
  modalEl: HTMLElement | null,
  contentEl: HTMLElement | null,
  buttonsHeight = 64,
  duration = 0.2
) => {
  if (!modalEl || !contentEl) return;

  const modalHeight = modalEl.clientHeight;
  const availableHeight = modalHeight - buttonsHeight;
  const contentHeight = contentEl.scrollHeight;

  const scale = Math.min(1, availableHeight / contentHeight);

  gsap.to(contentEl, {
    scale,
    transformOrigin: "center center",
    duration,
  });
};
