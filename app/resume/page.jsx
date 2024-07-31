"use client";

import {FaHtml5, FaCss3, FaLaravel, FaFigma, FaGithub, FaNetworkWired, FaPhp, FaWordpress, FaCode, FaDatabase, FaTools,} from "react-icons/fa";


const about = {
  title: "About me",
  description: "I am a graduate of STMIK PPKIA Pradnya Paramita Malang with a focus on computer networks and web development. With extensive experience in managing IT projects both independently and as part of a team, I am committed to continually developing my skills. I am ready to contribute effectively in a dynamic team, utilizing my knowledge and passion for technology to drive innovative solutions.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Irfan Adi"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 858 0273 3781"
    },
    {
      fieldName: "Experience",
      fieldValue: "1 Years"
    },
    {
      fieldName: "Email",
      fieldValue: "Irfanadiprasetyo27@gmail.com"
    },    
    {
      fieldName: "Nationality",
      fieldValue: "Indonesian"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languange",
      fieldValue: "Indonesia"
    },
  ]
}

const experience = {
  icon: "/assets/resume/badge.svg",
  title : "My Experience",
  description: "I have extensive experience in diagnosing and repairing computer issues, managing inventory, and assisting customers with their technical needs.",
  items: [
    {
      company: "CV Surabaya Cell",
      position: "Sales and Inventory Management Associate",
      duration: "2020-2021"
    },
    {
      company: "XComputer",
      position: "Computer Technician",
      duration: "2020-2020"
    },
  ]
}

const education = {
  icon: "/assets/resume/badge.svg",
  title : "My Education",
  description: "I have extensive experience in diagnosing and repairing computer issues, managing inventory, and assisting customers with their technical needs.",
  items: [
    {
      institution: "STMIK PPKIA Pradnya Paramita Malang",
      major: "Sistem Informasi",
      duration: "2021-2024"
    },
    {
      institution: "SMK Wiyata Mandala",
      major: "Teknik Komputer dan Jarigan",
      duration: "2017-2020"
    },
    
  ]
}

const skills = {
  title: "My Skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum porro reiciendis perferendis consequatur, nulla odio facere. Labore sunt dicta quibusdam.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaPhp />,
      name: "Php",
    },
    {
      icon: <FaLaravel />,
      name: "Laravel",
    },
    {
      icon: <FaWordpress />,
      name: "Wordpress",
    },
    {
      icon: <FaCode />,
      name: "Vs Code",
    },
    {
      icon: <FaDatabase />,
      name: "Xampp",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaGithub />,
      name: "Github",
    },
    {
      icon: <FaNetworkWired />,
      name: "Networking",
    },
    {
      icon: <FaTools />,
      name: "Troubleshooting Hardware & Software",
    },
  ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { easeIn, motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity:1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>

            {/* CONTENT */}
            <div className="min-h-[70vh] w-full ">
              {/* EXPERIENCE  */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((items, index) => {
                        return (
                          <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                            <span className="text-accent">{items.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">{items.position}</h3>
                            <div className="flex items-center gap-3">
                              {/* DOT */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                              <p className="text-white/60">{items.company}</p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* EDUCATION  */}
              <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((items, index) => {
                        return (
                          <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                            <span className="text-accent">{items.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">{items.major}</h3>
                            <div className="flex items-center gap-3">
                              {/* DOT */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                              <p className="text-white/60">{items.institution}</p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* SKILLS  */}
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                      {skills.skillList.map((skill, index) => {
                        return (
                          <li key="{index}">
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              {/* ABOUT ME  */}
              <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px] ">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] ">
                    {about.info.map((item, index) => {
                      return (
                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-white/60">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
    </motion.div>
  )
}

export default Resume