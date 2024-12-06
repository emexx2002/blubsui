import React from 'react'

const Hero = () => {
    return (
        <div className="relative h-full min-h-screen bg-gradient-to-b from-[#6bdaff] to-[#00bfff] text-xl">
            <div id="hero" style={{ backgroundImage: 'url(/backg.png)' }} className="relative z-10 h-screen w-screen overflow-hidden bg-repeat px-6 sm:px-24 md:px-40">
                <img src="/assets/gann-min.png" className="absolute -top-12 right-3/4 h-80 animate-marquee-long sm:-top-16 sm:right-40 sm:h-72 sm:scale-x-100" alt="" />
                <img src="/assets/bubbles.png" className="absolute -bottom-8 right-2 rotate-[20deg] opacity-100 sm:-right-16" alt="" />
                <img src="/assets/tesouro.png" className="absolute -bottom-6 -left-0 w-1/3 overflow-hidden sm:w-[220px]" alt="" />
                <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2">
                    <div className="flex flex-col items-center justify-center">
                        <img src="/assets/hero2.png" className="w-[94%] sm:w-[800px]" alt="" />
                        <h1 className="-translate-y-0.5 px-1 text-center text-3xl tracking-tight text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-2xl md:text-3xl">
                            A Dirty Fish in the Waters <span className="block sm:hidden"></span> of the Sol Ocean
                        </h1>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 flex items-center gap-x-2 p-2">
                    <a target="_blank" href="https://x.com/BlubFishOnSol?t=fX_x1YzGEKML-CxlxkY65A&s=09" rel="noreferrer" className="border-r border-sky-50 pr-2">
                        <img src="/assets/x.svg" alt="" className="w-14 sm:w-20" />
                    </a>
                    <a target="_blank" href="https://t.me/BlubFishOnSol" rel="noreferrer">
                        <img src="/assets/telegram.svg" alt="" className="w-14 sm:w-20" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero
