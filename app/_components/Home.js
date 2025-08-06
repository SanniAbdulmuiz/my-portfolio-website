import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";

function Logo() {
  return (
    <Link href="/" className="flex gap-4 z-10">
      <HomeIcon className="w-8 h-8" />

      <span className="text-lg sm:text-3xl font-semibold text-primary-100">
        Sanni Abdulmuiz A.
      </span>
    </Link>
  );
}

export default Logo;
