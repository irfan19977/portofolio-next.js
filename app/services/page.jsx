"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: 'Joki Tugas Akademik',
    description: 'Menyediakan bantuan akademik dengan cara yang efisien, mulai dari penulisan laporan, penelitian, hingga tugas praktikum. Saya memastikan pekerjaan diselesaikan dengan kualitas tinggi dan sesuai dengan standar akademik yang berlaku.',
    href: "#"
  },
  {
    num: '02',
    title: 'Pembuatan Website',
    description: 'Pengembangan website profesional yang responsif dan user-friendly untuk berbagai keperluan, seperti website perusahaan, portofolio pribadi, dan e-commerce.', 
    href: "#"
  },
  {
    num: '03',
    title: 'Service Komputer dan Perbaikan Hardware',
    description: 'Layanan perbaikan dan perawatan komputer yang meliputi perbaikan hardware, optimasi sistem, dan pemeliharaan software. Dengan pengalaman yang mendalam, saya dapat menangani berbagai masalah komputer untuk memastikan perangkat tetap dalam kondisi terbaik.'
    , href: "#"
  },

];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((services, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
               {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent 
                  group-hover:text-outline-hover transition-all duration-500">{services.num}</div>
                  <Link href={services.href} className="w-[70px] h-[70px] rounded-full bg-white 
                  group-hover:bg-accent transition-all duration-500 flex 
                  justify-center items-center hover:-rotate-45 ">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white 
                group-hover:text-accent transition-all duration-500 ">{services.title}</h2>
                <p className="text-white/60">{services.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services