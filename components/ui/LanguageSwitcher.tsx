"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

const LanguageSwitcher = () => {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  // تغيير اللغة عند الضغط على الزر
  const toggleLanguage = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="px-3 py-1 bg-sky-600 rounded-md text-white text-lg font-semibold cursor-pointer
                 hover:bg-sky-700 transition duration-200 fixed bottom-20 left-2 z-50"
      initial={{ opacity: 0, x: -50 }} // يبدأ مخفي وتحته
      animate={{ opacity: 1, x: 0 }} // يظهر بسلاسة للأعلى
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {locale === "ar" ? "EN" : "AR"}
    </motion.button>
  );
};

export default LanguageSwitcher;
