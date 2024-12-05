import React from 'react'

const Faq = () => {
  return (
    <div id="presale" className="relative border-y border-dashed bg-blue-500">
      <div className="bg-[url('/assets/pattern2.svg')] bg-repeat py-20 sm:py-32">
        <div>
          <div className="mx-auto max-w-4xl px-4">
            <div className="relative mx-auto mt-20 rounded-xl border-2 border-dashed border-amber-500 bg-black/75 p-6 text-lg text-white shadow-2xl sm:text-2xl">
              <h1 className="mb-6 text-6xl font-medium text-amber-500 drop-shadow-sm">FAQ</h1>
              <img src="/assets/raivaa-min.png" className="absolute right-4 top-4 h-24 sm:top-8 sm:h-28" alt="" />
              <div className="mb-4">
                <h3 className="py-4 text-2xl font-semibold">Why is <span className="text-blue-400">$BLUB</span> a success?</h3>
                <p>
                  <span className="text-blue-400">$BLUB</span> is the funniest and most degenerate fish in the <span className="text-sky-300">Sui Ocean</span>, staying true to its origins and bringing the chaotic energy of the 'Boy's Club'—the creators of <span className="text-green-600">$PEPE</span>—to the <span className="text-sky-300">Sui Network</span>. With its dirty and clumsy manner, <span className="text-blue-400">$BLUB</span> causes real chaos in the coral. <br />
                  <div className="mt-6"></div>
                  It brings a unique theme and perfect synergy with the <span className="text-sky-300">Sui Network</span>, making it an irresistible crypto for those who love memes and aspire to conquer oceans and achieve dreams.
                </p>
              </div>
              <div>
                <h3 className="border-t border-slate-500 py-4 text-2xl font-semibold">Coin-Type</h3>
                <div className="flex max-w-full items-center gap-x-2 text-xl">
                  <p className="max-w-[250px] md:text-base text-sm break-words sm:max-w-[400px] md:max-w-[600px]">0xfa7ac3951fdca92c5200d468d31a365eb03b2be9936fde615e69f0c1274ad3a0::BLUB::BLUB</p>
                  <div className="w-8">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon" className="size-8 cursor-pointer text-white">
                      <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z"></path>
                      <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq