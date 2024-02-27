"use client"
import Link from 'next/link';
import { fredoka  } from '../fonts'
import Navigation from './navigation';
import { useState } from 'react';


export default function Header() {
  const [activeTab ,setActiveTab] = useState<string>("top");
  const clickTab = (e : React.MouseEvent<HTMLDivElement>) => {
    const targetTab = e.currentTarget.dataset.tab;
    if (targetTab) {
      setActiveTab(targetTab);
    }
  }
  return (
    <header>
      <div className="w-11/12 mx-auto">
          <div data-tab="top"  onClick={clickTab} className={`${fredoka.className} my-6 text-xl font-semibold  bg-green-600 text-stone-100 px-3 py-1 rounded-lg w-32 text-center tracking-wider`}>
           <Link href="/" >
             M-Guide
            </Link>
          </div>
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} clickTab={clickTab}></Navigation>
      </div>
    </header>
  );
}
