import React from 'react'

const Main = () => {

    return (
        <div className='overflow-hidden'>
            <div className='flex justify-between px-10 md:px-5 lg:px-24 xl:pl-52 xl:pr-44'>
                <img
                    src="/images/intro-cube1.png"
                    className='mt-5 animate-slide-left w-20 h-20 md:w-[74px] md:h-[73.2px] md:mt-11 lg:mt-0'
                    alt="cube"
                />
                <img
                    src="/images/intro-stairs1.png"
                    className='mt-10 md:mt-0 ml-28 sm:ml-0 animate-slide-right w-[170px] h-[170px] md:w-[200px] md:h-[260.9px]'
                    alt="stairs"
                />
            </div>

            <div className='flex flex-col justify-center items-center w-full'>
                <div className='z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <h1 className='font-extrabold tracking-[0.5px] lg:leading-[166px] text-8xl lg:text-[160px] xl:text-[193px] -mt-12 md:-mt-20 lg:-mt-32 xl:-mt-44 hover:scale-110 transition-all duration-200 animate-slide-left cursor-pointer'>
                        CASH
                    </h1>
                </div>
                <div className='z-20 w-1/4 mt-6 md:mt-3 absolute -ml-8 md:ml-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 animate-slow-fade'>
                    <img
                        className='min-w-[200px]'
                        src="/images/intro-phone1.png"
                        alt="phone"
                    />
                </div>
                <div className='z-30 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <h1 className='font-extrabold tracking-[0.5px] lg:leading-[166px] text-8xl lg:text-[160px] xl:text-[193px] mt-28 md:mt-32 hover:scale-110 transition-all duration-200 animate-slide-right cursor-pointer'>
                        APP
                    </h1>
                </div>
            </div>

            <div className='absolute bottom-0 w-full overflow-hidden'>
                <div className='flex justify-between px-0 md:px-5 lg:px-24 mt-[90px] md:pl-5 pl-7 xl:pl-[240px] lg:pr-[30px] xl:pr-[100px] 2xl:pr-[240px] 2xl:pl-[240px]'>
                    <img
                        src="/images/intro-cubes1.png"
                        className='animate-slide-left mb-12 md:mt-4 mt-[180px] w-[110px] h-[103.273px] md:w-[188px] md:h-[176.5px]'
                        alt="cubes"
                    />
                    <div className='self-end animate-slide-right md:animate-slide-up overflow-hidden'>
                        <img
                            src="/images/intro-pillar1.png"
                            className='ml-20 2xsmall:ml-28 xsmall:ml-44 small:ml-56 md:mr-[40px] lg:mr-[90px] mt-10 md:mt-0 w-[230px] h-[199.3px] md:w-[280px] md:h-[242.7px] rotate-[290deg] md:rotate-0'
                            alt="pillar"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main