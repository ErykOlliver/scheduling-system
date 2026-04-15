import prisma from "../lib/prisma";

const args = process.argv.slice(2)

let userId: string | undefined

args.forEach((arg, index) => {
    if (arg.startsWith("--id=")) {
        userId = arg.split("=")[1]
    }

    if (arg === "--id") {
        userId = args[index + 1]
    }
})


if(!userId){
    console.log("ID é obrigatorio, use: --id=")
    process.exit(1)
}

async function setAdmin() {
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        },
        select: {
            id: true,
            admin_level: true,
            name: true
        }
    })

    if (!user) {
        return console.log("Usuario não encontrado!")
    }

    const res = await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            admin_level: "ADMIN"
        }
    })

    return console.log(`Usuario ${res.name} promovido a administrador!`)
}

setAdmin()