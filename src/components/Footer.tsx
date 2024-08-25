import React from 'react'
import Link from 'next/link'

const Footer = () => {
	return (
		<div className="middle-pane-medium">
			<footer className="mt-16 flex w-full items-center justify-center md:mt-32">
				<div className="p-10 text-center font-mono text-white">
					Are you passionate about privacy? Do what you love by joining one of these companies contributing to
					privacy in the web3. Empower everyone from developers to users with meaningful tech, valuable use
					cases & advocacy. This is a project by{' '}
					<Link href="https://web3privacy.info/" className="font-bold">
						Web3Privacy
					</Link>
					.
				</div>
			</footer>
		</div>
	)
}

export default Footer
