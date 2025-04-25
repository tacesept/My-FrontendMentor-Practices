import Button from "../components/Button";
import { useState } from "react";
export default function Contact() {
  const [validEmail, setValidEmail] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email && emailRegex.test(email)) {
      // Form submission logic here
      console.log("Form submitted successfully with email:", email);
      e.target.reset();
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  return (
    <section className="max-w-screen-xl mx-auto mt-35 md:mt-20 text-center">
      <div
        className="flex flex-col gap-4 items-center bg-[#5267DF] p-10
                      text-white"
      >
        <span className="text-xs tracking-[4px] font-medium">35,000+ already joined</span>
        <span className="text-2xl font-medium">
          Stay up-to-date with what we're doing
        </span>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-5 w-full justify-center md:items-start"
        >
          <div
            className={`flex flex-col gap-2 rounded-lg p-1 w-full md:max-w-xs ${
              validEmail ? "bg-[#5267DF]" : "bg-[#FA5959]"
            }`}
          >
            <input 
              type="email"
              id="email"
              placeholder="Enter your email"
              className="rounded-lg p-2 w-full
                          border-2 border-white bg-white text-black"
            />
            {!validEmail && (
              <span className="text-white text-sm italic">
                Whoops, make sure it’s an email
              </span>
            )}
          </div>
          <Button
            variant="
          bg-[#FA5959] text-white border-[#FA5959] hover:bg-white hover:text-[#FA5959]
          transition-all duration-300 "
          >
            Contact Us
          </Button>
        </form>
      </div>
    </section>
  );
}
