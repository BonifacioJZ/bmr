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
                {/*Tacos*/}
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                    <div className="card w-96 bg-base-100 border-base-200 rounded-2xl border p-6 shadow-sm sm:px-8 lg:p-12">
                        <div className="text-center">
                            <h2 className="text-lg font-medium  ">Tacos</h2>
                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold  sm:text-4xl">$ 12</strong>
                            </p>
                        </div>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Bisteck</span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Chorizo</span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Pastor</span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Combinados</span>
                            </li>
                        </ul>
                </div>
                    </div>
                    {/*Tortas*/}
                    <div className="p-4 md:w-1/3">
                    <div className="card w-96 bg-base-100 border-base-200 rounded-2xl border p-6 shadow-sm sm:px-8 lg:p-12">
                        <div className="text-center">
                            <h2 className="text-lg font-medium  ">Tortas</h2>
                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold  sm:text-4xl">$ 40</strong>
                            </p>
                        </div>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Bisteck</span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Chorizo</span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Pastor</span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Combinados</span>
                            </li>
                        </ul>
                    </div>
                    </div>
                    {/*Burritos y Quesadillas*/}
                    <div className="p-4 md:w-1/3">
                    <div className="card w-96 bg-base-100 border-base-200 rounded-2xl border p-6 shadow-sm sm:px-8 lg:p-12">
                        <div className="text-center">
                            <h2 className="text-lg font-medium  ">Burritos y Quesadillas</h2>
                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold  sm:text-4xl">$ 35 CH / $45 G</strong>
                            </p>
                        </div>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Bisteck</span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Chorizo</span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Pastor</span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Combinados</span>
                            </li>
                        </ul>
                    </div>
                    </div>
                    {/*Hamburguesas*/}
                    <div className="p-4 md:w-1/3">
                    <div className="card w-96 bg-base-100 border-base-200 rounded-2xl border p-6 shadow-sm sm:px-8 lg:p-12">
                        <div className="text-center">
                            <h2 className="text-lg font-medium  ">Hamburgesas</h2>
                        </div>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Sencilla o Pastor .... $45</span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Doble .... $55</span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Con Papas + $15</span>
                            </li>
                        </ul>
                    </div>
                    </div>
                    {/*Tortas 2*/}
                    <div className="p-4 md:w-1/3">
                    <div className="card w-96 bg-base-100 border-base-200 rounded-2xl border p-6 shadow-sm sm:px-8 lg:p-12">
                        <div className="text-center">
                            <h2 className="text-lg font-medium  ">Tortas</h2>
                        </div>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Salchicha o Jamon .... $40</span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Milanesa .... $40</span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Cubana .... $ 45</span>
                            </li>
                        </ul>
                    </div>
                    </div>
                    {/*Otros*/}
                    <div className="p-4 md:w-1/3">
                    <div className="card w-96 bg-base-100 border-base-200 rounded-2xl border p-6 shadow-sm sm:px-8 lg:p-12">
                        <div className="text-center">
                            <h2 className="text-lg font-medium  ">Otros</h2>
                        </div>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Quesadilla Sencilla .... $20CH / $30G</span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Orden Papas .... $35</span>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )

}

export default Products;