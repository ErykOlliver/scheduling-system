import prisma from "../../shared/lib/prisma"

export async function getServices() {

    try {
        const services = await prisma.service.findMany();
        console.log("Busca no banco bem sucedida")
        return services
    } catch (e) {
        console.log(`Consulta: erro durante a consulta ao banco: ${e}`)
    }

}
export async function getService(id: string) {

    try {
        const service = await prisma.service.findUnique({
            where: {
                id: id
            }
        });
        console.log("Busca no banco bem sucedida")
        return service
    } catch (e) {
        console.log(`Consulta: erro durante a consulta ao banco: ${e}`)
    }

}

export async function createService(name: string, price: number, duration: number) {
    try {
        const service = await prisma.service.create({
            data: {
                name,
                price,
                duration
            }
        })
        console.log("Registro no banco bem sucedido")
        return service
    } catch (e) {
        console.log(`Registro: erro durante o registro no banco: ${e}`)

    }
}
export async function updateService(id: string, name: string, price: number, duration: number) {
    try {
        const service = await prisma.service.update({
            where: {
                id: id
            },
            data: {
                name,
                price,
                duration
            }
        })
        console.log("Atualização no banco bem sucedido")
        return service
    } catch (e) {
        console.log(`Atualização: erro durante a atualização no banco: ${e}`)

    }
}

export async function deleteService(id: string) {
    try {
        const deleted = await prisma.service.delete({
            where: {
                id: id
            },
        });
        console.log("Atualização no banco bem sucedida")
        return deleted

    } catch (e) {
        console.log(`Consulta: erro durante a consulta ao banco: ${e}`)
    }
}