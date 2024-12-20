import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/assets/logo.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-22 h-12 md:w-32 md:h-auto mr-2 md:mr-4">
        <Image
          src={logo}
          alt="logo"
          layout="intrinsic"
          unoptimized
          width={60} // Intrinsic width of the original image
          height={60} // Intrinsic height of the original image
        />
      </div>
      <span className="font-semibold dark:font-semibold text-lg md:text-xl sm:hidden">SRM Construction</span>
    </Link>
  );
};

export default Logo;
