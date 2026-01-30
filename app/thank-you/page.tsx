import { MazzardExtraLight, MazzardThin } from "@/utils/fonts";

import ThankYouText from "@/icons/thank-you-text.svg";

export default function ThankYou() {
  return (
    <section
      className="max-w-7xl mx-auto relative h-dvh xl:h-screen grid grid-cols-[minmax(0,1fr)_minmax(0,3fr)] sm:grid-cols-2 gap-4 sm:gap-0 px-4 
  bg-[url(/bg-l.png)] dark:bg-[url(/bg-d.png)]
   bg-no-repeat bg-center bg-size-[460%] sm:bg-size-[300%] md:bg-size-[170%] bg-white dark:bg-[#151515]
  xl:bg-none! xl:bg-transparent!"
    >
      {/* LEFT SIDE */}
      <div className="relative pt-10">
        <div className="fixed sm:absolute sm:right-0 sm:top-20 xl:top-1/2 xl:-translate-y-1/2 sm:-mr-1 xl:mr-0 scale-90 xl:scale-100">
          <div className="relative inline-block">
            <ThankYouText className="h-[80vh] w-auto dark:invert dark:brightness-0" />

            {/* Divider */}
            <div className="sm:hidden pointer-events-none absolute -top-20 right-0 h-full">
              <div className="h-screen w-px bg-black dark:bg-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden sm:block absolute left-1/2 top-0 h-full w-px bg-black dark:bg-white" />

      {/* RIGHT SIDE */}

      <div className="relative flex items-center justify-center">
        <div className="relative left-20 md:left-12 lg:-left-6 xl:-left-8 sm:flex h-full w-full flex-col items-center justify-center">
          <div className="pointer-events-none absolute -top-10 left-[-2em] hidden h-full w-full bg-center bg-no-repeat xl:bg-[url(/hero-elipse.png)] bg-size-[70%] dark:invert dark:brightness-0 sm:block" />

          <p
            className={`relative -left-20 top-1/2 -translate-y-1/2 sm:translate-y-0 sm:top-0 xl:-top-12 z-10 text-[80px] scale-75 xl:scale-100 leading-3 sm:leading-normal ${MazzardExtraLight.className}`}
          >
            {/* <span className="block"> */}
            <span className={`text-xl ${MazzardThin.className}`}>
              &lt;p&gt;
            </span>
            <span className="text-2xl">Your message has been sent</span>{" "}
            <span className="sm:block text-2xl sm:-mt-7">
              successfully. I will contact you as
            </span>{" "}
            {/* </span> */}
            <span className="sm:block text-2xl">
              soon as possible.
              <span className={`text-xl ${MazzardThin.className}`}>
                &lt;/p&gt;
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
