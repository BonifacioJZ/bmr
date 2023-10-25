import React, { FC } from "react";
import Image from "next/image";
import taco from '../images/taco.jpg'

const Products:FC = () => {
    return (
        <>
        <section className="body-font">
            <div className="container px-5 py-24 mx-auto" >
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary">Nuestro Menu</h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><Image width={500} height={500} style={{width:420,height:260}} src={taco} className="object-cover object-center w-full h-full block" alt="taco" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Tacos</h2>
                            <p> Nuestros tacos de bisteck, chorizo, pastor y combinados son una explosión de sabores que te transportarán directamente a las calles de México.</p>
                            <p> $12.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )

}

//TODO(Obtimisar codigo)
export default Products;