"use client";

import { servicesData } from "@/data/data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Services = () => {
  const t = useTranslations("Services");

  return (
    <section
      className="relative padding-x py-20 min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/background.svg')" }}
    >
      <div className="container mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 place-items-center"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {servicesData.map((service) => (
            <motion.div key={service.id} variants={cardVariants}>
              <Link
                href="#"
                className="relative flex flex-col items-center justify-center bg-white rounded-3xl shadow-lg
               w-[250px] h-[250px] transition-transform duration-300 hover:scale-110"
                style={{ backgroundColor: service.bgColor }}
              >
                {/* أيقونة الخدمة */}
                <div className="flex-center w-full">
                  <Image
                    src={service.icon}
                    alt={t(service.key)}
                    width={150}
                    height={150}
                    className="object-cover h-auto"
                  />
                </div>

                {/* زر النص */}
                <div className="absolute bottom-[-15px] px-6 py-2 bg-black text-white text-xl font-semibold rounded-full shadow-md">
                  {t(service.key)}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
