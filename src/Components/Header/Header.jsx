import React, { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Header() {
    const heading = useRef();
    const heading1 = useRef();
    const sidebarRef = useRef();
    const productsDropdownRef = useRef();
    const servicesDropdownRef = useRef();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    useGSAP(() => {
        const tl1 = gsap.timeline();
        tl1.from(heading1.current, { y: -360, opacity: 0 });
        tl1.from(heading.current, { y: -360, opacity: 0 });
        gsap.from("li", { y: -360, opacity: 0 });
        gsap.from("i", { y: -360, opacity: 0 });
    }, []);

    const openSidebar = () => {
        setIsSidebarOpen(true);
        gsap.to(sidebarRef.current, {
            x: 0,
            duration: 0.5,
            ease: 'power3.out'
        });
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
        gsap.to(sidebarRef.current, {
            x: '100%',
            duration: 0.5,
            ease: 'power3.in'
        });
    };

    const toggleSidebar = () => {
        isSidebarOpen ? closeSidebar() : openSidebar();
    };

    const toggleDropdown = (label) => {
        setOpenDropdown((prev) => (prev === label ? null : label));
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            const dropdownRef =
                openDropdown === "products"
                    ? productsDropdownRef
                    : openDropdown === "services"
                        ? servicesDropdownRef
                        : null;

            if (dropdownRef?.current && !dropdownRef.current.contains(e.target)) {
                setOpenDropdown(null);
            }

            if (
                isSidebarOpen &&
                sidebarRef.current &&
                !sidebarRef.current.contains(e.target) &&
                !e.target.closest('.ri-menu-line') // prevent immediate close when toggling
            ) {
                closeSidebar();
            }
        };

        const handleScroll = () => {
            setOpenDropdown(null);
            if (isSidebarOpen) {
                closeSidebar();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [openDropdown, isSidebarOpen]);

    useEffect(() => {
        if (openDropdown === "products") {
            gsap.fromTo(productsDropdownRef.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.3 });
        }
        if (openDropdown === "services") {
            gsap.fromTo(servicesDropdownRef.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.3 });
        }
    }, [openDropdown]);

    return (
        <>
            <div className="w-full sm:w-full px-5 sm:px-10 py-2 flex items-center justify-between bg-black text-gray-200 shadow-lg relative z-50 shine-effect 2xl:px-40">
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
                <div className="xl:w-2/3 josefin-sans px-10 hidden sm:flex relative z-50 overflow-visible">
                    <ul className="flex justify-end gap-24 w-full relative z-50 overflow-visible">
                        {/* Products */}
                        <li className="relative">
                            <div
                                onClick={() => toggleDropdown("products")}
                                className="hover:text-green-400 transition duration-200 cursor-pointer"
                            >
                                Products
                            </div>
                            {openDropdown === "products" && (
                                <ul
                                    ref={productsDropdownRef}
                                    className="absolute top-full -left-32 mt-2 bg-black text-white border border-gray-800 rounded shadow-lg w-80 z-[999]"
                                >
                                    <li
                                        className="px-4 py-2 hover:text-green-400 cursor-pointer w-full text-center"
                                        onClick={() => {
                                            document.getElementById("product")?.scrollIntoView({ behavior: "smooth" });
                                            setOpenDropdown(null);
                                        }}
                                    >
                                        Driving Motion Simulator
                                    </li>
                                    <li
                                        className="px-4 py-2 hover:text-green-400 cursor-pointer w-full text-center"
                                        onClick={() => {
                                            document.getElementById("automotive-testing")?.scrollIntoView({ behavior: "smooth" });
                                            setOpenDropdown(null);
                                        }}
                                    >
                                        Automotive Testing Simulator
                                    </li>
                                    <li
                                        className="px-4 py-2 hover:text-green-400 cursor-pointer w-full text-center"
                                        onClick={() => {
                                            document.getElementById("driving-test")?.scrollIntoView({ behavior: "smooth" });
                                            setOpenDropdown(null);
                                        }}
                                    >
                                        Driving Test Simulator
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li className="relative">
                            <div
                                onClick={() => toggleDropdown("services")}
                                className="hover:text-green-400 transition duration-200 cursor-pointer"
                            >
                                Services
                            </div>
                            {openDropdown === "services" && (
                                <ul
                                    ref={servicesDropdownRef}
                                    className="absolute top-full -left-32 mt-2 bg-black text-white border border-gray-800 rounded shadow-lg w-80 z-[999]"
                                >
                                    {[
                                        "Driving Simulator Training",
                                        "Automotive Parts Testing",
                                        "Driving License Exam Simulation",
                                        "Vehicle Dynamics Research",
                                        "ADAS & Autonomous Systems Testing"
                                    ].map((item, i) => (
                                        <li
                                            key={i}
                                            className="px-4 py-2 hover:text-green-400 cursor-pointer w-full text-center"
                                            onClick={() => {
                                                document.getElementById("slider11")?.scrollIntoView({ behavior: "smooth" });
                                                setOpenDropdown(null);
                                            }}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        <li>
                            <a
                                href="https://sasautomation.in/about/"
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
                    <li
                        className="hover:text-green-400 cursor-pointer"
                        onClick={() => {
                            document.getElementById("product")?.scrollIntoView({ behavior: "smooth" });
                            closeSidebar();
                        }}
                    >
                        Products
                    </li>
                    <li
                        className="hover:text-blue-400 cursor-pointer"
                        onClick={() => {
                            document.getElementById("slider11")?.scrollIntoView({ behavior: "smooth" });
                            closeSidebar();
                        }}
                    >
                        Services
                    </li>
                    <li
                        className="hover:text-red-400 cursor-pointer"
                        onClick={() => {
                            window.location.href = "https://sasautomation.in/about/";
                        }}
                    >
                        About us
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Header;
