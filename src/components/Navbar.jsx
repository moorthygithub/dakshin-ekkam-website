import { useEffect, useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-cream shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between py-4">
          {/* ---- Logo ---- */}
          <div className="relative">
            <a
              href="/"
              className="text-lg relative z-50 font-bold tracking-widest text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Dhakshin Ekkam
            </a>
            <svg
              className="h-11 z-40 absolute -top-2 -left-3"
              viewBox="0 0 79 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.2574 2.24264C37.6005 -0.100501 41.3995 -0.100505 43.7426 2.24264L76.7574 35.2574C79.1005 37.6005 79.1005 41.3995 76.7574 43.7426L43.7426 76.7574C41.3995 79.1005 37.6005 79.1005 35.2574 76.7574L2.24264 43.7426C-0.100501 41.3995 -0.100505 37.6005 2.24264 35.2574L35.2574 2.24264Z"
                fill="#65DAFF"
              />
            </svg>
          </div>

          {/* ---- Hamburger (Mobile only) ---- */}
          <button
            className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            onClick={() => setOpen(!open)}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {!open ? (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              )}
            </svg>
          </button>

          {/* ---- Desktop Menu ---- */}
          <nav className="hidden md:flex space-x-6">
            <a
              href="/"
              className="px-3 py-2 text-sm font-medium hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="/about"
              className="px-3 py-2 text-sm font-medium hover:text-gray-900"
            >
              About Us
            </a>
            <a
              href="#"
              className="px-3 py-2 text-sm font-medium hover:text-gray-900"
            >
              Blog
            </a>
          </nav>
        </div>

        {/* ---- Mobile Menu ---- */}
        {open && (
          <div className="flex flex-col space-y-2 pb-4 md:hidden">
            <a
              href="/"
              className="px-3 py-2 text-sm font-medium hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="/about"
              className="px-3 py-2 text-sm font-medium hover:text-gray-900"
            >
              About Us
            </a>
            <a
              href="#"
              className="px-3 py-2 text-sm font-medium hover:text-gray-900"
            >
              Blog
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
