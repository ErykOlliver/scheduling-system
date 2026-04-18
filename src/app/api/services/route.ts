import { ServicesController } from "@/src/modules/services/controllers"
import { Service } from "@/src/modules/services/type"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const res = await ServicesController.list()

        if (!res?.ok) {
            return NextResponse.json({
                message: "Operação de consulta de serviços falhou!"
            })
        }

        const data: { services: Service[] | undefined } = await res.json()

        return NextResponse.json({
            services: data.services,
            message: "Operação de consulta de serviços realizada com sucesso!"
        })

    } catch (error) {
        console.log(error)
    }
}

export async function POST(req: Request) {
    return ServicesController.create(req)

}