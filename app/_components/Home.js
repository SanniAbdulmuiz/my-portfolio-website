import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* {<Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" />} */}
      <Image
        src={logo}
        height={40}
        width={40}
        quality={100}
        alt="The Wild Oasis logo"
        className="sm:h-[60px] sm:w-[60px]"
      />

      <span className="text-lg sm:text-3xl font-semibold text-primary-100">
        Sanni Abdulmuiz A.
      </span>
    </Link>
  );
}

export default Logo;
