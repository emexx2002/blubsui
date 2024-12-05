import React from 'react'


const Tokenomics = () => {
    return (
        <div id="tokenomics" className="relative border-t-2 border-dashed bg-[url('/assets/sui.svg')] bg-repeat">
            <img src="/assets/shit-min.png" className="absolute right-4 top-0 h-48 sm:right-20 sm:h-96" alt="" />
            <div className="relative mx-auto flex max-w-4xl flex-col items-start justify-center gap-y-8 px-5 py-32 sm:px-24 md:px-40">
                <div className="relative">
                    <h1 className="text-5xl font-extralight text-amber-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-7xl">$TOKENOMICS</h1>
                </div>
                <div className="flex flex-col items-start gap-x-4 text-white">
                    <p className="text-3xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-5xl">TOKEN SUPPLY</p>
                    <p className="text-xl font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-4xl">1,000,000,000 $BLUB</p>
                    <small className="font-medium drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-2xl">(0 T)</small>
                </div>
                <div className="mt-4"></div>
                <div className="flex items-center gap-x-4 text-white">
                    <p className="text-5xl font-extrabold text-amber-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">75%</p>
                    <p className="font-display font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">LP ( CEX &amp; DEX )</p>
                </div>
                <div className="flex items-center gap-x-4 text-white">
                    <p className="text-5xl font-extrabold text-amber-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">10%</p>
                    <p className="font-display font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">GROWTH (MKT &amp; MEDIA)</p>
                </div>
                <div className="flex items-center gap-x-4 text-white">
                    <p className="text-5xl font-extrabold text-amber-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">15%</p>
                    <p className="font-display font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">CONTRIBUTORS *</p>
                </div>
                <p className="-translate-y-4 font-display text-base italic text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-lg">* Vested linearly over 3 years starting June 29th, 2024.</p>
            </div>
        </div>
    )
}



export default Tokenomics