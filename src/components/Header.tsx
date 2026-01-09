import Logo from "./Logo";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-white/5">
      <div className="container-main">
        <nav className="flex items-center justify-between h-20 md:h-24">
          <a href="#" className="block transition-transform duration-300 hover:scale-105">
            <Logo />
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
          >
            Get in touch
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
