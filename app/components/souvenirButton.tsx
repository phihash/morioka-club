import React from 'react'
import { noto_sans_jp } from '../fonts'


const souvenirButton : React.FC<SouvenirButtonProps>  = ({name}) => {
  return (
    <div className={`${noto_sans_jp.className} tracking-widest font-semibold border-2 border-emerald-500  w-max border py-1 px-2 rounded-2xl text-xs text-emerald-500 hover:bg-emerald-100 cursor-pointer`}>
      {name}
    </div>
  )
}

interface SouvenirButtonProps {
  name: string;
}

export default souvenirButton
