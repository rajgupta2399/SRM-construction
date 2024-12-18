import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark sm:mt-3">
      <div className="w-28 h-auto md:w-32 md:h-auto mr-2 md:mr-4">
        <Image
          src="https://brandkiln.com/static/media/BK_white-e1656676473666-300x72.3ebdd61d5c3d2488a147.png"
          alt="CodeBucks logo"
          layout="intrinsic"
          unoptimized
          width={300} // Intrinsic width of the original image
          height={72} // Intrinsic height of the original image
        />
      </div>
      {/* <span className="font-bold dark:font-semibold text-lg md:text-xl">
        SRM Construction
      </span> */}
    </Link>
  );
};

export default Logo;
