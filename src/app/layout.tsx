import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const titleFull = 'Jobs. | Web3Privacy Now'
const descriptionFull =
	'Privacy advocates worldwide are coming together to discuss how to mainstream privacy within the Web3 industry. So it will become a cultural phenomenon embodying both decentralisation & anti-surveillance capitalism practices.'

export const metadata: Metadata = {
	title: titleFull,
	description: descriptionFull,
	openGraph: {
		type: 'website',
		title: titleFull,
		description: descriptionFull,
		url: 'https://web3privacy.info',
		images: [
			{
				url: 'https://web3privacy.info/og/og_index.png',
				alt: 'Web3Privacy Now',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: titleFull,
		description: descriptionFull,
		images: ['https://web3privacy.info/og/og_index.png'],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className="min-h-full bg-black text-white">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
