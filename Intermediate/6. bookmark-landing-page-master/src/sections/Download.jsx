import Button from "../components/Button";

export default function Download() {
  const extensions = [
    {
      src: "./images/logo-chrome.svg",
      alt: "Chrome",
      title: "Add to Chrome",
      p: "Minimum version 62",
    },
    {
      src: "./images/logo-firefox.svg",
      alt: "Firefox",
      title: "Add to Firefox",
      p: "Minimum version 55",
    },
    {
      src: "./images/logo-opera.svg",
      alt: "Opera",
      title: "Add to Opera",
      p: "Minimum version 46",
    },
  ];
  return (
    <section className="max-w-screen-xl mx-auto mt-35 md:mt-20 relative">
      <div
        className="text-center w-full md:w-4/6 lg:w-1/2 px-4 md:px-0 
                     max-md:pt-12 max-md:max-w-lg mx-auto text-[#242A45]"
      >
        <h2 className="text-2xl md:text-3xl font-medium">
          Download the extension
        </h2>
        <p className="pt-4 md:text-xl opacity-50">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div
        className="flex flex-col justify-center items-center md:flex-row gap-10
                        px-4 mt-12"
      >
        {extensions.map((extension, index) => (
          <div
            key={extension.alt}
            className={`bg-white rounded-lg p-4 shadow-xl/30
                         flex flex-col items-center max-w-2xs
                        ${index === 1 ? "md:mt-10" : ""}
                        ${index === 2 ? "md:mt-20" : ""}`}
          >
            <img className="pt-10" src={extension.src} alt={extension.alt} />
            <p className="text-sm font-medium pt-8 pb-3">{extension.title}</p>
            <p className="text-sm font-medium pb-8">{extension.p}</p>
            <img className="w-full" src="./images/bg-dots.svg" alt="dots" />
            <Button
              className="mt-6 bg-[#5267DF] text-white 
                          hover:bg-white hover:text-[#5267DF] hover:border-[#5267DF]"
            >
              Add & Install Extension
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
