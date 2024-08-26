'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useAccount, useSignMessage } from 'wagmi'

export default function AddJobForm() {
	const [wallet, setWallet] = useState('')
	const [errorMessage, setErrorMessage] = useState('')
	const [successMessage, setSuccessMessage] = useState('')
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState('')
	const { address, isConnected } = useAccount()
	const { signMessageAsync } = useSignMessage()
	const formRef = useRef<HTMLFormElement>(null)

	useEffect(() => {
		if (isConnected && address) {
			setWallet(address)
		} else {
			setWallet('')
		}
	}, [isConnected, address])

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setIsSubmitting(true)
		setSubmitStatus('Preparing to sign message...')
		setErrorMessage('')
		setSuccessMessage('')

		const formData = new FormData(event.currentTarget)

		try {
			const message = `Adding job listing: ${formData.get('vacancy')} at ${formData.get('company')}`

			setSubmitStatus('Please sign the message in your wallet...')
			const signature = await signMessageAsync({ message })

			formData.append('signature', signature)
			formData.append('message', message)

			setSubmitStatus('Submitting job listing...')
			const response = await fetch('/api/add-job', {
				method: 'POST',
				body: formData,
			})

			const result = await response.json()

			if (response.ok) {
				setSuccessMessage(result.message)
				if (formRef.current) {
					formRef.current.reset()
				}
			} else {
				setErrorMessage(result.message)
			}
		} catch (error) {
			setErrorMessage('An error occurred. Please try again.')
		} finally {
			setIsSubmitting(false)
			setSubmitStatus('')
		}
	}

	return (
		<div className="mt-8">
			{!isConnected && (
				<div className="mb-4 rounded-md bg-blue-50 p-4">
					<div className="flex">
						<div className="flex-shrink-0">
							<svg
								className="h-5 w-5 text-blue-400"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<div className="ml-3 flex-1 md:flex md:justify-between">
							<p className="text-sm text-blue-700">
								Please sign in using the Connect Wallet button in the header to add a job listing.
							</p>
						</div>
					</div>
				</div>
			)}

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
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
								clipRule="evenodd"
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
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="flex-1 md:flex md:justify-between">
						<p className="text-sm text-green-700">{successMessage}</p>
					</div>
				</div>
			)}

			<form onSubmit={handleSubmit} ref={formRef}>
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
							disabled={!wallet || isSubmitting}
							className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-gray-900 px-5 py-3 font-medium text-white duration-200 hover:bg-gray-700 focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:bg-gray-100 disabled:text-gray-300"
						>
							{isSubmitting ? 'Processing...' : 'Sign & Add Job Listing'}
						</button>
					</div>
				</div>
			</form>
			{/* TODO: properly style this */}
			{submitStatus && <p className="mt-2 text-sm text-gray-600">{submitStatus}</p>}

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
