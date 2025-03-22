"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Container from "../Container";
import Sidebar from "./Sidebar";

import Logo from "./Logo";

import { NavbarLinks } from "@/constants";

import { Menu } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  return (
    <header className="border-b border-b-hoverColor/10 sticky top-0 z-50 bg-bodyColor">
      <Container className="py-5 flex items-center justify-between">
        <Logo title="Nader" subtitle="." />
        <div className="hidden md:inline-flex items-center gap-7 text-sm uppercase tracking-wide font-medium">
          {NavbarLinks.map((link) => (
            <Link
              href={link.href}
              key={link.title}
              className={`hover:text-hoverColor hoverEffect relative group overflow-x-hidden ${
                pathname === link.href && "text-hoverColor"
              }`}
            >
              {link.title}
              <span
                className={`w-full h-px bg-hoverColor inline-block absolute left-0 bottom-0 group-hover:translate-x-0 hoverEffect ${
                  pathname === link.href
                    ? "translate-x-0"
                    : "translate-x-[105%]"
                }`}
              ></span>
            </Link>
          ))}
          <Link
            href={"/resume.pdf"}
            target="_blank"
            className="text-sm bg-lightSky/10 px-4 py-2 rounded border  border-hoverColor/10 hover:border-hoverColor  hover:bg-hoverColor hover:text-black hoverEffect"
          >
            Hire me
          </Link>
        </div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="inline-flex md:hidden "
        >
          <Menu className="hover:text-hoverColor hoverEffect" />
        </button>
      </Container>
      <div className="md:hidden">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          pathName={pathname}
        />
      </div>
    </header>
  );
};

export default Header;
