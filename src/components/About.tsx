import headshotImage from "@/assets/headshot.jpg";

const About = () => {
  return (
    <section id="about" className="section-spacing">
      <div className="container-main">
        <p className="section-label">About</p>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="max-w-xl">
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              I'm Henry. I design websites and brands for service firms — mostly legal, finance, consulting, crypto-adjacent. I work directly with founders, no account managers, no bloated process. You tell me what you need, I make it happen.
            </p>
          </div>
          <div className="md:justify-self-end">
            <div className="w-64 h-80 md:w-72 md:h-96 overflow-hidden">
              <img
                src={headshotImage}
                alt="Henry — Web Designer and Brand Consultant"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
