import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 sm:gap-3 md:gap-4 z-10">
      <Image
        src={logo}
        height={40}
        width={40}
        quality={100}
        alt="The Wild Oasis logo"
        className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16"
      />
      <span className="text-sm sm:text-lg md:text-xl lg:text-3xl font-semibold text-primary-100 whitespace-nowrap">
        Sanni Abdulmuiz A.
      </span>
    </Link>
  );
}

export default Logo;
