import Link from 'next/link';
import { fredoka ,noto_sans_jp ,m_plus_1p } from '../fonts'
import Navigation from './navigation';

export default function Header() {
  return (
    <header>
      <div className="container mx-auto">
          <div className={`${fredoka.className} text-xl font-semibold my-6 ml-6 bg-green-600 text-stone-100 px-3 py-1 rounded-lg w-32 text-center tracking-wider`}>
          <Link href="/" >
            M-Guide
            </Link>
          </div>
      <Navigation activeTab='s'></Navigation>
      </div>

    </header>
  );
}
