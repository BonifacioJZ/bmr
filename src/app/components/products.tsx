import React, { FC } from "react";
import Image from "next/image";
import taco from "../images/taco.jpg"
import torta from "../images/torta.jpg"
import quesa from "../images/quesa.jpg"
import burger from "../images/burger.jpg"
import torta2 from "../images/torta2.jpg"
import papas  from "../images/papas.jpg"



/**
 * The Products component is a React functional component that displays a menu of food items with their
 * prices and descriptions.
 * @returns The Products component is returning a section containing a menu of food items. Each food
 * item is displayed with an image, name, price, and a list of options.
 */
const Products:FC = () => {
    return (
        <>
        <section className="body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col">
                    <div className="h-1 bg-base-200 rounded overflow-hidden">
                        <div className="w-24 h-full bg-secondary-content"></div>
                    </div>
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <h1 className="sm:w-2/5 text-base-900 font-medium title-font text-2xl mb-2 sm:mb-0">Nuestro Menu</h1>
                        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"></p>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <div className="p-4 md:w-1/3  sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <Image src={taco} alt="taco" className="object-cover object-center h-full w-full"/>
                        </div>
                        <h2 className="text-xl font-medium title-font text-primary mt-5">Tacos</h2>
                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-base sm:text-4xl">$ 12</strong>
                        </p>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Bisteck</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Chorizo</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Pastor</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Combinado</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-4 md:w-1/3  sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <Image src={torta} alt="taco" className="object-cover object-center h-full w-full"/>
                        </div>
                        <h2 className="text-xl font-medium title-font text-primary mt-5">Tortas</h2>
                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-base sm:text-4xl">$ 40</strong>
                        </p>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Bisteck</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Chorizo</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Pastor</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Combinado</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-4 md:w-1/3  sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <Image src={quesa} alt="taco" className="object-cover object-center h-full w-full"/>
                        </div>
                        <h2 className="text-xl font-medium title-font text-primary mt-5">Burritos y Quesadillas</h2>
                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-base sm:text-4xl">$ 35 CH / $ 45 G </strong>
                        </p>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Bisteck</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Chorizo</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Pastor</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Combinado</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-4 md:w-1/3  sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <Image src={burger} alt="taco" className="object-cover object-center h-full w-full"/>
                        </div>
                        <h2 className="text-xl font-medium title-font text-primary mt-5">Hamburgesas</h2>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Sencilla o Pastor .... $45</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Doble .... $55</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Con Papas + $15</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-4 md:w-1/3  sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <Image src={torta2} alt="taco" className="object-cover object-center h-full w-full"/>
                        </div>
                        <h2 className="text-xl font-medium title-font text-primary mt-5">Tortas</h2>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Salchicha o Jamon .... $40</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Milanesa .... $40</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Cubana .... $ 45</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-4 md:w-1/3  sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <Image src={papas} alt="taco" className="object-cover object-center h-full w-full"/>
                        </div>
                        <h2 className="text-xl font-medium title-font text-primary mt-5">Otros</h2>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Quesadilla Sencilla .... $20CH / $30G</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Orden Papas .... $35</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Alambre ... $80 / $100</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    )

}

export default Products;