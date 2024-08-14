"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import {BsArrowUpRight, BsGithub} from "react-icons/bs";

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Backend",
    title: "Website PPDB Sekolah",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempore neque perspiciatis repellat quisquam architecto ut obcaecati quis minima incidunt!",
    stack: [{name: "Html 5"}, {name: "Css 3"}, {name: "Javascript"}, {name: "PHP"}],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Backend",
    title: "Website SIAKAD Sekolah",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempore neque perspiciatis repellat quisquam architecto ut obcaecati quis minima incidunt!",
    stack: [{name: "Html 5"}, {name: "Css 3"}, {name: "Javascript"}, {name: "PHP"}],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  
  const handleSlideChange = (swiper) => {
    // mengambil semua slide index
    const currentIndex = swiper.activeIndex;
    // update project state
    setProject(projects[currentIndex]);
  }
  return (
    <motion.section initial= {{ opacity: 0 }} animate= {{ opacity: 1, transition: {delay:2.4, duration: 0.4, ease: "easeIn"}, }} 
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 ">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex felx-col 
          xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-[30px] h-[50%] ">
              {/* Outline Nomor */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent 
              transition-all duration-500 capitalize ">
                {project.category} project
              </h2>
              {/* Project Description */}
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length -1 && ","}
                    </li>
                  )
                })}
              </ul>
              <div className="border border-white/20"></div>
              {/* Live Project */}
             <div className="flex items-center gap-4">
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[68px] h-[68px] rounded-full bg-white/5 flex
                    justify-center items-center group ">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              {/* Github Project */}
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[68px] h-[68px] rounded-full bg-white/5 flex
                    justify-center items-center group ">
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
             </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return( 
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}

              {/* Slider Button */}
              <WorkSliderBtns />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>

  )
}

export default Work