import React, { useEffect, useRef, useState } from 'react'

export const Nav = () => {
    const [isSearchHidden, setSearchIsHidden] = useState(false)
    const [isMenuHidden, setIsMenuHidden] = useState(false)
    const inputRef = useRef(null)

    const searchClick = () => {
        setSearchIsHidden(!isSearchHidden)
        setIsMenuHidden(!isMenuHidden)
    }

    const burgerClick = () => {
        setSearchIsHidden(false)
        setIsMenuHidden(!isMenuHidden)
    }

    useEffect(() => {
        if (isSearchHidden) {
            inputRef.current.focus();
        }
    }, [searchClick]);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Baim Store</span>
                </a>
                <div className="flex md:order-1">
                    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search"
                        aria-expanded="false" onClick={searchClick}
                        className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar"
                            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search for an item.." />
                    </div>
                    <button data-collapse-toggle="navbar-search" type="button" onClick={burgerClick}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-search" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between ${!isMenuHidden && 'hidden'} w-full md:flex md:w-auto md:order-2`} id="navbar-search">
                    <div className="relative mt-3 md:hidden">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="search-navbar" ref={inputRef}
                            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search for an item.." />
                    </div>
                    <ul
                        className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#"
                                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                aria-current="page">Store</a>
                        </li>
                        <li>
                            <a href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Account</a>
                        </li>
                        <li>
                            <a href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Wishlist</a>
                        </li>
                        <li className="flex">
                            <a href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 me-2">Chart</a>
                            <svg className="my-auto" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.7986 19.725C15.8377 19.7315 15.8766 19.7347 15.915 19.7347C16.2525 19.7347 16.5504 19.4909 16.6077 19.147L17.3109 14.9283C17.3747 14.5452 17.116 14.1829 16.7329 14.1191C16.3498 14.0551 15.9876 14.314 15.9237 14.6971L15.2206 18.9158C15.1568 19.2989 15.4155 19.6612 15.7986 19.725Z"
                                    fill="white" />
                                <path
                                    d="M7.43937 19.1469C7.49669 19.4909 7.79454 19.7346 8.13208 19.7346C8.17048 19.7346 8.20938 19.7315 8.24852 19.7249C8.63159 19.6611 8.89034 19.2988 8.82649 18.9158L8.12337 14.697C8.05952 14.3139 7.69732 14.0552 7.31421 14.119C6.93115 14.1829 6.6724 14.5451 6.73624 14.9282L7.43937 19.1469Z"
                                    fill="white" />
                                <path
                                    d="M23.2969 8.48437H20.8223L15.4084 1.71702C15.1659 1.41388 14.7234 1.36462 14.4202 1.60724C14.1169 1.84982 14.0677 2.29227 14.3104 2.59551L19.0215 8.48437H4.97855L9.68967 2.59551C9.93225 2.29227 9.88308 1.84977 9.57989 1.60724C9.27661 1.36462 8.83416 1.41384 8.59163 1.71702L3.1777 8.48437H0.703125C0.314812 8.48437 0 8.79918 0 9.18749V12C0 12.3883 0.314812 12.7031 0.703125 12.7031H1.57903L4.24584 22.0369C4.33205 22.3388 4.60795 22.5469 4.92188 22.5469H19.0781C19.392 22.5469 19.668 22.3388 19.7542 22.0369L22.421 12.7031H23.2969C23.6852 12.7031 24 12.3883 24 12V9.18749C24 8.79918 23.6852 8.48437 23.2969 8.48437ZM18.5478 21.1406H5.45222L3.04153 12.7031H20.9585L18.5478 21.1406ZM22.5938 11.2969C20.1851 11.2969 3.68813 11.2969 1.40625 11.2969V9.89062H22.5938V11.2969Z"
                                    fill="white" />
                                <path
                                    d="M12 19.7344C12.3883 19.7344 12.7031 19.4196 12.7031 19.0312V14.8125C12.7031 14.4242 12.3883 14.1094 12 14.1094C11.6117 14.1094 11.2969 14.4242 11.2969 14.8125V19.0312C11.2969 19.4196 11.6117 19.7344 12 19.7344Z"
                                    fill="white" />
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-w-screen-2xl flex items-center justify-between mx-auto md:p-4 p-8">
                <p>Dresses</p>
                <p>Tops</p>
                <p>Jackets</p>
                <p>Lingerie</p>
            </div>
        </nav>
    )
}
