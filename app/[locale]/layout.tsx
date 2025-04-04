import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Tajawal, Livvic } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { getTranslations } from "next-intl/server";

// تحميل الخطوط مع متغيرات CSS
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
});
const livvic = Livvic({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-livvic",
});

// 🎯 **إضافة metadata الديناميكية مع favicon**
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(["en", "ar"], locale)) notFound();

  const t = await getTranslations({ locale, namespace: "SEO" });

  return {
    title: t("title"),
    description: t("description"),
    keywords:
      "ترجمة معتمدة, دعاية وإعلان, تقنية معلومات, تسويق إلكتروني, خدمات رجال الأعمال, طباعة مخططات, هدايا دعائية, Certified Translation, Advertising, IT Services, Digital Marketing, Business Services, Printing, Promotional Gifts",
    robots: "index, follow",
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://transia.com",
      siteName: "Transia",
      locale,
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // تأكد من صحة اللغة
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const isArabic = locale === "ar";
  const direction = isArabic ? "rtl" : "ltr";
  const fontClass = isArabic ? tajawal.className : livvic.className;

  return (
    <html lang={locale} className={fontClass} dir={direction}>
      <body>
        <NextIntlClientProvider>
          <LanguageSwitcher />
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
