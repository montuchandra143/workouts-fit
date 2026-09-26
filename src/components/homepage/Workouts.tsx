import React from 'react';

const getWorkOut = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = res.json();
    return data;
};



const Workouts = async () => {
    const workoutData = await getWorkOut();

    return (
        <section className="w-full bg-[#0b0c0e] px-4 py-10 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-[1232px]">

                <div className="mb-7 flex items-end justify-between">
                    <div>
                        <p className="mb-2 text-[11px] font-bold uppercase tracking-[1.5px] text-[#c6ff00]">
                            WORKOUT LIBRARY
                        </p>

                        <h2 className="text-[32px] uppercase leading-none tracking-tight text-white sm:text-[38px]" style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}>
                            PICK YOUR WORKOUT
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    {workoutData.map((workout) => (

                        <article key={workout.id} className="group overflow-hidden rounded-[16px] border border-[#292d35] bg-[#15171c] transition-all duration-200 hover:-translate-y-1 hover:border-[#3a3f48]">

                            <div className="relative h-[193px] w-full overflow-hidden">

                                <img
                                    src={workout.image}
                                    alt={workout.name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                />

                            </div>

                            <div className="px-6 pb-5 pt-5">

                                <div className="mb-[14px] flex flex-wrap gap-2">

                                    {workout.muscleGroups.map((muscle) => (

                                        <span key={muscle} className="rounded-full bg-[#c6ff00] px-[12px] py-[4px] text-[11px] font-black uppercase leading-none text-black">
                                            {muscle}
                                        </span>

                                    ))}

                                </div>

                                <h3 className="text-[20px] uppercase leading-[1.1] text-white" style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}>
                                    {workout.name}
                                </h3>

                                <p className="mt-[7px] text-[13px] text-[#9298a3]">
                                    {workout.equipment}
                                </p>

                                <div className="my-[17px] h-px w-full bg-[#292d35]" />

                                <div className="flex items-center gap-5 text-[12px] text-[#9298a3]">

                                    <div className="flex items-center gap-[6px]">
                                      
                                        <span>{workout.duration} min</span>
                                    </div>

                                    <div className="flex items-center gap-[6px]">
                         
                                        <span>{workout.caloriesBurned} kcal</span>
                                    </div>

                                    <div className="flex items-center gap-[6px]">
                                     
                                        <span>{workout.rating}</span>
                                    </div>

                                </div>

                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Workouts;