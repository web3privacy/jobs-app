import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo.png'

const Header = () => {
	return (
		<div className="w-full">
			<div className="mx-auto flex flex-col md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
				<div className="flex flex-row items-center justify-between lg:justify-start">
					<Link
						className="tracking-relaxed transform p-6 text-3xl font-bold tracking-tighter text-white transition duration-[3000ms] ease-in-out hover:bg-neutral-600/30"
						href="/"
					>
						<Image src={logo} alt="logo" className="w-32 md:hidden" priority />
						jobs.
					</Link>
				</div>
				<nav className="hidden flex-grow flex-col md:flex md:flex-row md:justify-end">
					<ul className="list-none space-y-2 lg:inline-flex lg:items-center lg:space-y-0">
						<li>
							<Link href="https://web3privacy.info/" aria-label="by Web3Privacy Now" className="flex">
								<Image src={logo} alt="logo" className="w-32" priority />
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default Header
