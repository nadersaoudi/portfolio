import { X } from "lucide-react";
import React, { FC } from "react";
import Logo from "./Logo";
import { NavbarLinks } from "@/constants";
import Link from "next/link";
import SocialLink from "./landing-page-components/SocialLink";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  pathName: string;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose, pathName }) => {
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
  return (
    <div
      className={`fixed inset-y-0 right-0 z-50 min-w-72 bg-bodyColor border-l border-l-hoverColor/20  transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }  hoverEffect`}
      ref={sidebarRef}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="hover:text-red-600 hoverEffect"
          aria-label="Close Sidebar"
        >
          <X />
        </button>
      </div>
      <nav className="flex flex-col px-5 gap-7 text-sm uppercase tracking-wide font-medium mt-2">
        <Logo title="Nader" subtitle="." />
        {NavbarLinks.map((link) => (
          <Link
            href={link.href}
            key={link.title}
            onClick={onClose}
            className={`hover:text-hoverColor hoverEffect ${
              link.href === pathName && "text-hoverColor"
            }`}
          >
            {link.title}
          </Link>
        ))}
        <Link
          href={"/resume.pdf"}
          target="_blank"
          className="text-sm bg-lightSky/10 px-4 py-2 rounded border  border-hoverColor/10 hover:border-hoverColor  hover:bg-hoverColor hover:text-black hoverEffect w-24"
        >
          Hire me
        </Link>
        <SocialLink />
      </nav>
    </div>
  );
};

export default Sidebar;
