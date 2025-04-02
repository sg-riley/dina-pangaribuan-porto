"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export function MainNavbar() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar className="h-16 w-5/6 my-4 mx-auto rounded-lg flex-col fixed top-0 items-center bg-blue-300/20  outline outline-1 outline-blue-400 shadow-blue-500/30 shadow-lg">
      {/* Desktop Navigation */}

      <NavBody className="h-full backdrop-blur-sm">
        <NavbarLogo />
        <NavItems items={navItems} />
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav className="h-full rounded-lg backdrop-blur-sm">
        <MobileNavHeader className="h-full px-4">
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          className="backdrop-blur-sm bg-blue-300/20 outline-1 outline-blue-400 shadow-blue-500/30 shadow-lg"
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-white font-[family-name:var(--font-plus-jakarta-sans)]"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
