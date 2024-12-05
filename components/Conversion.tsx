import React, { useState } from 'react'


const Conversion = () => {
  const [blubValue, setBlubValue] = useState(66642069131)
  const [dollarValue, setDollarValue] = useState(158411.35)

  const handleBlubInputChange = (event:any) => {
    const value = event.target.value
    setBlubValue(value)
    setDollarValue((value / 1000000000) * 158411.35)
  }

  return (
    <div className="relative border-t-2 border-dashed ">
      <img src="/assets/beach.svg" className="absolute bottom-0 right-0 w-full sm:w-2/4" alt="" />
      <div className="relative isolate overflow-hidden">
        <div className="relative mx-auto max-w-2xl  px-2 py-16 sm:py-20 lg:py-24">
          <div className="relative">
            <img src="/assets/t-blub.png" className="absolute bottom-0 left-1/2 z-10 w-[88%] -translate-x-1/2 -translate-y-28 sm:w-3/5 " alt="" />
            <h1 className="mb-4 pt-60 text-center text-4xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:pt-72 sm:text-5xl">In $BLUB, we always calculate billion-dollar conversions</h1>
          </div>
          <div className="mb-8 flex justify-center ">
            <div className="relative rounded-sm bg-black/40  px-3 py-1 text-base font-bold leading-6 text-white ring-1 ring-white/10 hover:ring-white/20">
              <small className="font-normal">Insert</small>
              <input id="blubInput" type="text" pattern="[0-9]*" className="ml-2  border-b border-slate-400 bg-transparent p-2  focus:outline-none" value={blubValue} onChange={handleBlubInputChange} />$BLUB
            </div>
          </div>
          <div className="text-center">
            <h1 className=" text-4xl font-bold tracking-tight text-white sm:text-6xl">
              <div className="mt-0">
                <p className="mb-0 inline-block rounded-xl p-2  text-[#ffffff] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Value in Dollars:</p>
                <br />
                <p className="inline-block rounded-xl p-2 text-6xl font-bold text-[#0eff82] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-7xl">${dollarValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              </div>
            </h1>
            <h1 className="mt-6 inline-block p-2 text-3xl leading-8 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">This is what you'll have when $BLUB <div className="inline sm:block"></div> hits $1 BILLION. It's going to happen.</h1>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Conversion