import Link from 'next/link';
import { fredoka } from '../fonts'

export default function Header() {
  return (
<header className="">
  <div className="sm:container mx-auto">
      <div className={`${fredoka.className} text-xl font-semibold my-6 ml-3 bg-green-600 text-stone-100 px-3 py-1 rounded-lg w-32 text-center tracking-wider`}>
       <Link href="/" >
        M-Guide
        </Link>
      </div>
    <nav className="ml-3">
      <Link href="/about"><span className="">盛岡について</span></Link>
    </nav>
  </div>
</header>
  );
}
