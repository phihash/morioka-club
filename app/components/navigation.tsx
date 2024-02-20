"use client"
import React from 'react'
import Link from 'next/link';
import { fredoka ,noto_sans_jp ,m_plus_1p } from '../fonts'
import { useState } from 'react';

const Navigation : React.FC  = () => {
  const [activeTab ,setActiveTab] = useState(null)
  const clickTab = (e : any) => {
    setActiveTab(e.currentTarget.dataset.tab)
  }
  return (
    <nav className="text-sm">
      <div className='flex overflow-x-auto'>
        <Link href="/about">
          <div data-tab="about" onClick={clickTab} className={(`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 p-3 w-max flex-none ${activeTab == "about" ? "border-b-2 border-b-lime-600 text-slate-800" : ""}  `)}>
              盛岡について
          </div>
          </Link>
          <Link href="/food">
          <div data-tab="food" onClick={clickTab} className={(`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 p-3 w-max flex-none  ${activeTab == "food" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `)}>
              食べ物
          </div>
          </Link>
          <Link href="/link">
          <div data-tab="link" onClick={clickTab} className={(`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 p-3 w-max flex-none ${activeTab == "link" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `)}>
              リンク
          </div>
          </Link>
        </div>
      </nav>
  )
}

// interface NavigationProps {
//   activeTab: string;
// }

export default Navigation
