const services = [
  {
    title: "Websites",
    description: "Clean, modern, fast. Built around how your clients actually think.",
  },
  {
    title: "Branding",
    description: "Identity systems that hold together. Logo, colors, type, guidelines.",
  },
  {
    title: "Landing pages",
    description: "Something launching soon? One focused page, fast turnaround.",
  },
  {
    title: "Messaging",
    description: "Clear language that says what you do and why it matters.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-spacing">
      <div className="container-main">
        <p className="section-label">Services</p>
        <div className="grid gap-12 md:gap-16">
          {services.map((service, index) => (
            <div key={index} className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
