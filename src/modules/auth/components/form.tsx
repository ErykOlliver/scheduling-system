'use client'

import { fetchSignUp } from '@/src/shared/api/auth/auth'
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'

type formType = "SignIn" | "SignUp"


export default function FormAuth() {
    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const data = {
            name: formData.get("name") as string,
            password: formData.get("password") as string,
            mail: formData.get("email") as string
        }

        const res = await fetchSignUp(data)

        console.log(res)

    }

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const result = await signIn("credentials", {
            redirect: false,
            email: formData.get("email") as string,
            password: formData.get("password") as string
        })
        
        console.log(result)

    }
    
    const [formTypes, setFormType] = useState<formType>("SignIn")
    const renderForm = () => {
        switch (formTypes) {
            case "SignIn": return (
                <div className='flex flex-col max-w-sm w-full gap-5 h-full justify-center items-center'>
                    <header className='w-full'>
                        <h1 className='text-white text-5xl font-medium'>Conecte-se <br /> <span className='font-bold text-orange-600'>Agora</span></h1>
                    </header>
                    <form onSubmit={handleSignIn} className='flex flex-col w-sm border border-zinc-900 rounded-md py-2 px-3 gap-2'>
                        <label id='email' className='text-white text-lg'>E-mail</label>
                        <input type="text" name="email" id="email" className='border border-zinc-700 focus:border-white text-md rounded-md p-1 text-white/90 focus:outline-none' />
                        <label id='password' className='text-white text-lg'>Senha</label>
                        <input type="password" name="password" id="password" className='border border-zinc-700 focus:border-white text-md rounded-md p-1 text-white/90 focus:outline-none' />
                        <button className='w-full h-fit py-3 hover:cursor-pointer font-medium text-white bg-orange-700 rounded-md'>Entrar</button>
                        <p className='text-center text-white'>Não possui uma conta ? <span onClick={() => setFormType("SignUp")} className='text-orange-600' >Cadastre-se</span></p>
                    </form>
                </div>
            )
            case "SignUp": return (
                <div className='flex flex-col max-w-sm w-full gap-5 h-full justify-center items-center'>
                    <header className='w-full'>
                        <h1 className='text-white text-5xl font-medium'>Cadastre-se <br /> <span className='font-bold text-orange-600'>Agora</span></h1>
                    </header>
                    <form onSubmit={handleSignUp} className='flex flex-col w-sm border border-zinc-900 rounded-md py-2 px-3 gap-2'>
                        <label id='name' className='text-white text-lg'>Nome Completo</label>
                        <input type="text" name="name" id="name" className='border border-zinc-700 focus:border-white text-md rounded-md p-1 text-white/90 focus:outline-none' />
                        <label id='email' className='text-white text-lg'>E-mail</label>
                        <input type="text" name="email" id="email" className='border border-zinc-700 focus:border-white text-md rounded-md p-1 text-white/90 focus:outline-none' />
                        <label id='key' className='text-white text-lg'>Senha</label>
                        <input type="password" name="password" id="password" className='border border-zinc-700 focus:border-white text-md rounded-md p-1 text-white/90 focus:outline-none' />
                        <button className='w-full h-fit py-3 hover:cursor-pointer font-medium text-white bg-orange-700 rounded-md'>Cadastrar conta</button>
                        <p className='text-center text-white'>Já possui uma conta ? <span className='text-orange-600' onClick={() => setFormType("SignIn")} >Conectar-se</span></p>
                    </form>
                </div>
            )
        }
    }

    return renderForm()
}
