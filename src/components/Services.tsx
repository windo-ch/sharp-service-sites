const services = [
  {
    number: "01",
    title: "Websites",
    description: "Clean, modern, fast. Built around how your clients actually think.",
  },
  {
    number: "02",
    title: "Branding",
    description: "Identity systems that hold together. Logo, colors, type, guidelines.",
  },
  {
    number: "03",
    title: "Landing Pages",
    description: "Something launching soon? One focused page, fast turnaround.",
  },
  {
    number: "04",
    title: "Messaging",
    description: "Clear language that says what you do and why it matters.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-spacing relative">
      {/* Background accent */}
      <div className="absolute top-1/2 -right-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container-main relative">
        <span className="section-label mb-16 md:mb-24 block">Services</span>
        
        <div className="space-y-0">
          {services.map((service) => (
            <div 
              key={service.number}
              className="group border-t border-white/10 py-10 md:py-14 lg:py-16 transition-colors duration-500 hover:border-primary/30"
            >
              <div className="grid grid-cols-12 gap-4 md:gap-8 items-start">
                {/* Number */}
                <div className="col-span-2 md:col-span-1">
                  <span className="text-primary font-heading text-2xl md:text-3xl lg:text-4xl font-bold opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    {service.number}
                  </span>
                </div>
                
                {/* Title */}
                <div className="col-span-10 md:col-span-4 lg:col-span-3">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                
                {/* Description */}
                <div className="col-span-12 md:col-span-7 lg:col-span-8 md:pl-4">
                  <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Bottom border */}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
};

export default Services;
