import Logo from "./Logo";
import Navigation from "./Navigation";
import Button from "./Button";

export default function Header() {
  return (
    <>
     <header>
      <div className="header">
        <div className="logo-navigation">
          <Logo />
          <Navigation />
        </div>
        <Button label="Sign In" />
      </div>
      </header>
    </>
  );
}
