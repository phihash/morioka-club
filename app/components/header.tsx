import Link from 'next/link';
import { fredoka ,noto_sans_jp ,m_plus_1p } from '../fonts'
import Navigation from './navigation';

export default function Header() {
  return (
    <header>
      <div className="w-11/12 mx-auto">
          <div className={`${fredoka.className} my-6 text-xl font-semibold  bg-green-600 text-stone-100 px-3 py-1 rounded-lg w-32 text-center tracking-wider`}>
           <Link href="/" >
             M-Guide
            </Link>
          </div>
          <Navigation></Navigation>
      </div>

    </header>
  );
}
