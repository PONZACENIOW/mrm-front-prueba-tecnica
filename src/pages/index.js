import Layout from '../../layouts'
import React, { memo } from 'react'

const Quest = memo(() => {
    const header = {
        objective: 'Objetivo',
        goal_text:
            'Con el PSD, el look y excel que se comparte, realizar una maqueta de html para email lo más apegada al look, con sus respectivos links y estilos, usar los materiales para cortar imágenes y colocar textos al contenido de la pieza.',
        solution: 'Solución',
    }

    return (
        <Layout header={header}>
            <div className="mx-auto w-[40rem] bg-[#dcdbda]">
                <div className="mb-6">
                    <img
                        src="/img/email/chevrolet/header.jpg"
                        alt="header"></img>
                </div>
                <div className="px-20 text-base italic text-justify">
                    <h1 className="font-bold">
                        Cesar Antonio Ponce de León Piza
                    </h1>
                    <p className="mt-6">
                        Creamos la familia <span>Chevrolet Sonic®</span> para
                        representar por dentro y por fuera, tu estilo de vida.
                        Cualquiera de nuestras versiones cuenta con el espacio
                        adecuado, un diseño audaz y juvenil caracterizado por
                        líneas definidas, parrilla de doble puerto y faros
                        expuestos, haciendo imposible no capturar todas las
                        miradas cuando vas a bordo de él.
                    </p>
                    <p className="mt-6 font-bold">
                        Además, diviértete mientras liberas el poder de su motor
                        a donde sea que vayas sin perder la conectividad a la
                        que estás acostumbrado, haciendo que tu experiencia de
                        manejo sea inigualable.
                    </p>
                </div>
                <div className="my-4">
                    <a
                        href="http://www.chevrolet.com.mx/sonic-auto-subcompacto-sedan-hatchback.html"
                        target="_blank">
                        <img
                            className="mx-auto"
                            src="/img/email/chevrolet/first-link.jpg"
                            alt="header"></img>
                    </a>
                </div>
                <div className="mt-8">
                    <img
                        className="mx-auto"
                        src="/img/email/chevrolet/footer.jpg"
                        alt="header"></img>
                </div>
                <div className="grid relative">
                    <img
                        className="mx-auto"
                        src="/img/email/chevrolet/links.jpg"
                        alt="header"></img>
                    <a
                        href="http://www.chevrolet.com.mx/localiza-distribuidor.html"
                        target="_blank"
                        className="w-32 h-4 absolute self-center left-28"></a>
                    <a
                        href="http://www.chevrolet.com.mx/"
                        target="_blank"
                        className="w-16 h-4 absolute self-center left-64"></a>
                    <a
                        href="https://www.facebook.com/chevroletmexico?ref=ts&fref=ts"
                        target="_blank"
                        className="w-5 h-5 absolute self-center left-[25.8rem]"></a>
                    <a
                        href="https://twitter.com/ChevroletMexico/"
                        target="_blank"
                        className="w-5 h-5 absolute self-center left-[27.3rem]"></a>
                    <a
                        href="http://www.youtube.com/Chevroletmexicoo/"
                        target="_blank"
                        className="w-5 h-5 absolute self-center left-[28.8rem]"></a>
                    <a
                        href="http://instagram.com/chevroletmexico/"
                        target="_blank"
                        className="w-5 h-5 absolute self-center left-[30.3rem]"></a>
                    <a
                        href="#"
                        target="_blank"
                        className="w-5 h-5 absolute self-center left-[32rem]"></a>
                </div>
            </div>
        </Layout>
    )
})

export default Quest
