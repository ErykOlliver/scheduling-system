import prisma from '@/src/shared/lib/prisma'
import NextAuth, { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import argon2 from 'argon2'

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
        maxAge: 60 * 60 * 24 * 7,
        updateAge: 20 * 60
    },
    providers: [
        Credentials({
            name: 'Login',
            credentials: {
                email: { label: "e-mail", type: 'text' },
                password: { label: 'senha', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) return null

                const user = await prisma.user.findUnique({
                    where: {
                        mail: credentials.email,
                    }
                })

                if (!user) throw new Error("Usuario não encontrado na nossa base de dados")

                const isValid = await argon2.verify(user.password, credentials.password)

                if (!isValid) throw new Error("Senha incorreta")

                return user
            }
        })
    ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }