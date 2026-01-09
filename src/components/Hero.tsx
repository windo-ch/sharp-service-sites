import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="pt-40 pb-32 md:pt-52 md:pb-44 lg:pt-60 lg:pb-52 relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-main relative">
        <div className="max-w-5xl">
          {/* Section label */}
          <span className="section-label mb-8 block animate-fade-in">
            Web Design & Branding
          </span>
          
          {/* Massive headline with staggered animation */}
          <h1 className="font-heading font-bold mb-10 leading-[0.95] tracking-tight">
            <span className="block text-5xl md:text-7xl lg:text-8xl xl:text-9xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Websites and branding
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl xl:text-9xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              for firms that take
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl xl:text-9xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
              themselves{" "}
              <span className="text-primary italic">seriously.</span>
            </span>
          </h1>
          
          {/* Subhead with accent line */}
          <div className="flex items-start gap-6 mb-14 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-px bg-primary mt-4 hidden md:block" />
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-xl leading-relaxed">
              Based in Zug. Working with legal, finance, and tech companies who want to look as sharp as they operate.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Button variant="cta" size="xl" asChild className="group">
              <a href="#contact">
                Get in touch
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
