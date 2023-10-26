import React, { FC } from "react";


const Drinks:FC = () => {
    return (
        <>
        <section className="body-font">
            <div className="container px-5 py-24 mx-auto" >
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary">Bebidas</h1>
                </div>
                <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/3">
                    <div className="card w-96 bg-base-100 border-base-200 rounded-2xl border p-6 shadow-sm sm:px-8 lg:p-12">
                        <div className="text-center">
                            <h2 className="text-lg font-medium  ">Refrescos</h2>
                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold  sm:text-4xl">$ 15</strong>
                            </p>
                        </div>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Pepsi</span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">7UP</span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Mansanita</span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Jarritos</span>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                    <div className="card w-96 bg-base-100 border-base-200 rounded-2xl border p-6 shadow-sm sm:px-8 lg:p-12">
                        <div className="text-center">
                            <h2 className="text-lg font-medium  ">Chanpolas</h2>
                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold  sm:text-4xl">$ 35</strong>
                            </p>
                        </div>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Fresa</span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Vainilla</span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Chocolate</span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Galleta</span>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                    <div className="card w-96 bg-base-100 border-base-200 rounded-2xl border p-6 shadow-sm sm:px-8 lg:p-12">
                        <div className="text-center">
                            <h2 className="text-lg font-medium  ">Malteada</h2>
                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold  sm:text-4xl">$ 30</strong>
                            </p>
                        </div>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Fresa</span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Vainilla</span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Chocolate</span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700"></span>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                    <div className="card w-96 bg-base-100 border-base-200 rounded-2xl border p-6 shadow-sm sm:px-8 lg:p-12">
                        <div className="text-center">
                            <h2 className="text-lg font-medium  ">Jugos</h2>
                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold  sm:text-4xl">$ 15</strong>
                            </p>
                        </div>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">19 Hermanos</span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700"></span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700"></span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700"></span>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                    <div className="card w-96 bg-base-100 border-base-200 rounded-2xl border p-6 shadow-sm sm:px-8 lg:p-12">
                        <div className="text-center">
                            <h2 className="text-lg font-medium  ">Agua</h2>
                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold  sm:text-4xl">$ 20</strong>
                            </p>
                        </div>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700">Great Value 1 L</span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700"></span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700"></span>
                            </li>
                            <li className="flex items-center gap1">
                                <span className="text-secondary-700"></span>
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

export default Drinks;