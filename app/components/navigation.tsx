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
          <Link href="/food">
          <div data-tab="food" onClick={clickTab} className={(`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 p-3 w-max flex-none  ${activeTab == "food" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `)}>
              食べ物
          </div>
          </Link>
          <Link href="/tour">
          <div data-tab="tour" onClick={clickTab} className={(`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 p-3 w-max flex-none  ${activeTab == "tour" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `)}>
            旅行
          </div>
          </Link>
          <Link href="/souvenir">
          <div data-tab="souvenir" onClick={clickTab} className={(`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 p-3 w-max flex-none  ${activeTab == "souvenir" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `)}>
              おみやげ
          </div>
          </Link>
          <Link href="/culture">
          <div data-tab="culture" onClick={clickTab} className={(`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 p-3 w-max flex-none ${activeTab == "culture" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `)}>
              文化
          </div>
          </Link>
          <Link href="/traffic">
          <div data-tab="traffic" onClick={clickTab} className={(`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 p-3 w-max flex-none ${activeTab == "traffic" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `)}>
              交通
          </div>
          </Link>
          <Link href="/toilet">
          <div data-tab="traffic" onClick={clickTab} className={(`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 p-3 w-max flex-none ${activeTab == "traffic" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `)}>
              トイレ
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
