const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-16 border-t border-white/5">
      <div className="container-main">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Left side */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <span className="text-muted-foreground text-sm">
              henry@henry.marketing
            </span>
            <span className="hidden sm:block text-white/20">·</span>
            <span className="text-muted-foreground text-sm">
              Zug, Switzerland
            </span>
          </div>
          
          {/* Right side */}
          <p className="text-muted-foreground/60 text-sm">
            © {currentYear} Henry
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
