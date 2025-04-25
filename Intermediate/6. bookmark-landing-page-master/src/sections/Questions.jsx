import { useState } from "react";
import Button from "../components/Button";

export default function Questions() {
  const [isExpandedIndex, setIsExpandedIndex] = useState(null);

  const questions = [
    {
      question: "What is Bookmark?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
      question: "How can I request a new browser?",
      answer:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
    },
    {
      question: "What about other Chromium browsers?",
      answer:
        "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto mt-35 md:mt-20
                        flex flex-col items-center">
      <div
        className="text-center w-full md:w-4/6 lg:w-1/2 px-4 md:px-0 
                     max-md:pt-12 max-md:max-w-lg mx-auto text-[#242A45]"
      >
        <h2 className="text-2xl md:text-3xl font-medium">
          Frequently Asked Questions
        </h2>
        <p className="pt-4 md:text-xl opacity-50">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <ul
        className="mt-12 w-full md:w-4/6 lg:w-1/2 px-4 md:px-0 
                     max-md:pt-12 max-md:max-w-lg mx-auto divide-y divide-[#242A45]/15
                     border-y border-[#242A45]/15"
      >
        {questions.map((question, index) => (
          <li key={index} className="pt-5 pb-4 ">
            <button
              onClick={() =>
                setIsExpandedIndex(isExpandedIndex === index ? null : index)
              }
              className="flex justify-between items-center cursor-pointer
                                text-left w-full"
            >
              <h3>{question.question}</h3>
              <img
                src="./images/icon-arrow.svg"
                alt="arrow"
                className={`${
                  isExpandedIndex === index ? "rotate-180" : ""
                } transition-transform duration-300 ease-in-out`}
              />
            </button>
            {isExpandedIndex === index && (
              <p className="pt-4 animate-drop-down">{question.answer}</p>
            )}
          </li>
        ))}
      </ul>
      <Button
        className="mt-12 bg-[#5267DF] text-white 
                    hover:bg-white hover:text-[#5267DF] hover:border-[#5267DF]"
      >
        More Info
      </Button>
    </section>
  );
}
