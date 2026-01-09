import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-main">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 text-balance">
            Websites and branding for firms that take themselves seriously.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
            Based in Zug. Working with legal, finance, and tech companies who want to look as sharp as they operate.
          </p>
          <Button variant="cta" size="xl" asChild>
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
