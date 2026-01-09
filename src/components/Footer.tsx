import { useState } from "react";

const Footer = () => {
  const [showEmail, setShowEmail] = useState(false);
  const email = "henry@henry.marketing";

  return (
    <footer className="py-12 border-t border-border">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            {showEmail ? (
              <a href={`mailto:${email}`} className="link-hover">
                {email}
              </a>
            ) : (
              <button
                onClick={() => setShowEmail(true)}
                className="reveal-button"
              >
                {email.replace(/[a-z]/gi, "•")}
              </button>
            )}
            <span>·</span>
            <span>Zug, Switzerland</span>
          </div>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
