import prisma from "@/src/shared/lib/prisma"
import argon from "argon2"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const body: { name: string, password: string, mail: string } = await req.json()
    try {
        const { name, mail, password } = body

        const hashedPass = await argon.hash(password)

        const user = await prisma.user.create({
            data: {
                name,
                mail,
                password: hashedPass
            },
            select: {
                id: true,
                name: true,
                mail: true,
                password: true,
                admin_level: true
            }
        })

        if (!user) {
            return NextResponse.json({
                status: 'error',
                message: 'Erro ao cadastrar usuario!',
            }, { status: 500 })
        }

        return NextResponse.json({
            status: 'success',
            message: 'Usuario cadastrado com sucesso!',
            user
        })

    } catch (error) {
        return NextResponse.json({
            status: 'error',
            message: 'Erro ao cadastrar usuario!',
            error
        }, { status: 500 })

    }
}