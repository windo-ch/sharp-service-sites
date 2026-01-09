import henryLogo from "@/assets/henry-logo.png";

const Logo = () => {
  return (
    <img 
      src={henryLogo} 
      alt="Henry Marketing" 
      className="w-12 h-12 md:w-14 md:h-14"
    />
  );
};

export default Logo;
