import React, { FC } from "react";


/**
 * The "About" function is a React component that renders a section with information about Tacos BMR, a
 * restaurant specializing in authentic Mexican cuisine.
 * @returns The About component is returning a JSX element.
 */
const About:FC = ()=>{
    return (
        <>
        <section className="body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary">Sobre Nosostros</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">En Tacos BMR, estamos comprometidos con la pasión por la auténtica cocina mexicana y la satisfacción de nuestros clientes. Desde nuestro modesto comienzo, hemos trabajado incansablemente para convertirnos en un destino culinario confiable para los amantes de los tacos en la región</p>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Estamos encantados de recibirte en Tacos BMR para que disfrutes de una auténtica experiencia culinaria mexicana. Ya sea que vengas a cenar o para llevar, estamos aquí para servirte con una sonrisa.
    Gracias por elegir Tacos BMR como tu destino para los mejores tacos mexicanos. ¡Esperamos verte pronto!</p>
                </div>
            </div>
        </section>
        </>
    )
}
//TODO(colocar los textos estaticos en constantes)
export default About