import React from 'react'

const Footer = () => {
  return (
    <div id="hero" className="relative flex flex-col items-center justify-center gap-y-8 border-t border-dashed bg-slate-900 bg-[url('/assets/sui.svg')] bg-cover bg-repeat px-6 pb-32 pt-12 sm:px-24 md:px-40">
      <h2 className="max-w-4xl text-center text-3xl font-bold text-white drop-shadow sm:text-4xl">
        <span className="text-sky-500">$BLUB</span> available for trading on Sui
      </h2>
      <div className="flex items-center justify-center gap-x-4">
        <a href="https://suivision.xyz/myspace?feature=Swap" target="_blank" rel="noreferrer">
          <img src="/assets/suivision.png" alt="" className="w-14 rounded-xl bg-blue-800 p-2 shadow-md shadow-blue-200/10 transition hover:scale-125" />
        </a>
        <a href="https://7k.ag" target="_blank" rel="noreferrer" className="max-w-14">
          <img src="/assets/ag7k.png" alt="" className="w-[52px] rounded-xl bg-blue-800 p-2 shadow-md shadow-blue-200/10 transition hover:scale-125" />
        </a>
        <a href="https://app.cetus.zone/swap?from=0x2::sui::SUI&amp;to=0xfa7ac3951fdca92c5200d468d31a365eb03b2be9936fde615e69f0c1274ad3a0::BLUB::BLUB" target="_blank" rel="noreferrer">
          <img src="/assets/cetus.png" alt="" className="w-14 rounded-xl bg-blue-800 p-2 shadow-md shadow-blue-200/10 transition hover:scale-125" />
        </a>
        <a href="https://app.scallop.io/swap" target="_blank" rel="noreferrer" className="max-w-14">
          <img src="/assets/scallop.png" alt="" className="w-14 rounded-xl bg-blue-800 p-2 shadow-md shadow-blue-200/10 transition hover:scale-125" />
        </a>
        <a href="https://hop.ag/swap/SUI-BLUB?ref=blub" target="_blank" rel="noreferrer">
          <img src="/assets/hop.jpg" alt="" className="w-14 rounded-xl bg-blue-800 p-2 shadow-md shadow-blue-200/10 transition hover:scale-125" />
        </a>
        <a href="https://app.turbos.finance/#/trade?input=0x2::sui::SUI&amp;output=0xfa7ac3951fdca92c5200d468d31a365eb03b2be9936fde615e69f0c1274ad3a0::BLUB::BLUB" target="_blank" rel="noreferrer">
          <img src="/assets/turbos.webp" alt="" className="w-14 rounded-xl bg-blue-800 p-2 shadow-md shadow-blue-200/10 transition hover:scale-125" />
        </a>
      </div>
      <div className="absolute bottom-0 right-0 flex w-full flex-col items-center justify-center gap-x-4 gap-y-2 overflow-hidden bg-sky-400 p-2 text-center sm:flex-row">
        <p className="hidden text-sm sm:block">BLUB &copy; 2024. ALL RIGHTS RESERVED.</p>
        <div className="flex items-center gap-x-2">
          <a target="_blank" href="https://x.com/BlubFish380130?s=09" rel="noreferrer" className="border-r pr-2">
            <img src="/assets/x.svg" alt="" className="w-6" />
          </a>
          <a target="_blank" href="https://t.me/BlubFishOnSol" rel="noreferrer">
            <img src="/assets/telegram.svg" alt="" className="w-6" />
          </a>
        </div>
        <a className="mt-2 flex items-center gap-x-2 sm:mt-0" rel="noreferrer" href="#">
          <p className="block text-sm">MEDIA LIBRARY</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="size-4">
            <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}



export default Footer