import SectionTitle from "./SectionTitle";
import { useRef } from "react";
import { useContactInputReveal } from "../hooks/gsap";

const Contact = () => {
  const formRef = useRef(null);

  const fulName = useRef(null);
  const email = useRef(null);
  const message = useRef(null);
  const btn = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs integration

    // reset
    e.target.querySelector(".fullname").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };
  const inputRef = [fulName, email, message, btn];

  useContactInputReveal(inputRef, 1);

  return (
    <div className="contact container mx-auto mt-40" id="contact">
      <SectionTitle title={"Contact"} />

      <form
        onSubmit={sendEmail}
        className="mt-40 grid grid-cols-2 gap-20"
        ref={formRef}
      >
        <div className="from-control overflow-hidden">
          <input
            type="text"
            placeholder="Write your name"
            name="fullname"
            required
            className="fullname bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
            ref={fulName}
          />
        </div>
        <div className="from-control overflow-hidden">
          <input
            type="email"
            placeholder="Write your email"
            name="email"
            required
            className="email bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
            ref={email}
          />
        </div>
        <div className="from-control overflow-hidden">
          <textarea
            placeholder="Write your message"
            name="message"
            required
            rows="1"
            cols="30"
            className="message bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full resize-none"
            ref={message}
          />
        </div>
        <div className="from-control overflow-hidden">
          <input
            type="submit"
            value="Send message"
            className="uppercase border py-16 px-28 rounded-full border-white/20 hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500 w-full"
            ref={btn}
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
