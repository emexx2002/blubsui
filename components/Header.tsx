import React from 'react'

const Header = () => {
    return (
        <div className="absolute left-0 top-0 z-50 w-full">
            <div className="flex h-64 flex-col items-center justify-center overflow-hidden md:px-20 lg:h-40 lg:flex-row lg:justify-between lg:px-36">
                <div className="flex min-w-36 max-w-min items-center justify-center sm:min-w-32">
                    <img src="/assets/dd.png" className="w-36 sm:w-32" alt="Logo" />
                </div>
                <div className="hidden gap-x-3 lg:flex">
                    <Link href="/">HOME</Link>
                    <Link href="#tokenomics">TOKENOMICS</Link>
                    <Link href="/leaderboard">LEADERBOARD</Link>
                    <Link href="https://suivision.xyz/myspace?feature=Swap" target="_blank" rel="noreferrer">BUY</Link>
                    <Link href="https://birdeye.so/token/0xfa7ac3951fdca92c5200d468d31a365eb03b2be9936fde615e69f0c1274ad3a0::BLUB::BLUB?chain=sui" target="_blank" rel="noreferrer">CHART</Link>
                </div>
                <div className="mt-4 flex flex-col gap-2 lg:mt-0 lg:hidden">
                    <div className="flex justify-center gap-2">
                        <Link href="/">HOME</Link>
                        <Link href="#tokenomics">TOKENOMICS</Link>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                        <Link href="/leaderboard">LEADERBOARD</Link>
                        <Link href="https://suivision.xyz/myspace?feature=Swap" target="_blank" rel="noreferrer">BUY</Link>
                        <Link href="https://birdeye.so/token/0xfa7ac3951fdca92c5200d468d31a365eb03b2be9936fde615e69f0c1274ad3a0::BLUB::BLUB?chain=sui" target="_blank" rel="noreferrer">CHART</Link>
                    </div>
                </div>
            </div>
            <div className="p-4"></div>
        </div>
    )
}

const Link = ({ href, children, target, rel }: any) => {
    return (
        <a
            href={href}
            target={target}
            rel={rel}
            className="no-underline"
        >
            <div
                className={`relative rounded-xl border border-amber-700 ${href.startsWith('http') ? 'bg-white text-amber-500' : 'bg-amber-500 text-white'
                    } px-1.5 py-2 font-extrabold shadow-lg transition hover:scale-110 ${href.startsWith('http') ? 'hover:bg-stone-50' : 'hover:scale-110'
                    } sm:px-2.5 md:px-4`}
            >
                {href.startsWith('http') && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        className="absolute right-0 top-1/2 ml-1 hidden size-3 -translate-y-1/2 sm:inline-block sm:size-4"
                    >
                        <path
                            stroke-linecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                    </svg>
                )}
                <span className="text-2xl">{children}</span>
            </div>
        </a>
    )
}

export default Header