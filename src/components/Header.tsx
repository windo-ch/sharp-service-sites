import Logo from "./Logo";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container-main">
        <nav className="flex items-center justify-between h-20">
          <a href="#" className="block">
            <Logo />
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium link-hover"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
