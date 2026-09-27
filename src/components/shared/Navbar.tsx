'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import { WorkOutContext } from '@/context/WorkProvider';

const Navbar = () => {
    const { todayPlan = [], savePlan = [] } = useContext(WorkOutContext);

    return (
        <nav className="bg-[#0b0b0b] text-white border-b border-neutral-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    <div className="flex items-center space-x-3">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="text-[#ccff00]">

                            </div>
                            <span className="font-extrabold tracking-wider text-xl text-white">
                                FITLOG
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-2 bg-[#121212] px-2 py-1.5 rounded-full border border-neutral-800">
                        <Link
                            href="/"
                            className="bg-[#1a2e05] text-[#ccff00] px-5 py-1.5 rounded-full text-sm font-medium transition"
                        >
                            Workouts
                        </Link>
                        <Link
                            href="/myplan"
                            className="rounded-full bg-[#15171c] border border-[#292d35] px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#9298a3] transition-all hover:text-white hover:border-[#9298a3]"
                        >
                            My Plan
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4 md:space-x-6">
                        <div className="flex items-center space-x-1.5 md:space-x-2 text-xs md:text-sm">
                            <span className="text-neutral-300">Plan</span>
                            <span className="bg-[#ccff00] text-black font-bold h-5 w-5 md:h-6 md:w-6 rounded-full flex items-center justify-center text-xs">
                                {todayPlan.length}
                            </span>
                        </div>
                        <div className="flex items-center space-x-1.5 md:space-x-2 text-xs md:text-sm">
                            <span className="text-neutral-300">Saved</span>
                            <span className="bg-[#171717] text-neutral-400 border border-neutral-700 font-bold h-5 w-5 md:h-6 md:w-6 rounded-full flex items-center justify-center text-xs">
                                {savePlan.length}
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;