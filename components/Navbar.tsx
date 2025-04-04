import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

// import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const t = useTranslations("Nav");
  return (
    <nav className="flex justify-between items-center padding-x py-10 bg-white">
      {/* أيقونات السوشيال ميديا */}
      <div className="flex items-center justify-center sm:flex-row flex-col gap-3">
        <Link
          href="#"
          className="p-2 rounded-md bg-black transition-all duration-200 hover:opacity-70"
        >
          <Image src="/tiktok.svg" alt="TikTok" width={44} height={44} />
        </Link>

        <Link
          href="#"
          className="p-2 rounded-md bg-[#5851db] transition-all duration-200 hover:opacity-70"
        >
          <Image src="/insta.svg" alt="Instagram" width={44} height={44} />
        </Link>
        <Link
          href="#"
          className="p-2 rounded-md bg-black transition-all duration-200 hover:opacity-70"
        >
          <Image src="/x.svg" alt="X" width={44} height={44} />
        </Link>
        <Link
          href="#"
          className="p-2 rounded-md bg-[#fffc00] transition-all duration-200 hover:opacity-70"
        >
          <Image src="/snap.svg" alt="Snapchat" width={44} height={44} />
        </Link>
      </div>

      {/* اللوجو */}
      <div className="flex justify-center items-center w-full">
        <Image
          src="/logo.png"
          alt="Logo"
          width={350}
          height={450}
          className="object-cover sm:w-44 w-32 h-auto"
        />
      </div>

      {/* زر تغيير اللغة */}
      {/* <LanguageSwitcher /> */}
      <div className="flex justify-center items-center">
        <h1 className="sm:text-7xl text-4xl text-[#54595F] font-bold">
          {t("title")}
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
