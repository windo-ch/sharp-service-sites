import { useState } from "react";
import { Button } from "./ui/button";

const Contact = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const email = "henry@henry.marketing";
  const phone = "+41 79 175 20 20";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-spacing">
      <div className="container-main">
        <p className="section-label">Contact</p>
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10">
            Have a project in mind? Tell me about it.
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 mb-12">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            <Button type="submit" variant="cta" size="lg">
              Send message
            </Button>
          </form>

          <div className="space-y-4 text-muted-foreground">
            <p>Or reach out directly:</p>
            <div className="flex flex-col gap-3">
              {showEmail ? (
                <a href={`mailto:${email}`} className="link-hover">
                  {email}
                </a>
              ) : (
                <button
                  onClick={() => setShowEmail(true)}
                  className="text-left reveal-button text-foreground"
                >
                  Click to reveal email
                </button>
              )}
              {showPhone ? (
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="link-hover">
                  {phone}
                </a>
              ) : (
                <button
                  onClick={() => setShowPhone(true)}
                  className="text-left reveal-button text-foreground"
                >
                  Click to reveal phone
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
