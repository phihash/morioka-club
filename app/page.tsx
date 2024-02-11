import Image from "next/image";
import localImage from "../public/sushi.png";

export default function Home() {
  return (
    <div>
      <Image src={localImage} alt="美味しそうなお寿司" />
      <p className="mt-8 text-center text-lg font-bold">すし清次郎 フェザン店</p>
    </div>

  );
}
