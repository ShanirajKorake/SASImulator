import React, { useState,useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Header() {
     const heading = useRef();
    const heading1 = useRef();
    const sidebarRef = useRef();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    useGSAP(() => {
        const tl1 = gsap.timeline();
        
        tl1.from(heading1.current, { y: -360, opacity: 0 });
        tl1.from(heading.current, { y: -360, opacity: 0 });
        gsap.from("li", { y: -360, opacity: 0 });
        gsap.from("i", { y: -360, opacity: 0 });
    },[]);

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

    return (
        <>
        <div className="w-full sm:w-full px-5 sm:px-10 py-2 flex items-center justify-between bg-black text-gray-200 shadow-lg relative overflow-hidden shine-effect">
            <div className="josefin-sans text-sm w-1/3"
            >
                
                <div ref={heading} className="flex h-fit text-lg gap-2 items-center">
                    <img src="./sas-dark.png" alt="logo" className='w-16 h-16'/>
                        <pre className='text-3xl sm:hidden leading-[0.9] bebas-neue1'>
                           {`SAS
Automation`}
                        </pre>
                        <div className='text-3xl hidden sm:block tracking-wide leading-[0.9] bebas-neue1' >
                            SAS AUTOMATION PVT. LTD.
                        </div>
                </div>
            </div>
            <div className="w-1/3 josefin-sans px-10 hidden sm:flex ">
                <ul className="flex justify-end gap-12 w-full">
                    <li className="hover:text-green-400 transition duration-200 cursor-pointer">Home</li>
                    <li className="hover:text-green-400 transition duration-200 cursor-pointer">About us</li>
                    <li className="hover:text-green-400 transition duration-200 cursor-pointer">Our Products</li>
                </ul>
            </div>
            <div className="w-1/6 flex justify-end sm:hidden">
                <i className="ri-map-pin-line mx-5 text-3xl hover:text-blue-400 transition duration-200 cursor-pointer hidden sm:flex"></i>
     <i
                        className="ri-menu-line text-3xl hover:text-purple-400 transition duration-200 cursor-pointer"
                        onClick={toggleSidebar}
                    ></i>            </div>
            
        </div>
                    {/* Sidebar */}
            <div
                ref={sidebarRef}
                className="fixed top-[80px] right-0 w-full sm:w-1/3 h-auto bg-black text-white p-6 z-50 shadow-lg border border-gray-600"
                style={{ transform: 'translateX(100%)' }} // hidden by default
            >
                <ul className="flex flex-col gap-6 mt-2 text-lg">
                    <li className="hover:text-green-400 cursor-pointer">Profile</li>
                    <li className="hover:text-blue-400 cursor-pointer">Settings</li>
                    <li className="hover:text-red-400 cursor-pointer">Logout</li>
                </ul>
            </div>
        </>
    );
}

export default Header;
