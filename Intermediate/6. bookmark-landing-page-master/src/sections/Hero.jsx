import Button from "../components/Button";

export default function Hero() {
  return (
    <section className="max-w-screen-xl mx-auto relative">
      <div
        className="flex flex-col md:flex-row-reverse 
                   md:items-center max-w-screen-lg mx-auto
                   md:px-6 lg:px-8"
      >
        <figure
          className="md:translate-x-12 lg:translate-x-18 
                           relative"
        >
          <img src="/images/illustration-hero.svg" alt="Hero" />
          <div
            className="absolute bottom-0 right-0 max-md:w-3/4 
                          max-md:h-3/4 bg-[#5267DF] rounded-l-full 
                          -z-10"
          ></div>
        </figure>
        <div
          className="md:w-4/6 lg:w-1/2 px-4 md:px-0 text-center 
                     md:text-left max-md:pt-12 max-md:max-w-lg 
                     max-md:mx-auto"
        >
          <h1 className="text-3xl font-medium">A Simple Bookmark Manager</h1>
          <p className="text-sm text-[#242A45] opacity-50 pt-4 md:pt-5.5 pb-8">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Button
              className="bg-[#5267DF] text-white hover:animate-wiggle
                          hover:bg-white hover:text-[#5267DF] hover:border-[#5267DF]"
            >
              Get it on Chrome
            </Button>
            <Button className="bg-[#F7F7F7] text-[#242A45] border-white 
                                hover:border-[#242A45] hover:animate-wiggle">
              Get it on Firefox
            </Button>
          </div>
        </div>
      </div>
      <div
        className="md:w-4/10 md:h-1/4 bg-[#5267DF] absolute bottom-0 right-0
                   md:w-3/8 md:h-4/6 rounded-l-full -z-10"
      ></div>
    </section>
  );
}
