"use client"

import React, { useEffect, useState } from 'react'

type Props = {
  name: String,
  count: Number,
  isActive: boolean;
  onClick : () => void;
}

const TracksButton = ({name,count ,isActive, onClick}: Props) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(true);
    // Call the onClick handler passed from the parent component
    onClick();
  };

  useEffect(() => {
    
  }, [active])
  
  return (
    <div
    onClick={handleClick}
    className={`${
      isActive ? 'border-purple-400' : 'border-gray-200'
    } rounded-full bg-white flex border-2 max-w-fit px-2 py-1 m-1 cursor-pointer`}>

      <p>
      {name}{' '}&nbsp;
      <span className={` ${isActive ? 'bg-purple-400' : 'bg-gray-200'} ${isActive ? 'text-white' : 'text-black'} px-1 rounded-sm text-sm `}>
        {count.toString()}
      </span>
      </p>
    </div>
  )
}

export default TracksButton