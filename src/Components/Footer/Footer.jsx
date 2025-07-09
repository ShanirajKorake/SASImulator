import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import gsap from 'gsap';

function Footer() {
    const footerText = useRef();
    const footerLogo = useRef();

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(footerLogo.current, { y: 360, opacity: 0 });
        tl.from(footerText.current, { y: 360, opacity: 0 });

    }, []);

    return (
        <div className="w-full flex-col sm:flex-row px-10 py-4 flex items-center justify-between bg-gray-900 text-gray-200 shadow-lg relative overflow-hidden shine-effect2">
            <div className="josefin-sans text-sm sm:w-1/3">
                <div className="josefin-sans text-sm w-1/3"
            >
                
                <div  className="flex h-fit text-lg gap-2 items-center">
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
                <div ref={footerText} className="text-xs mt-1">© 2025 SAS Automation. All rights reserved.</div>
            </div>
            <div className="sm:w-1/3 josefin-sans px-10">
                <ul className="flex justify-evenly w-full text-sm">
                    <li className="hover:text-green-400 transition duration-200 cursor-pointer">Privacy</li>
                    <li className="hover:text-green-400 transition duration-200 cursor-pointer">Terms</li>
                    <li className="hover:text-green-400 transition duration-200 cursor-pointer">Support</li>
                </ul>
            </div>
            <div className="sm:w-1/6 text-lg flex justify-end josefin-sans">
                <a
                    href="https://sasautomation.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-blue-400 hover:text-purple-400 transition duration-200 underline underline-offset-4"
                >
                    sasautomation.in
                </a>
            </div>
        </div>
    );
}

export default Footer;
