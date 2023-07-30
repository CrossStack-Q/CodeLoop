"use client"

import React, { useState } from 'react'
import TracksButton from '@/components/UI/TracksButton'

type Props = {}

function page({ }: Props) {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleButtonClick = (index: any) => {
        setActiveIndex(index);
    };

    return (
        <main className="flex min-h-screen flex-col bg-[#F7F9FA] items-center justify-between p-8">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-sans text-sm lg:flex">

      

            <h1 className='text-5xl font-semibold p-2'>
                What is your learning goal?
            </h1>
            <h2 className='text-4xl font-semibold p-2'>
                Explore all tracks
            </h2>
            <p className='font-semibold px-2 -mt-1 mb-4 text-base'>
                Find the right one by choosing area of knowledge okay .
            </p>
            <div className='flex flex-wrap'>
                <TracksButton name="All Tracks" count={2} isActive={activeIndex === 0} onClick={() => handleButtonClick(0)} />

                <TracksButton name="All Tracks" count={2} isActive={activeIndex === 1} onClick={() => handleButtonClick(1)} />

                <TracksButton name="All Tracks" count={2} isActive={activeIndex === 2} onClick={() => handleButtonClick(2)} />

                <TracksButton name="All Tracks" count={2} isActive={activeIndex === 3} onClick={() => handleButtonClick(3)} />

                <TracksButton name="All Tracks" count={2} isActive={activeIndex === 4} onClick={() => handleButtonClick(4)} />
            </div>







        </div>
      </main>
    )
}

export default page