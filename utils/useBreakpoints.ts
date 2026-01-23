// "use client";

// import { useEffect, useState } from "react";

// // Tailwind default breakpoints (пиксели)
// const breakpoints = {
//   sm: 640,
//   md: 768,
//   lg: 1024,
//   xl: 1280,
//   "2xl": 1536,
// } as const;

// type Breakpoint = keyof typeof breakpoints;

// export function useBreakpoints() {
//   const [width, setWidth] = useState<number>(
//     typeof window !== "undefined" ? window.innerWidth : 0
//   );

//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const current = (): Breakpoint | "base" => {
//     if (width >= breakpoints["2xl"]) return "2xl";
//     if (width >= breakpoints.xl) return "xl";
//     if (width >= breakpoints.lg) return "lg";
//     if (width >= breakpoints.md) return "md";
//     if (width >= breakpoints.sm) return "sm";
//     return "base";
//   };

//   // Проверка дали сме точно на този breakpoint или по-голям
//   const is = (bp: Breakpoint | "base") => current() === bp;

//   // Проверка дали сме минимум този breakpoint
//   const up = (bp: Breakpoint) => width >= breakpoints[bp];

//   // Проверка дали сме максимум този breakpoint
//   const down = (bp: Breakpoint) => width < breakpoints[bp];

//   return { width, current: current(), is, up, down };
// }

"use client";

import { useEffect, useState } from "react";

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

type Breakpoint = keyof typeof breakpoints;

export function useBreakpoints() {
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    handleResize(); // задаваме реалната ширина веднага при mount

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const current = (): Breakpoint | "base" => {
    if (!width) return "base"; // още не е известна ширината
    if (width >= breakpoints["2xl"]) return "2xl";
    if (width >= breakpoints.xl) return "xl";
    if (width >= breakpoints.lg) return "lg";
    if (width >= breakpoints.md) return "md";
    if (width >= breakpoints.sm) return "sm";
    return "base";
  };

  const is = (bp: Breakpoint | "base") => current() === bp;
  const up = (bp: Breakpoint) => (width ? width >= breakpoints[bp] : false);
  const down = (bp: Breakpoint) => (width ? width < breakpoints[bp] : false);

  return { width, current: current(), is, up, down };
}
