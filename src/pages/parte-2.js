import Layout from '../../layouts'
import React, { useEffect, useState, memo } from 'react'
import { useContacts } from '@/hooks/contacts'

const Test2B = memo(() => {
    const header = {
        objective: 'Objetivo',
        goal_text:
            'Crear un formulario de contacto que guarde en una base de datos Nombre, email y teléfono, no importa la tecnología que se utilice pero que se pueda comprobar el registro.',
        solution: 'Solución',
    }
    const { postContacts, getContacts } = useContacts()
    const [errors, setErrors] = useState({
        action: '',
        status: false,
        result: null,
    })
    const [response, setResponse] = useState({
        action: '',
        status: false,
        result: null,
    })
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        getContacts({
            setErrors,
            setResponse,
            setContacts,
        })
    }, [])

    useEffect(() => {
        response.status &&
            (setErrors({
                action: '',
                status: false,
                result: null,
            }),
            response.action == 'POST' &&
                (setName(''), setEmail(''), setPhone('')))
    }, [response])

    return (
        <Layout header={header}>
            <div className="relative min-h-screen">
                <div className="ml-60">
                    <div className="absolute left-0">
                        <div className="grid grid-cols-2 gap-x-4">
                            <span className="font-bold">Nombre: </span>
                            <span>{response?.result?.data?.name}</span>
                            <span className="font-bold">
                                Correo electrónico:
                            </span>
                            <span>{response?.result?.data?.email}</span>
                            <span className="font-bold">Télefono: </span>
                            <span>{response?.result?.data?.phone}</span>
                        </div>
                        <div className="mt-6">
                            <h2>Base de datos</h2>
                            {contacts?.map((e, i) => (
                                <div
                                    key={i}
                                    className="grid grid-cols-2 gap-x-4 mt-2">
                                    <span className="font-bold">Nombre: </span>
                                    <span>{e.name}</span>
                                    <span className="font-bold">
                                        Correo electrónico:
                                    </span>
                                    <span>{e.email}</span>
                                    <span className="font-bold">
                                        Télefono:{' '}
                                    </span>
                                    <span>{e.phone}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="shadow-2xl mx-auto w-2/3 rounded-xl p-6">
                        <h2 className="text-2xl uppercase text-center font-bold text-gray-600 mb-4">
                            Nuevo contacto
                        </h2>
                        <div className="mt-8">
                            <form className="my-6 grid gap-y-4">
                                <div className="grid">
                                    <span className="uppercase text-base text-gray-600">
                                        Nombre *
                                    </span>
                                    <input
                                        className="mt-2 bg-gray-300 px-4 py-2 text-gray-700"
                                        onChange={e => setName(e.target.value)}
                                        value={name}></input>
                                    {errors.result?.name && (
                                        <span className="text-red-600 text-sm">
                                            {errors.result.name[0]}
                                        </span>
                                    )}
                                </div>
                                <div className="grid">
                                    <span className="uppercase text-base text-gray-600">
                                        Correo electrónico *
                                    </span>
                                    <input
                                        className="mt-2 bg-gray-300 px-4 py-2 text-gray-700"
                                        onChange={e => setEmail(e.target.value)}
                                        value={email}></input>
                                    {errors.result?.email && (
                                        <span className="text-red-600 text-sm">
                                            {errors.result.email[0]}
                                        </span>
                                    )}
                                </div>
                                <div className="grid">
                                    <span className="uppercase text-base text-gray-600">
                                        Télefono *
                                    </span>
                                    <input
                                        className="mt-2 bg-gray-300 px-4 py-2 text-gray-700"
                                        onChange={e => setPhone(e.target.value)}
                                        value={phone}></input>
                                    {errors.result?.phone && (
                                        <span className="text-red-600 text-sm">
                                            {errors.result.phone[0]}
                                        </span>
                                    )}
                                </div>
                                <button
                                    type="button"
                                    className="bg-blue-600 text-gray-200 py-2 rounded-full px-8"
                                    onClick={() => {
                                        postContacts({
                                            setErrors,
                                            setResponse,
                                            name,
                                            email,
                                            phone,
                                        })
                                    }}>
                                    Siguiente
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
})

export default Test2B
