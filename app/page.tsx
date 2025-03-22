import Container from "@/components/Container";
import HomeDescription from "@/components/portfolio-components/HomeDescription";
import Photo from "@/components/portfolio-components/Photo";
import SocialLink from "@/components/portfolio-components/SocialLink";
import Statistics from "@/components/portfolio-components/Statistics";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex flex-col h-full md:h-[calc(100vh-200px)] items-center justify-center md:items-start gap-5 md:gap-7 text-center md:text-start">
        <div>
          <h3 className="font-semibold  text-white/70 tracking-wider mb-1">
            Software Engineer
          </h3>
          <h2 className="text-3xl md:text-5xl mb-2">Hello I&apos;m</h2>
          <h1 className="text-5xl md:text-7xl mb-2 text-lightSky tracking-normal ">
            Nader Saoudi
          </h1>
        </div>

        <div className="w-full h-[170px] md:h-[140px] relative">
          <HomeDescription />
        </div>
        <div>
          <a
            className="bg-transparent rounded-full border border-lightSky/50 flex items-center px-6 py-2.5 gap-2 text-sm text-lightSky hover:bg-hoverColor hover:text-black hoverEffect "
            download
            href={"/resume.pdf"}
          >
            Download CV <Download className="w-4 h-4" />
          </a>
        </div>

        <SocialLink />
        <Statistics />
      </div>
      <Photo />
    </Container>
  );
}
