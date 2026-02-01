import { MazzardExtraLight, MazzardThin } from "@/utils/fonts";

import Link from "next/link";
import ThankYouText from "@/icons/thank-you-text.svg";

export const metadata = {
  title: "Thank you Page | vasilena.space",
  description: "Thank you Page",
};

export default function ThankYou() {
  return (
    <section
      className="max-w-7xl mx-auto relative h-dvh xl:h-screen grid grid-cols-[minmax(0,1fr)_minmax(0,3fr)] sm:grid-cols-2 gap-4 sm:gap-0 px-4 
bg-[url(/bg-l.webp)] dark:bg-[url(/bg-d.webp)]
 bg-no-repeat bg-center bg-size-[460%] sm:bg-size-[300%] md:bg-size-[170%] bg-white dark:bg-[#151515]
xl:bg-none! xl:bg-transparent!"
    >
      {/* LEFT SIDE */}
      <div className="relative pt-10">
        <div className="fixed inset-y-0 flex items-center sm:absolute sm:right-0 sm:inset-y-auto sm:top-1/2 sm:-translate-y-1/2 xl:mr-0 ">
          <div className="relative inline-block">
            <ThankYouText className="h-[80vh] w-auto dark:invert dark:brightness-0" />

            {/* Divider */}
            <div className="sm:hidden pointer-events-none absolute -top-24 right-0 h-full">
              <div className="h-screen w-px bg-black dark:bg-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden sm:block absolute left-1/2 top-0 h-full w-px bg-black dark:bg-white" />

      {/* RIGHT SIDE */}

      <div className="relative flex items-center justify-center">
        <div className="relative lg:-ml-60 flex h-full w-auto flex-col items-start justify-center gap-8">
          <p
            className={`relative z-10 text-[80px] leading-3 sm:leading-normal ${MazzardExtraLight.className}`}
          >
            <span className={`block text-xl ${MazzardThin.className}`}>
              &lt;p&gt;
              <span
                className={`text-xl sm:text-2xl ${MazzardExtraLight.className}`}
              >
                Your message has been
              </span>
            </span>

            <span
              className={`block text-xl sm:text-2xl ${MazzardExtraLight.className}`}
            >
              sent successfully. I will contact
            </span>

            <span className="block text-xl sm:text-2xl">
              you as soon as possible.
              <span className={`text-xl ${MazzardThin.className}`}>
                &lt;/p&gt;
              </span>
            </span>
          </p>
          <Link
            href="/"
            className="relative w-full rounded-lg text-center bg-black dark:bg-white dark:hover:bg-gray-800 py-2 text-md text-white! dark:text-black! transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
