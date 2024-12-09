"use client";

import {FaHtml5, FaCss3, FaLaravel, FaFigma, FaGithub, FaNetworkWired, FaPhp, FaWordpress, FaCode, FaDatabase, FaTools,} from "react-icons/fa";


const about = {
  title: "Tentang Saya",
  description: "Saya seorang yang memiliki latar belakang di bidang Teknologi Informasi, lulusan dari STMIK PPKIA Pradnya Paramita Malang. Saya memiliki pengalaman dalam pengembangan jaringan komputer, instalasi perangkat keras dan lunak, serta pemrograman web, terutama menggunakan Laravel. Selain itu, saya juga tertarik untuk berbagi pengetahuan dan mengajar di bidang IT. Saya selalu berusaha untuk terus belajar dan mengasah keterampilan saya, baik dalam mengembangkan solusi teknologi maupun dalam mengajar dan membimbing orang lain. Saya senang menghadapi tantangan baru dan berusaha memberikan yang terbaik di setiap kesempatan.",
  info: [
    {
      fieldName: "Nama",
      fieldValue: "Irfan Adi Prastyo"
    },
    {
      fieldName: "Email",
      fieldValue: "Irfanadiprasetyo27@gmail.com"
    },    
    {
      fieldName: "No. Telp",
      fieldValue: "0858 0273 3781"
    },
    {
      fieldName: "Kebangsaan",
      fieldValue: "Indonesian"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Bahasa",
      fieldValue: "Indonesia"
    },
  ]
}

const experience = {
  icon: "/assets/resume/badge.svg",
  title : "Pengalaman",
  description: "Sebagai seseorang yang baru saja menyelesaikan pendidikan D3 di bidang Teknologi Informasi, saya memiliki berbagai pengalaman yang telah membekali saya dengan keterampilan praktis dalam dunia teknologi. Pengalaman saya tidak hanya diperoleh melalui pendidikan formal, tetapi juga melalui kegiatan freelance dan proyek-proyek yang saya jalani sejak masa SMK hingga sekarang. Saya telah bekerja dalam berbagai bidang, mulai dari layanan servis komputer, pengembangan aplikasi web, hingga pengelolaan jaringan.",
  items: [
    {
      company: "CV Surabaya Cell",
      position: "Staf Administrasi Toko",
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
  title : "Pendidikan",
  description: "Saya memulai perjalanan pendidikan saya dengan menempuh SMK Teknik Komputer dan Jaringan, di mana saya mendapatkan dasar yang kuat dalam bidang jaringan komputer, instalasi perangkat keras dan lunak, serta pemrograman dasar. Pendidikan ini memberi saya keterampilan praktis yang saya terus kembangkan. Setelah itu, saya melanjutkan studi ke jenjang D3 di STMIK PPKIA Pradnya Paramita Malang, di mana saya lebih mendalami pengembangan perangkat lunak, jaringan komputer, dan pemrograman web. ",
  items: [
    {
      institution: "STMIK PPKIA Pradnya Paramita Malang",
      major: "D-3 Sistem Informasi",
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
      animate={{ opacity:1, transition: {delay: 1, duration: 0.4, ease: "easeIn"},
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="about">Tentang Saya</TabsTrigger>
              <TabsTrigger value="education">Pendidikan</TabsTrigger>
              <TabsTrigger value="experience">Pengalaman</TabsTrigger>
              <TabsTrigger value="skills">Skill</TabsTrigger>
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