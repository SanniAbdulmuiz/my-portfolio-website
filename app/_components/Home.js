import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <HomeIcon className="w-6 h-6" />

      <span className="text-base sm:text-xl font-semibold text-primary-100">
        Sanni Abdulmuiz A.
      </span>
    </Link>
  );
}

export default Logo;
