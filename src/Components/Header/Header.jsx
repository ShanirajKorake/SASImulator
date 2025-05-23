import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import gsap from 'gsap';

function Header() {
    const heading = useRef();
    const heading1 = useRef();
    useGSAP(() => {
        const tl1 = gsap.timeline();
        
        tl1.from(heading1.current, { y: -360, opacity: 0 });
        tl1.from(heading.current, { y: -360, opacity: 0 });
        gsap.from("li", { y: -360, opacity: 0 });
        gsap.from("i", { y: -360, opacity: 0 });
    },[]);

    return (
        <div className="w-full px-10 py-2 flex items-center justify-between bg-gray-900 text-gray-200 shadow-lg relative overflow-hidden shine-effect">
            <div className="josefin-sans text-sm w-1/3"
            >
                <div ref={heading1} className="inline-block">
                    from SAS AUTOMATION
                </div>
                <div ref={heading} className="inline-block bebas-neue text-4xl pl-1">
                    <span className="text-5xl">
                        S<span className='text-purple-400'>A</span>S<span className='text-purple-400'>I</span>
                    </span>
                    mulator
                </div>
            </div>
            <div className="w-1/3 josefin-sans px-10">
                <ul className="flex justify-evenly w-full">
                    <li className="hover:text-green-400 transition duration-200 cursor-pointer">Off-road</li>
                    <li className="hover:text-green-400 transition duration-200 cursor-pointer">City</li>
                    <li className="hover:text-green-400 transition duration-200 cursor-pointer">E-Twin</li>
                </ul>
            </div>
            <div className="w-1/6 flex justify-end">
                <i className="ri-map-pin-line mx-5 text-xl hover:text-blue-400 transition duration-200 cursor-pointer"></i>
                <i className="ri-menu-line text-xl hover:text-purple-400 transition duration-200 cursor-pointer"></i>
            </div>
        </div>
    );
}

export default Header;
