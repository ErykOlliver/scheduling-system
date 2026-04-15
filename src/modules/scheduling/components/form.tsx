import React from 'react'

export default function FormScheduling() {
    return (
        <div className='flex flex-col max-w-sm w-full gap-5 h-full justify-center items-center'>
            <header className='w-full'>
                <h1 className='text-white text-5xl font-medium'>Realize seu <br /> <span className='font-bold text-orange-600'>agendamento</span></h1>
            </header>
            <form className='flex flex-col w-sm border border-zinc-900 rounded-md py-2 px-3 gap-2'>
                <label id='service' className='text-white text-lg'>Serviço</label>
                <input type="text" name="service" id="service" className='border border-zinc-700 focus:border-white text-md rounded-md p-1 text-white/90 focus:outline-none' />
                <label id='hour' className='text-white text-lg'>Horário do atendimento</label>
                <input type="datetime-local" name="hour" id="hour" className='border border-zinc-700 focus:border-white text-md rounded-md p-1 text-white/90 focus:outline-none' />
                <button className='w-full h-fit py-3 hover:cursor-pointer font-medium text-white bg-orange-700 rounded-md'>Agendar Serviço</button>
            </form>
        </div>
    )
}
