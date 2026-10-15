"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link
          href="#home"
          className="nav-logo"
          onClick={() => setMenuOpen(false)}
        >
          Ravi<span>.</span>
        </Link>

        <nav
          className={`nav-links ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <Link
            href="#contact"
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </Link>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
    </header>
  );
}