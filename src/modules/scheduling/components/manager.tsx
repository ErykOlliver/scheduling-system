'use client'

import React, { useState } from 'react'

export default function Manager() {
    const [menu, menuControll] = useState(false)

    return (
        <>
            <button onClick={() => menu ? menuControll(false) : menuControll(true)} className='border absolute top-5 right-5 border-orange-500 shadow-[0_0_10px] shadow-orange-700 rounded-full py-1 px-3 flex items-center justify-center'>
                <p className='text-white/70 font-medium'>Manager</p>
            </button>

            {menu && (
                <div className='w-fit min-w-70 h-fit p-5 flex gap-3 flex-col absolute z-1000 border border-orange-500 shadow-[0_0_10px] shadow-orange-700 right-5 top-20 rounded-xl'>
                    <header className='flex w-fit h-fit'>
                        <h1 className='text-white/40 text-xs font-medium underline'>SERVIÇOS</h1>
                    </header>
                    <article className='w-fit h-fit flex flex-col'>
                        <ul className='flex w-fit h-fit flex-col gap-3'>
                            <li className='text-sm font-medium text-white/70 uppercase'>Gerenciar serviços</li>
                            <li className='text-sm font-medium text-white/70 uppercase'>Gerenciar serviços</li>
                            <li className='text-sm font-medium text-white/70 uppercase'>Gerenciar serviços</li>
                            <li className='text-sm font-medium text-white/70 uppercase'>Gerenciar serviços</li>
                        </ul>
                    </article>
                </div>
            )}
        </>
    )
}
