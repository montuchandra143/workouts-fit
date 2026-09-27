import Link from "next/link";
import React from "react";
import footerlogo from '../../../assets/logo.png';
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-[#0b0b0b] text-white border-t border-neutral-800 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 relative flex items-center justify-center">
                            <Image
                                src={footerlogo}
                                alt="Workout"
                                width={500}
                                height={500}
                                priority
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <span className="font-extrabold tracking-wider text-lg text-white">
                            FITLOG
                        </span>
                    </Link>

                    <p className="text-xs sm:text-sm text-neutral-400 text-center sm:text-right">
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;