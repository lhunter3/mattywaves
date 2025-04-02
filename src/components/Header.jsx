import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = ["music", "shows", "about", "contact"];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const updateUnderline = (index) => {
    const nav = navRef.current;
    if (nav) {
      const link = nav.children[index];
      if (link) {
        setUnderlineStyle({
          left: link.offsetLeft,
          width: link.offsetWidth,
        });
      }
    }
  };

  // Update underline on mount and resize
  useEffect(() => {
    updateUnderline(activeIndex);
    const handleResize = () => updateUnderline(activeIndex);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  // Scroll to section smoothly
  const handleClick = (section, index) => {
    setActiveIndex(index);
    updateUnderline(index);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm text-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl md:text-2xl font-bold tracking-wide">MATTYWAVES</h1>

        {/* Desktop Nav */}
        <nav className="relative hidden md:flex space-x-8 text-sm font-medium" ref={navRef}>
  {links.map((item, i) => (
    <button
      key={item}
      onClick={() => handleClick(item, i)}
      className="relative group px-3 py-1 transition-all"
    >
      {item.toUpperCase()}

      {/* Red glowing underline on hover (ONLY when NOT active) */}
      {activeIndex !== i && (
        <span className="absolute left-0 -bottom-0.5 w-full h-[2px] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 bg-red-600 drop-shadow-[0_0_6px_red]" />
      )}
    </button>
  ))}

  {/* Sliding black underline under active tab (HIDDEN when hovering active tab) */}
  <span
    className={`absolute bottom-0 h-[2px] bg-black transition-all duration-300 pointer-events-none ${
      underlineStyle.opacity === 0 ? 'opacity-0' : 'opacity-100'
    }`}
    style={{
      left: underlineStyle.left,
      width: underlineStyle.width,
      opacity: underlineStyle.opacity,
    }}
  />
</nav>


        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 pt-2 shadow-sm animate-fade-in-down">
          {links.map((item, i) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item, i);
              }}
              className="block py-2  hover:bg-gray-200 rounded px-2 transition-all"
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
