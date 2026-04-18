import { NextRequest, NextResponse } from "next/server";
import { createService, deleteService, getService, getServices, updateService } from "./model";

export class ServicesController {
    static async list() {
        try {
            const services = await getServices()

            return NextResponse.json({
                success: true,
                services: services

            }, { status: 200 })

        } catch (e) {
            console.log(`Falha na rota de serviços: ${e}`)
        }
    }

    static async create(req: Request) {
        const body: { name: string, price: number, duration: number } = await req.json()

        try {

            const { name, duration, price } = body

            const services = await createService(name, price, duration)
            return NextResponse.json({
                success: true,
                services: services
            }, { status: 200 });

        } catch (e) {
            console.log(`Falha na rota de serviços: ${e}`)
        }
    }
    static async update(req: Request) {
        const params: { id: string } = await req.json()
        const body: { name: string, price: number, duration: number } = await req.json()

        try {
            const { id } = params
            const { name, duration, price } = body

            const services = await updateService(id, name, price, duration)

            NextResponse.json({
                success: true,
                services: services

            }, { status: 200 })

        } catch (e) {
            console.log(`Falha na rota de serviços: ${e}`)
        }
    }

    static async find(req: Request) {
        const params: { id: string } = await req.json()

        const { id } = params

        if (!id) {
            return NextResponse.json({
                success: false,
                message: "ID do serviço não informado"

            }, { status: 400 })
        }

        try {
            const service = await getService(id)
            NextResponse.json({
                success: true,
                service: service
            }, { status: 200 });

        } catch (e) {
            console.log(`Falha na rota de serviços: ${e}`)
        }
    }

    static async delete(req: Request) {
        const params: { id: string } = await req.json()

        const { id } = params


        if (!id) {
            return NextResponse.json({ error: 'ID é obrigatório' }, { status: 400 });
        }

        try {
            const deleted = await deleteService(id);
            if (!deleted) {
                return NextResponse.json({ error: 'Serviço não encontrado' }, { status: 404 });
            }

            NextResponse.json({
                success: true,
                message: {
                    title: 'successo',
                    text: 'Serviço cancelado',
                    type: 'success'
                },
            }, { status: 200 });
        } catch (e) {
            console.error(e);
            NextResponse.json({ error: 'Erro ao deletar serviço' }, { status: 500 });
        }
    }
}