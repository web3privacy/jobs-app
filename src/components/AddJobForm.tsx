'use client'
import React, { useState } from 'react'
// import { createThirdwebClient } from "thirdweb";
// import { createWallet, injectedProvider, walletConnect } from "thirdweb/wallets";

export default function AddJobForm() {
	const [wallet, setWallet] = useState('')
	const [errorMessage, setErrorMessage] = useState('')
	const [successMessage, setSuccessMessage] = useState('')

	const handleWalletConnect = async () => {
		setWallet('0x000000000000000000000')
		// TODO - Implement wallet connection
	}

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)

		const response = await fetch('/api/add-job', {
			method: 'POST',
			body: formData,
		})

		if (response.ok) {
			setSuccessMessage('Success! Thanks for adding a vacancy.')
			setErrorMessage('')
		} else {
			const errorData = await response.json()
			setErrorMessage(errorData.message || 'An error occurred while adding the job listing. Please try again.')
			setSuccessMessage('')
		}
	}

	return (
		<div className="mt-8">
			<button
				onClick={handleWalletConnect}
				className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-gray-900 px-5 py-3 font-medium text-white duration-200 hover:bg-gray-700 focus:ring-2 focus:ring-black focus:ring-offset-2"
				type="button"
				aria-label="Connect Wallet"
			>
				<span>{wallet ? 'Connected' : 'Connect Wallet'}</span>
			</button>
			<div className="relative py-3">
				<div className="absolute inset-0 flex items-center" aria-hidden="true">
					<div className="w-full border-t border-gray-300"></div>
				</div>
				<div className="relative flex justify-center">
					<span className="bg-white px-2 text-sm text-black">and fill the form</span>
				</div>
			</div>

			{errorMessage && (
				<div className="mt-4 flex items-center space-x-4 rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4">
					<div className="flex-shrink-0">
						<svg
							className="h-5 w-5 text-red-400"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div className="flex-1 md:flex md:justify-between">
						<p className="text-sm text-red-700">{errorMessage}</p>
					</div>
				</div>
			)}

			{successMessage && (
				<div className="mt-4 flex items-center space-x-4 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4">
					<div className="flex-shrink-0">
						<svg
							className="h-5 w-5 text-green-400"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div className="flex-1 md:flex md:justify-between">
						<p className="text-sm text-green-700">{successMessage}</p>
					</div>
				</div>
			)}

			<form onSubmit={handleSubmit}>
				<input type="hidden" name="wallet" value={wallet} />
				<div className="space-y-3">
					<div>
						<label htmlFor="vacancy" className="mb-3 block text-sm font-medium text-black">
							Vacancy <span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							id="vacancy"
							name="vacancy"
							placeholder="Job name"
							className="bg-chalk block h-12 w-full appearance-none rounded-lg border border-zinc-300 px-4 py-2 text-gray-500 placeholder-zinc-300 duration-200 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
							required
						/>
					</div>

					<div>
						<label htmlFor="jobcategory" className="mb-3 block text-sm font-medium text-black">
							Category <span className="text-red-500">*</span>
						</label>
						<select
							name="jobcategory"
							id="jobcategory"
							className="bg-chalk block h-12 w-full appearance-none rounded-lg border border-zinc-300 px-4 py-2 text-gray-500 placeholder-zinc-300 duration-200 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
							required
							defaultValue=""
						>
							<option value="" disabled>
								Select a category
							</option>
							<option value="Engineering">Engineering</option>
							<option value="Marketing">Marketing</option>
							<option value="Security">Security</option>
							<option value="Product">Product</option>
							<option value="Cryptography">Cryptography</option>
							<option value="Operations">Operations</option>
							<option value="Other">Other</option>
						</select>
					</div>
					<div className="col-span-full">
						<label htmlFor="url" className="mb-3 block text-sm font-medium text-black">
							Link <span className="text-red-500">*</span>
						</label>
						<input
							id="url"
							name="url"
							className="bg-chalk block h-12 w-full appearance-none rounded-lg border border-zinc-300 px-4 py-2 text-gray-500 placeholder-zinc-300 duration-200 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
							placeholder="An URL link to the job posting"
							type="url"
							required
						/>
					</div>
					<div className="col-span-full">
						<label htmlFor="company" className="mb-3 block text-sm font-medium text-black">
							Company Name <span className="text-red-500">*</span>
						</label>
						<input
							id="company"
							name="company"
							className="bg-chalk block h-12 w-full appearance-none rounded-lg border border-zinc-300 px-4 py-2 text-gray-500 placeholder-zinc-300 duration-200 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
							placeholder="Name of your company"
							type="text"
							required
						/>
					</div>
					<div className="col-span-full">
						<label htmlFor="companyurl" className="mb-3 block text-sm font-medium text-black">
							Company Link <span className="text-red-500">*</span>
						</label>
						<input
							id="companyurl"
							name="companyurl"
							className="bg-chalk block h-12 w-full appearance-none rounded-lg border border-zinc-300 px-4 py-2 text-gray-500 placeholder-zinc-300 duration-200 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
							placeholder="An URL link to your website"
							type="url"
							required
						/>
					</div>
					<div className="col-span-full">
						<button
							type="submit"
							// disabled={!wallet}
							className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-gray-900 px-5 py-3 font-medium text-white duration-200 hover:bg-gray-700 focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:bg-gray-100 disabled:text-gray-300"
						>
							Add Job Listing
						</button>
					</div>
				</div>
			</form>

			<div className="mt-6">
				<p className="mx-auto flex text-center text-sm font-medium leading-tight text-black">
					No wallet?
					<a className="ml-auto text-gray-500 hover:text-black" href="https://bento.me/brume">
						Get Brume
					</a>
				</p>
			</div>
		</div>
	)
}
