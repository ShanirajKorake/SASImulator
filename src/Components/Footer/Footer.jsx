import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import gsap from 'gsap';

function Footer() {
    const footerText = useRef();
    const footerLogo = useRef();

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(footerLogo.current, { y: 60, opacity: 0, duration: 0.8, ease: "power2.out" });
        tl.from(footerText.current, { y: 60, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.4");
    }, []);

    return (
        <div className="w-full px-6 py-5 lg:py-2 bg-gray-900 text-gray-200 shadow-lg relative josefin-sans overflow-hidden shine-effect2 flex flex-col gap-6 sm:gap-6 lg:flex-row items-center justify-between">
            {/* Left Section: Logo + Text */}
            <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
                <div ref={footerLogo} className="flex items-center gap-2">
                    <img src="./sas-dark.png" alt="logo" className="w-16 h-16" />
                    <div className="w-full leading-[0.9] text-4xl bebas-neue1 text-center lg:text-left">
                        <div className="hidden lg:block tracking-wider">SAS AUTOMATION</div>
                        <div className="block lg:hidden tracking-wide">
                            <pre className='text-2xl xl:hidden leading-[0.9] bebas-neue1 text-left'>
                            {`SAS
Automation`}
                        </pre>
                            </div>
                    </div>
                </div>
                <div ref={footerText} className="text-xs mt-2 text-center lg:text-left hidden lg:block">
                    © 2025 SAS Automation Pvt. Ltd. All rights reserved.
                </div>
            </div>

            {/* Center Section: Navigation */}
            <div className="w-full sm:w-auto lg:w-1/3 flex justify-center">
                <ul className="flex gap-6 text-sm">
                    <li className="hover:text-green-400 transition duration-200 cursor-pointer">Privacy</li>
                    <li className="hover:text-green-400 transition duration-200 cursor-pointer">Terms</li>
                    <li className="hover:text-green-400 transition duration-200 cursor-pointer">Support</li>
                </ul>
            </div>

            {/* Right Section: Link */}
            <div className="w-full sm:w-auto lg:w-1/3 flex justify-center lg:justify-end hidden lg:flex">
                <a
                    href="https://sasautomation.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-blue-400 hover:text-purple-400 transition duration-200 underline underline-offset-4"
                >
                    sasautomation.in
                </a>
            </div>
            <div className="lg:hidden w-full lg:w-1/3 flex flex-col items-center lg:items-start">
                <div ref={footerText} className="text-xs mt-2 text-center lg:text-left">
                    © 2025 SAS Automation Pvt. Ltd. All rights reserved.
                </div>
            </div>
        </div>
    );
}

export default Footer;
