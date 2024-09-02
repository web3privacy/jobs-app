import { Session } from 'next-auth'

import { NextAuthOptions } from 'next-auth'
import { supabase } from '@/utils/supabaseClient'
import credentialsProvider from 'next-auth/providers/credentials'
import { type SIWESession, verifySignature, getChainIdFromMessage, getAddressFromMessage } from '@web3modal/siwe'

const nextAuthSecret = process.env.NEXTAUTH_SECRET
if (!nextAuthSecret) {
	throw new Error('NEXTAUTH_SECRET is not set')
}

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
if (!projectId) {
	throw new Error('NEXT_PUBLIC_PROJECT_ID is not set')
}
declare module 'next-auth' {
	// eslint-disable-next-line no-unused-vars
	interface Session extends SIWESession {
		address: string
		chainId: number
		user: {
			role: string
		}
	}
	// eslint-disable-next-line no-unused-vars
	interface User {
		role?: string
	}
}
const providers = [
	credentialsProvider({
		name: 'Ethereum',
		credentials: {
			message: {
				label: 'Message',
				type: 'text',
				placeholder: '0x0',
			},
			signature: {
				label: 'Signature',
				type: 'text',
				placeholder: '0x0',
			},
		},
		async authorize(credentials) {
			try {
				if (!credentials?.message) {
					throw new Error('SiweMessage is undefined')
				}
				const { message, signature } = credentials
				const address = getAddressFromMessage(message)
				const chainId = getChainIdFromMessage(message)

				const isValid = await verifySignature({
					address,
					message,
					signature,
					chainId,
					projectId,
				})

				if (isValid) {
					return {
						id: `${chainId}:${address}`,
					}
				}

				return null
			} catch (e) {
				return null
			}
		},
	}),
]

export const authOptions: NextAuthOptions = {
	// https://next-auth.js.org/configuration/providers/oauth
	secret: nextAuthSecret,
	providers,
	session: {
		strategy: 'jwt',
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				const { data, error } = await supabase
					.from('users')
					.select('*')
					.eq('address', user.id.split(':')[2])
					.single()

				if (error) {
					console.error('Error fetching user role:', error)
				}

				if (data) {
					token.role = 'admin'
				}
			}
			return token
		},
		session({ session, token }: { session: Session; token: any }) {
			if (!token.sub) {
				return session
			}

			const [, chainId, address] = token.sub.split(':')
			if (chainId && address) {
				session.address = address
				session.chainId = parseInt(chainId, 10)
			}
			session.user.role = token.role as string
			return session
		},
	},
}
