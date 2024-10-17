"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import Link from "next/link";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav className="bg-gray-800 text-white py-3  fixed top-0 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center">
          <h1 className="text-3xl font-bold">
            <Link href="/">Lounge</Link>
          </h1>
        </div>

        {/* Navbar Menu in the center */}
        <div className="flex-1 flex justify-center">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Code Generation</HoveredLink>
                <HoveredLink href="/interface-design">Dev Feed</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="About">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Lounge Team</HoveredLink>
                <HoveredLink href="/interface-design">FAQ</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>

        {/* Buttons on the right */}
        <div className="flex items-center space-x-4">

          <a
            href="https://github.com/Cosmodocus/lounge-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverBorderGradient>Dev Github</HoverBorderGradient>
          </a>
          <a
            href="https://github.com/AaronSosaRamos/ai-backend-for-lounge"
            target="_blank"
            rel="noopener noreferrer"
          >
           <HoverBorderGradient>AI Github</HoverBorderGradient>
          </a>
          <Link href="/signup">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
