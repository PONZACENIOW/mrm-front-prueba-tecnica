import React, { memo } from 'react'
import { useRouter } from 'next/router'

const Layout = memo(({ header, children }) => {
    const router = useRouter()

    return (
        <div className="px-2 md:px-40 py-10 bg-gray-100 text-gray-800 min-h-screen font-nunito">
            <div className="mb-8 bg-gray-200">
                <ul className="flex gap-4">
                    <li
                        className="cursor-pointer hover:bg-blue-500 hover:text-gray-100 p-2"
                        onClick={() => router.push('/')}>
                        Parte 1
                    </li>
                    <li
                        className="cursor-pointer hover:bg-blue-500 hover:text-gray-100 p-2"
                        onClick={() => router.push('/parte-2')}>
                        Parte 2
                    </li>
                </ul>
            </div>
            <h1 className="text-2xl font-bold mb-2">{header.objective}</h1>
            <p className="mb-4">{header.goal_text}</p>
            <p className="text-xl font-bold mb-2">{header.comments}</p>
            {header.comment_text?.map((e, i) => (
                <h2 key={i} className="mb-4">
                    {e}
                </h2>
            ))}
            <h2 className="text-xl font-bold mb-2">{header.solution}</h2>
            <div className="p-4 bg-gray-200 my-6">{children}</div>
        </div>
    )
})

export default Layout
