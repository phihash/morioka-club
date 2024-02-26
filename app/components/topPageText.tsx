import React from 'react'

const topPageText  : React.FC<TopPageTextProps> = ({title,content}) => {
  return (
    <div className='md:px-10 md:py-10 px-8 py-8'>
      <h2 className="text-xl font-bold">{title}</h2>
       <p className="mt-4 leading-7">{content}</p>
    </div>
  )
}

interface TopPageTextProps{
  title: string;
  content: string;
}

export default topPageText
