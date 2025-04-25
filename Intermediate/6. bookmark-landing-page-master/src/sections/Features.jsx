import { useState } from "react";
import Button from "../components/Button";

export default function Features() {
  const [currentContent, setCurrentContent] = useState(0);

  const contents = [
    {
      h3: "Bookmark in one click",
      p: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      image: "./images/illustration-features-tab-1.svg",
    },
    {
      h3: "Intelligent search",
      p: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      image: "./images/illustration-features-tab-2.svg",
    },
    {
      h3: "Share your bookmarks",
      p: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      image: "./images/illustration-features-tab-3.svg",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto mt-35 md:mt-20 relative">
      <div>
        <div
          className="text-center w-full md:w-4/6 lg:w-1/2 px-4 md:px-0 
                     max-md:pt-12 max-md:max-w-lg mx-auto text-[#242A45]"
        >
          <h2 className="text-2xl md:text-3xl font-medium">Features</h2>
          <p className="pt-4 md:text-xl opacity-50">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <ul
          className="mt-10 md:mt-18 flex flex-col md:flex-row md:justify-around md:max-w-3xl divide-y border-y md:border-t-0 divide-[#495DCF]/20
        border-[#495DCF]/20 max-w-lg mx-auto text-center"
        >
          <li className="py-5 md:pt-0 md:pb-7 relative">
            <button
              onClick={() => setCurrentContent(0)}
              className="cursor-pointer hover:text-[#FA5959]"
            >
              Simple Bookmarking
            </button>
            <span
              className={`${
                currentContent === 0 ? "w-4/12 md:w-[130%]" : "w-0"
              } h-1 bg-[#FA5959] rounded-full mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-300`}
            ></span>
          </li>
          <li className="py-5 md:pt-0 md:pb-7 relative">
            <button
              onClick={() => setCurrentContent(1)}
              className="cursor-pointer hover:text-[#FA5959]"
            >
              Speedy Searching
            </button>
            <span
              className={`${
                currentContent === 1 ? "w-4/12 md:w-[130%]" : "w-0"
              } h-1 bg-[#FA5959] rounded-full mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-300`}
            ></span>
          </li>
          <li className="py-5 md:pt-0 md:pb-7 relative">
            <button
              onClick={() => setCurrentContent(2)}
              className="cursor-pointer hover:text-[#FA5959]"
            >
              Easy Sharing
            </button>
            <span
              className={`${
                currentContent === 2 ? "w-4/12 md:w-[130%]" : "w-0"
              } h-1 bg-[#FA5959] rounded-full mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-300`}
            ></span>
          </li>
        </ul>
        <article className="max-w-screen-xl mx-auto mt-18 pb-14 relative slide-in">
          <div
            className="flex flex-col md:flex-row md:gap-12 lg:gap-20 md:items-center 
                       max-w-screen-lg mx-auto md:px-6 lg:px-8"
          >
            <figure className="relative md:w-4/6 lg:w-1/2">
              <img
                className="max-md:px-8 max-md:pb-8 mx-auto"
                src={contents[currentContent].image}
                alt={contents[currentContent].h3}
              />
              <div
                className="absolute bottom-0 left-0 max-md:w-3/4 
                              max-md:h-3/4 bg-[#5267DF] rounded-r-full -z-10"
              ></div>
            </figure>
            <div
              className="md:w-4/6 lg:w-1/2 px-4 md:px-0 text-center md:text-left
                         max-md:pt-12 max-md:max-w-lg max-md:mx-auto"
            >
              <h3 className="text-3xl font-medium">
                {contents[currentContent].h3}
              </h3>
              <p className="text-sm text-[#242A45] opacity-50 pt-4 md:pt-5.5 pb-8">
                {contents[currentContent].p}
              </p>
              <Button
                className="bg-[#5267DF] text-white 
                                 hover:bg-white hover:text-[#5267DF] hover:border-[#5267DF]"
              >
                More Info
              </Button>
            </div>
          </div>
        </article>
      </div>
      <div
        className="md:w-4/10 md:h-1/4 bg-[#5267DF] absolute bottom-0 left-0
                       md:w-2/8 md:h-3/8 rounded-r-full -z-10"
      ></div>
    </section>
  );
}
