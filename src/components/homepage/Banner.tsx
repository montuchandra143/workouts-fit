import React from 'react';
import Image from 'next/image';
import BannerImage from '../../../assets/banner.png';

const Banner = () => {
    return (
        <div className="w-full bg-[#0b0c0e] px-4 py-6 sm:px-6 lg:px-8">
            <div className="relative mx-auto max-w-[1232px] min-h-[448px] lg:h-[448px] overflow-hidden rounded-[17px] border border-[#292d35] bg-[#15171c] p-6 sm:p-10 lg:p-0">

                <div className="lg:absolute lg:left-[56px] lg:top-1/2 lg:z-10 lg:-translate-y-1/2 w-full lg:w-[570px] flex flex-col items-start">

                    {/* Small Heading */}
                    <p className="mb-4 sm:mb-[27px] text-[12px] font-bold uppercase tracking-[1px] text-[#c6ff00]">
                        WORKOUT LIBRARY
                    </p>
                    <h1
                        className="m-0 text-white uppercase text-4xl sm:text-5xl lg:text-[64px] leading-[0.94] tracking-[-1.5px]"
                        style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
                    >
                        TRAIN WITH INTENT. LOG<br className="hidden sm:inline" />
                        EVERY SET.
                    </h1>

                    <p className="mt-4 sm:mt-[18px] max-w-[510px] text-sm sm:text-[16px] font-normal leading-[1.55] text-[#969ba6]">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today's plan, and watch the week's work add up.
                    </p>
                    <button className="mt-6 sm:mt-[27px] h-[40px] rounded-[6px] bg-[#c6ff00] px-[24px] text-[12px] font-extrabold uppercase tracking-[0.2px] text-black transition-all duration-200 hover:bg-[#b8ef00] hover:scale-[1.02] active:scale-[0.98]">
                        BROWSE WORKOUTS
                    </button>

                </div>

                <div className="mt-8 lg:mt-0 lg:absolute lg:right-[55px] lg:top-1/2 flex h-[280px] sm:h-[340px] lg:h-[360px] w-full lg:w-[330px] lg:-translate-y-1/2 items-center justify-center">
                    <Image
                        src={BannerImage}
                        alt="Workout"
                        width={500}
                        height={500}
                        priority
                        className="h-full w-full object-contain"
                    />
                </div>

            </div>
        </div>
    );
};

export default Banner;