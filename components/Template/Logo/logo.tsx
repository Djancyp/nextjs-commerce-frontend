import Image from "next/image";
import img from "@/assets/logo.png";
import Link from "next/link";

interface ImageLoader {
  src: string;
}
const Logo = () => {
  return (
    <Link
      href="/"
      className="absolute left-1/2 -translate-x-1/2 
            md:relative md:left-0 md:translate-x-0"
    >
      <Image
        src={img}
        alt="log"
        width={45}
        height={45}
        onLoad={() => <div>Loading</div>}
      />
    </Link>
  );
};
const myLoader = (src: any): string => {
  return src;
};
export default Logo;
