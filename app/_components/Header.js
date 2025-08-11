import Navigation from "@/app/_components/Navigation";
import Home from "@/app/_components/Home";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-900 border-b border-primary-900 px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Home />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
