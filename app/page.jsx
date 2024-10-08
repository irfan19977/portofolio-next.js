"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";

const Home = () => {
  // Event handler untuk download CV
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf"; // Path ke file CV di direktori publik
    link.download = "Irfan_Adi_Prastyo_CV.pdf"; // Nama file ketika diunduh
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
  <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between 
        xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">
              Hello I`m <br /> <span className="text-accent">Irfan Adi Prastyo</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">I enjoy coding, managing computer networks, watching Donghua, and learning new things.</p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2"  onClick={handleDownload}>
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6 " iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center
                items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
  
};

export default Home