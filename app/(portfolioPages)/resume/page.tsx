"use client";

import Container from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabContent } from "@/constants";
import { TabsContent } from "@radix-ui/react-tabs";
import { Briefcase, Calendar, Code2, GraduationCap, User } from "lucide-react";
import { motion } from "motion/react";

const tabMenu = [
  { title: "Experience", value: "experience", icon: Briefcase },
  { title: "Education", value: "education", icon: GraduationCap },
  { title: "Skills", value: "skills", icon: Code2 },
  { title: "About me", value: "about", icon: User },
];

// export default ResumePage;
export default function ResumePage() {
  return (
    <section className="flex flex-col justify-center text-white py-10">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="w-full"
        >
          <Tabs
            defaultValue="experience"
            className="w-full flex  flex-col md:flex-row gap-6 md:gap-10"
          >
            <TabsList className=" h-full flex flex-col bg-transparent md:w-64 gap-2 md:gap-4">
              {tabMenu.map((item) => (
                <TabsTrigger
                  key={item.value}
                  value={item.value}
                  className="bg-white/10  w-full py-2.5 text-white data-[sate-=active]:bg-hoverColor] hover:bg-lightSky/50 text-xs sm:text-sm rounded-[5px]"
                >
                  <div className="flex  items-center gap-1.5 md:w-[50%] md:gap-3">
                    <item.icon className="w-3 h-3 md:h-5 md:w-5" />
                    {item.title}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="flex-1 min-h-[400px]">
              <TabsContent value="experience">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-md md:text-2xl md:font-bold mb-6 text-lightSky"
                >
                  {tabContent.experience.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.experience.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 bg-lightSky/20 p-2 md:p-6"
                    >
                      <div className="flex justify-between gap-3 w-full items-start mb-4">
                        <div>
                          <h3 className="text-[10px] md:text-lg md:font-semibold">
                            {item.role}
                          </h3>
                          <p className="text-muted-foreground text-[9px] md:text-sm">
                            {item.company}
                          </p>
                        </div>
                        <div className="w-2/3 flex items-center justify-end text-muted-foreground">
                          <Calendar className="md:h-4 md:w-4 w-3 h-3 mr-2" />
                          <span className="text-[8px] md:text-xs">
                            {item.period}
                          </span>
                        </div>
                      </div>
                      <p className="mb-4 text-xs md:text-sm font-normal leading-7">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, i) => (
                          <Badge key={i} variant="secondary">
                            <span className="text-[10px]">{highlight}</span>
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="education">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-md md:text-2xl md:font-bold mb-6 text-lightSky"
                >
                  {tabContent.education.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.education.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 bg-lightSky/20 p-2 md:p-6"
                    >
                      <div className="flex justify-between gap-10 items-start mb-4">
                        <div>
                          <h3 className="text-[10px] md:text-lg md:font-semibold">
                            {item.degree}
                          </h3>
                          <p className="text-muted-foreground text-[10px] md:text-sm">
                            {item.institution}
                          </p>
                        </div>
                        <div className="w-2/3 flex items-center justify-end text-muted-foreground">
                          <Calendar className="md:h-4 md:w-4 w-3 h-3 mr-2" />
                          <span className="text-[8px] md:text-xs">
                            {item.period}
                          </span>
                        </div>
                      </div>
                      <p className="mb-4 text-[10px] md:text-sm">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-md md:text-2xl md:font-bold mb-6 text-lightSky"
                >
                  {tabContent.skills.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.skills.categories.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 bg-lightSky/20  p-6"
                    >
                      <h3 className="text-[xs] md:text-lg md:font-semibold">
                        {category.name}
                      </h3>
                      <p className="text-[11px] md:text-sm text-white/60 mb-4 font-normal leading-7">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary">
                            <span className="md:text-sm text-xs">{skill}</span>
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="about">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-md md:text-2xl md:font-bold mb-6 text-lightSky"
                >
                  {tabContent.about.title}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border rounded-lg border-lightSky/20 bg-lightSky/20 p-6"
                >
                  <p className="mb-6 text-sm md:text-lg">
                    {tabContent.about.bio}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm md:text-lg font-semibold mb-2">
                        Interests
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {tabContent.about.interests.map((interest, i) => (
                          <Badge key={i} variant="secondary">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm md:text-lg font-semibold mb-2">
                        Languages
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {tabContent.about.languages.map((language, i) => (
                          <Badge key={i} variant="secondary">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </Container>
    </section>
  );
}
