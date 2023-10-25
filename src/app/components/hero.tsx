import React, { FC, ReactElement } from "react";
import Image from "next/image";
import tacos from "../images/tacos.jpeg"
const Hero:FC = ()=>{
    return(
        <>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
            <Image src={tacos} alt="BMR" width={500} height={500} className="rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">BMR</h1>
                    <p className="py-6">¡Bienvenidos a BMR! Les invitamos a saborear la auténtica cocina mexicana en nuestro restaurante, donde encontrarán una deliciosa variedad de tacos, tortas y más. Nuestro compromiso es ofrecerles ingredientes frescos y sabores genuinos, todo con la calidez de un servicio excepcional. ¡Esperamos que disfruten su experiencia culinaria con nosotros!</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero;