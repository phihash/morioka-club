import Link from 'next/link';

export default function Header() {
  return (
<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap pt-16 flex-col md:flex-row items-center">
    <Link legacyBehavior href="/">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="text-xl font-bold">Morioka Guide</span>
    </a>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link legacyBehavior href="/about"><a className="font-bold text-gray-900  hover:text-gray-900">About</a></Link>
    </nav>
  </div>
</header>
  );
}
