import React, { FC } from "react";
import Image from "next/image";
import refres from "../images/refres.jpg"
import malteada from "../images/malteada.jpg"
import chan from "../images/chan.jpg"
import jugo from "../images/jugo.png"
import agua from "../images/agua.jpg"

const Drinks:FC = () => {
    return (
        <>
        <section className="body-font">
            <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
                    <div className="h-1 bg-base-200 rounded overflow-hidden">
                        <div className="w-24 h-full bg-secondary-content"></div>
                    </div>
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <h1 className="sm:w-2/5 text-base-900 font-medium title-font text-2xl mb-2 sm:mb-0">Bebidas</h1>
                        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"></p>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <div className="p-4 md:w-1/3  sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <Image src={refres} alt="refresco" className="object-cover object-center h-full w-full"/>
                        </div>
                        <h2 className="text-xl font-medium title-font text-primary mt-5">Refrescos</h2>
                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-base sm:text-4xl">$ 15</strong>
                        </p>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Pepsi</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">7UP</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Mansanita</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Jarritos</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-4 md:w-1/3  sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <Image src={malteada} alt="malteada" className="object-cover object-center h-full w-full"/>
                        </div>
                        <h2 className="text-xl font-medium title-font text-primary mt-5">Malteadas</h2>
                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-base sm:text-4xl">$ 30</strong>
                        </p>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Fresa</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Vainilla</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Chocolate</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-4 md:w-1/3  sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <Image src={chan} alt="chan" className="object-cover object-center h-full w-full"/>
                        </div>
                        <h2 className="text-xl font-medium title-font text-primary mt-5">Chanpolas</h2>
                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-base sm:text-4xl">$ 35</strong>
                        </p>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Fresa</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Vainilla</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Chocolate</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Galleta</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-4 md:w-1/3  sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <Image src={jugo} alt="chan" className="object-cover object-center h-full w-full"/>
                        </div>
                        <h2 className="text-xl font-medium title-font text-primary mt-5">Jugos</h2>
                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-base sm:text-4xl">$ 15</strong>
                        </p>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">19 Hermanos</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-4 md:w-1/3  sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <Image src={agua} alt="chan" className="object-cover object-center h-full w-full"/>
                        </div>
                        <h2 className="text-xl font-medium title-font text-primary mt-5">Agua</h2>
                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-base sm:text-4xl">$ 20</strong>
                        </p>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap-1">
                                <span className="text-secondary-700">Great Value 1 L</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    )

}

export default Drinks;