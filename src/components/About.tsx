import henryPhoto from "@/assets/henry-photo.png";

const About = () => {
  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container-main relative">
        <span className="section-label mb-16 md:mb-24 block">About</span>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo with accent frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Accent frame */}
              <div className="absolute -inset-4 md:-inset-6 border border-primary/20" />
              <div className="absolute -inset-2 md:-inset-3 border border-primary/10" />
              
              {/* Photo */}
              <div className="relative overflow-hidden">
                <img
                  src={henryPhoto}
                  alt="Henry — Web Designer & Brand Consultant"
                  className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:col-span-7 lg:pl-8">
            {/* Pull quote */}
            <p className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-8 text-foreground">
              I design websites and brands for service firms.
            </p>
            
            {/* Accent line */}
            <div className="w-20 h-px bg-primary mb-8" />
            
            {/* Body text */}
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              <p>
                Mostly legal, finance, consulting, crypto-adjacent. I work directly with founders, no account managers, no bloated process.
              </p>
              <p>
                You tell me what you need, I make it happen.
              </p>
            </div>
            
            {/* Signature */}
            <p className="mt-10 text-primary font-heading text-xl md:text-2xl italic">
              — Henry
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
