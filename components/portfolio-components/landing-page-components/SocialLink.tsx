import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";

const socialLink = [
  {
    title: "Github",
    icon: <Github className="w-5 h-5" />,
    link: "https://github.com/nadersaoudi",
  },
];

const SocialLink = () => {
  // const sidebarRef = useRef(null);
  return (
    <div className="flex items-center gap-3">
      {socialLink.map((item) => (
        <TooltipProvider key={item.title}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={item.link}
                className="text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:text-lightSky hoverEffect"
              >
                {item.icon}
              </Link>
            </TooltipTrigger>

            <TooltipContent className="text-xs rounded-[0.5rem] uppercase font-medium ">
              {item.title}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default SocialLink;
