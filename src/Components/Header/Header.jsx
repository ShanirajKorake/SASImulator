import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Header() {
    const heading = useRef();
    const heading1 = useRef();
    const sidebarRef = useRef();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    useGSAP(() => {
        const tl1 = gsap.timeline();
        tl1.from(heading1.current, { y: -360, opacity: 0 });
        tl1.from(heading.current, { y: -360, opacity: 0 });
        gsap.from("li", { y: -360, opacity: 0 });
        gsap.from("i", { y: -360, opacity: 0 });
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
        if (!isSidebarOpen) {
            gsap.to(sidebarRef.current, {
                x: 0,
                duration: 0.5,
                ease: 'power3.out'
            });
        } else {
            gsap.to(sidebarRef.current, {
                x: '100%',
                duration: 0.5,
                ease: 'power3.in'
            });
        }
    };

    const toggleDropdown = (label) => {
        setOpenDropdown(prev => (prev === label ? null : label));
    };

    return (
        <>
            <div className="w-full sm:w-full px-5 sm:px-10 py-2 flex items-center justify-between bg-black text-gray-200 shadow-lg relative overflow-hidden shine-effect 2xl:px-40">
                {/* Logo Section */}
                <div className="josefin-sans text-sm w-1/3">
                    <div ref={heading} className="flex h-fit text-lg gap-2 items-center">
                        <img src="./sas-dark.png" alt="logo" className='w-16 h-16' />
                        <pre className='text-2xl sm:3xl xl:hidden leading-[0.9] bebas-neue1'>
                            {`SAS
Automation`}
                        </pre>
                        <div ref={heading1} className='text-3xl hidden self-center md:hidden lg:hidden xl:block tracking-wider leading-[0.9] bebas-neue1 2xl:text-4xl overflow-hidden'>
                            SAS AUTOMATION PVT. LTD.
                        </div>
                    </div>
                </div>

                {/* Center Menu (Desktop) */}
                <div className="xl:w-1/3 josefin-sans px-10 hidden sm:flex relative">
                    <ul className="flex justify-end gap-12 w-full relative">
                        {/* Products */}
                        <li className="relative">
                            <div
                                onClick={() => toggleDropdown("products")}
                                className="hover:text-green-400 transition duration-200 cursor-pointer"
                            >
                                Products
                            </div>
                            {openDropdown === "products" && (
                                <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg w-40 z-50">
                                    <li className="px-4 py-2 hover:bg-green-100 cursor-pointer">Product A</li>
                                    <li className="px-4 py-2 hover:bg-green-100 cursor-pointer">Product B</li>
                                </ul>
                            )}
                        </li>

                        {/* Services */}
                        <li className="relative">
                            <div
                                onClick={() => toggleDropdown("services")}
                                className="hover:text-green-400 transition duration-200 cursor-pointer"
                            >
                                Services
                            </div>
                            {openDropdown === "services" && (
                                <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg w-40 z-50">
                                    <li className="px-4 py-2 hover:bg-green-100 cursor-pointer">Consulting</li>
                                    <li className="px-4 py-2 hover:bg-green-100 cursor-pointer">Maintenance</li>
                                </ul>
                            )}
                        </li>

                        {/* About Us */}
                        <li>
                            <a
                                href="/about-us"
                                className="hover:text-green-400 transition duration-200 cursor-pointer"
                            >
                                About us
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu Icon */}
                <div className="w-1/6 flex justify-end sm:hidden">
                    <i className="ri-map-pin-line mx-5 text-3xl hover:text-blue-400 transition duration-200 cursor-pointer hidden sm:flex"></i>
                    <i
                        className="ri-menu-line text-2xl hover:text-purple-400 transition duration-200 cursor-pointer"
                        onClick={toggleSidebar}
                    ></i>
                </div>
            </div>

            {/* Sidebar (Mobile) */}
            <div
                ref={sidebarRef}
                className="fixed top-[80px] right-0 w-full sm:w-1/3 h-auto bg-black text-white p-6 z-50 shadow-lg border border-gray-600"
                style={{ transform: 'translateX(100%)' }}
            >
                <ul className="flex flex-col gap-4 mt-1 josefin-sans">
                    <li className="hover:text-green-400 cursor-pointer">Home</li>
                    <li className="hover:text-blue-400 cursor-pointer">About us</li>
                    <li className="hover:text-red-400 cursor-pointer">Our Products</li>
                </ul>
            </div>
        </>
    );
}

export default Header;
