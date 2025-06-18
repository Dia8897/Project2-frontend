'use client';

export default function Contact() {
  return (
    <>
      <section
        className="
        bg-gray-50
        p-12
        max-w-[1000px]
        mx-auto
        my-12
        rounded-xl
        shadow-[0_0_15px_rgba(0,51,102,0.1)]
      "
      >
        <h2
          className="
          font-sans
          text-2xl
          mb-6
          text-[#003366]
          text-center
          tracking-wide
        "
        >
          Contact Us
        </h2>

        <form className="flex flex-col gap-5 w-1/2 mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="
      p-3
      text-lg
      border-2
      border-gray-300
      rounded-lg
      transition
      duration-300
      font-inherit
      focus:outline-none
      focus:border-[#003366]
      focus:shadow-[0_0_6px_rgba(0,85,170,0.53)]
      bg-white
      w-full
    "
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            className="
      p-3
      text-lg
      border-2
      border-gray-300
      rounded-lg
      transition
      duration-300
      font-inherit
      focus:outline-none
      focus:border-[#003366]
      focus:shadow-[0_0_6px_rgba(0,85,170,0.53)]
      bg-white
      w-full
    "
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            required
            className="
      p-3
      text-lg
      border-2
      border-gray-300
      rounded-lg
      transition
      duration-300
      font-inherit
      resize-vertical
      focus:outline-none
      focus:border-[#003366]
      focus:shadow-[0_0_6px_rgba(0,85,170,0.53)]
      bg-white
      w-full
    "
          />

          <button
            type="submit"
            className="
      p-3
      text-lg
      bg-[#003366]
      text-white
      rounded-lg
      font-semibold
      cursor-pointer
      shadow-[0_4px_8px_rgba(0,51,102,0.3)]
      transition
      duration-300
      hover:bg-[#0055aa]
      hover:shadow-[0_6px_14px_rgba(0,85,170,0.6)]
      focus:outline-none
      focus:bg-[#0055aa]
      focus:shadow-[0_6px_14px_rgba(0,85,170,0.6)]
      w-full
    "
          >
            Send
          </button>
        </form>
      </section>

      {/* <style jsx>{`
        

        @media (max-width: 480px) {
          .contact-section {
            margin: 2rem 1rem;
            padding: 2rem 1rem;
          }
          input,
          textarea,
          button {
            font-size: 1rem;
          }
        }
      `}</style> */}
    </>
  );
}
