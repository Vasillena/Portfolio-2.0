/* eslint-disable @typescript-eslint/no-explicit-any */

import CloseIcon from "@/icons/close-icon-simple.svg";
import Modal from "../Common/Modal";
import { useBreakpoints } from "@/utils/useBreakpoints";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Contact({ isOpen, onClose }: ModalProps) {
  const { down } = useBreakpoints();

  async function handleSubmit(e: any) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "a22df2ad-f29f-4c25-a4d0-077cffb32a84",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
        apikey: "a22df2ad-f29f-4c25-a4d0-077cffb32a84",
        redirect: "https://www.vasilena.space/thank-you",
      }),
    });
    const result = await response.json();
    if (result.success) {
      window.location.href = "https://www.vasilena.space/thank-you";
      console.log(result);
    } else {
      console.error("Form submission failed:", result);
      window.location.href = "https://www.vasilena.space/form-failed";
    }
  }

  const content = (
    <div className="sm:fixed inset-0 sm:inset-auto z-10 flex items-center justify-center sm:bottom-0 sm:right-10 sm:text-white sm:dark:text-[#222222]">
      <div className="w-[320px] rounded-t-4xl sm:bg-[#101010] sm:dark:bg-[#F3F3F3] py-2 px-4 sm:p-6 sm:shadow-2xl flex flex-col">
        <div className="absolute -top-6 text-5xl self-center">🐱</div>
        <h2 className="my-6 text-center text-lg sm:text-[26px]">
          Come and say Hi
        </h2>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              aria-label="Name"
              required
              placeholder=""
              className="block mt-1 w-full rounded-lg border border-[#D9D9D9] sm:border-[#4c4c4c] sm:dark:border-[#D9D9D9] px-3 py-2 bg-transparent  outline-none  appearance-none focus:outline-none focus:ring-0 peer"
            />
            <label
              htmlFor="name"
              className="absolute duration-300 transform -translate-y-5 sm:-translate-y-4 scale-75 top-1 z-10 origin-left bg-white sm:bg-[#101010] sm:dark:bg-[#F3F3F3] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 text-md"
            >
              Name
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="email"
              name="email"
              aria-label="Email"
              required
              placeholder=""
              className="block mt-1 w-full rounded-lg border border-[#D9D9D9] sm:border-[#4c4c4c] sm:dark:border-[#D9D9D9] px-3 py-2 bg-transparent  outline-none  appearance-none focus:outline-none focus:ring-0 peer"
            />
            <label
              htmlFor="email"
              className="absolute duration-300 transform -translate-y-5 sm:-translate-y-4 scale-75 top-2 z-10 origin-left bg-white sm:bg-[#101010] sm:dark:bg-[#F3F3F3] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 text-md"
            >
              Email
            </label>
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              placeholder=""
              rows={3}
              className="block mt-1 w-full rounded-lg border border-[#D9D9D9] sm:border-[#4c4c4c] sm:dark:border-[#D9D9D9] px-3 py-2 bg-transparent  outline-none  appearance-none focus:outline-none focus:ring-0 peer resize-none"
            />
            <label
              htmlFor="message"
              className="absolute duration-300 transform -translate-y-5 sm:-translate-y-4 scale-75 top-2 z-10 origin-left bg-white sm:bg-[#101010] sm:dark:bg-[#F3F3F3] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 text-md"
            >
              Message
            </label>
          </div>

          <div>
            <label htmlFor="email" />
            <input
              type="hidden"
              name="access_key"
              value="a22df2ad-f29f-4c25-a4d0-077cffb32a84"
            />
            <input
              type="hidden"
              name="redirect"
              value="https://www.vasilena.space/thank-you"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-black sm:bg-[#f3f3f3] sm:dark:bg-black dark:hover:bg-gray-800 py-3 text-xl text-white sm:text-[#222222] sm:dark:text-white transition hover:opacity-90"
          >
            Send
          </button>
        </form>
        <button className="sm:hidden text-lg px-8 pt-4" onClick={onClose}>
          Close
        </button>
        <button
          className="hidden absolute top-4 right-4 w-10 h-10 sm:flex justify-center items-center rounded-full hover:bg-gray-800 dark:invert dark:brightness-100"
          onClick={onClose}
        >
          <CloseIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );

  if (!isOpen) return null;

  return down("sm") ? (
    <Modal isOpen={isOpen} onClose={onClose}>
      {content}
    </Modal>
  ) : (
    content
  );
}
