import { useState } from "react";

const Contact = () => {
  const [emailRevealed, setEmailRevealed] = useState(false);
  const [phoneRevealed, setPhoneRevealed] = useState(false);

  const email = "henry@henry.marketing";
  const phone = "+41 79 175 20 20";

  return (
    <section id="contact" className="section-spacing relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px] pointer-events-none" />
      
      <div className="container-main relative">
        {/* Top accent line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-16 md:mb-24" />
        
        <span className="section-label mb-12 md:mb-16 block">Contact</span>
        
        <div className="max-w-3xl">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-8 leading-tight">
            Have a project?
            <br />
            <span className="text-primary">Let's talk.</span>
          </h2>
          
          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground mb-14 max-w-lg">
            Tell me what you're working on. I'll get back to you within 24 hours.
          </p>
          
          {/* Contact methods */}
          <div className="space-y-8">
            {/* Email */}
            <div className="group">
              <span className="text-xs uppercase tracking-widest text-muted-foreground mb-3 block">Email</span>
              {emailRevealed ? (
                <a
                  href={`mailto:${email}`}
                  className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-4"
                >
                  {email}
                  <span className="text-primary">→</span>
                </a>
              ) : (
                <button
                  onClick={() => setEmailRevealed(true)}
                  className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground hover:text-primary transition-colors duration-300 group inline-flex items-center gap-4"
                >
                  <span>Reveal email</span>
                  <span className="w-8 h-8 md:w-10 md:h-10 border border-current flex items-center justify-center text-lg transition-colors group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground">
                    +
                  </span>
                </button>
              )}
            </div>
            
            {/* Phone */}
            <div className="group">
              <span className="text-xs uppercase tracking-widest text-muted-foreground mb-3 block">Phone</span>
              {phoneRevealed ? (
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-4"
                >
                  {phone}
                  <span className="text-primary">→</span>
                </a>
              ) : (
                <button
                  onClick={() => setPhoneRevealed(true)}
                  className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground hover:text-primary transition-colors duration-300 group inline-flex items-center gap-4"
                >
                  <span>Reveal phone</span>
                  <span className="w-8 h-8 md:w-10 md:h-10 border border-current flex items-center justify-center text-lg transition-colors group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground">
                    +
                  </span>
                </button>
              )}
            </div>
          </div>
          
          {/* Location badge */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3 text-muted-foreground">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-sm uppercase tracking-widest">Based in Zug, Switzerland</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
