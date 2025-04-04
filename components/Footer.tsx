import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full">
      <div className="padding-x py-4 bg-danger flex justify-between items-center">
        {/* Search */}
        <Image src={"/search.svg"} alt="search" width={40} height={40} />

        {/* Customer Services (نازلة للأسفل) */}
        <Link
          href={"#"}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        >
          <Image
            src={"/customer.png"}
            alt="Customer Services"
            width={70} // تكبيرها قليلًا مثل الصورة
            height={70}
            className="drop-shadow-lg" // لإضافة ظل احترافي
          />
        </Link>

        {/* Cart */}
        <Link href={"#"}>
          <Image src={"/cart.svg"} alt="Cart" width={40} height={40} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
