import { IWorkout } from "@/type/workout.type";
import WorkOutCart from "@/components/shared/WorkOutCart";
import React from "react";

const getWorkOut = async (): Promise<IWorkout[]> => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
};

const WorkoutPage = async () => {
    const workoutData = await getWorkOut();

    return (
        <div className="w-full bg-[#0b0c0e] px-4 py-10 sm:px-6 lg:px-8 min-h-screen">
            <div className="mx-auto max-w-[1232px]">
                <div className="mb-7 flex items-end justify-between">
                    <div>
                        <p className="mb-2 text-[11px] font-bold uppercase tracking-[1.5px] text-[#c6ff00]">
                            WORKOUT LIBRARY
                        </p>

                        <h2 
                            className="text-[32px] uppercase leading-none tracking-tight text-white sm:text-[38px]" 
                            style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
                        >
                            PICK YOUR WORKOUT
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {workoutData.map((workout) => (
                        <WorkOutCart
                            key={workout.id} 
                            workout={workout} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkoutPage;