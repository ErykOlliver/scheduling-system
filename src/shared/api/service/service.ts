import { Service } from "@/src/modules/services/type"

export async function fetchGetServices(){
    try{
        const res = await fetch("/api/services")

        const data: {services: Service[]} = await res.json()

        return data.services

    }catch(error){
        console.log(error)
    }
}