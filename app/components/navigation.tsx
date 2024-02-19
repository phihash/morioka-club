import React from 'react'
import Link from 'next/link';
import { fredoka ,noto_sans_jp ,m_plus_1p } from '../fonts'

const Navigation : React.FC<NavigationProps>  = ({activeTab}) => {
  return (
    <nav className="ml-8 text-sm">
        <div className='flex'>
        <Link href="/about">
          <div className={(`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 p-3 border-b-4  border-b-lime-600 `)}>
              盛岡について
          </div>
          </Link>
          <Link href="/food">
          <div className={(`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 p-3 border-b-4  border-b-lime-600 `)}>
              食べ物
          </div>
          </Link>
          <Link href="/link">
          <div className={(`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 p-3 border-b-4  border-b-lime-600 `)}>
              リンク
          </div>
          </Link>
        </div>
      </nav>
  )
}

interface NavigationProps {
  activeTab: string;
}

export default Navigation
