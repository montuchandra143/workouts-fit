import { IWorkout } from "@/type/workout.type";
import Image from "next/image";
import React from "react";

interface WorkOutDetalsProps {
  params: Promise<{
    id: string;
  }>;
}

const getWorkOutDetails = async (id: string): Promise<IWorkout> => {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  const data = await res.json();
  return data;
};

const WorkOutDetals = async ({ params }: WorkOutDetalsProps) => {
  const { id } = await params;
  const workout = await getWorkOutDetails(id);

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-white flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* Left Side: Image Box (Centered & Responsive) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative h-[380px] sm:h-[480px] lg:h-[520px] w-full max-w-[420px] rounded-[24px] overflow-hidden bg-[#15171c] border border-[#292d35] shadow-2xl">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Side: Content Details (Centered alignment style) */}
        <div className="lg:col-span-7 flex flex-col justify-center">

          <h1
            className="text-[28px] sm:text-[38px] lg:text-[42px] uppercase leading-[1.1] tracking-[2px] text-white mb-3"
            style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
          >
            {workout.name}
          </h1>

          {/* Description */}
          <p className="text-[#9298a3] text-[13px] sm:text-[14px] mb-5 leading-relaxed">
            {workout.description}
          </p>

          {/* Muscle Groups Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {workout.muscleGroups?.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#c6ff00] px-3.5 py-1 text-[11px] font-black uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Info Card Box */}
          <div className="bg-[#15171c] border border-[#292d35] rounded-[20px] p-4 sm:p-5 mb-6 space-y-3.5">
            <div className="flex justify-between items-center text-[13px] border-b border-[#292d35] pb-3">
              <span className="text-[#9298a3] uppercase tracking-[1px] text-[11px] font-bold">Equipment</span>
              <span className="font-bold text-white text-right">{workout.equipment}</span>
            </div>

            <div className="flex justify-between items-center text-[13px] border-b border-[#292d35] pb-3">
              <span className="text-[#9298a3] uppercase tracking-[1px] text-[11px] font-bold">Difficulty</span>
              <span className="font-bold text-white uppercase text-right">{workout.difficulty}</span>
            </div>

            <div className="flex justify-between items-center text-[13px] border-b border-[#292d35] pb-3">
              <span className="text-[#9298a3] uppercase tracking-[1px] text-[11px] font-bold">Sets</span>
              <span className="font-bold text-white text-right">{workout.sets}</span>
            </div>

            <div className="flex justify-between items-center text-[13px] border-b border-[#292d35] pb-3">
              <span className="text-[#9298a3] uppercase tracking-[1px] text-[11px] font-bold">Reps</span>
              <span className="font-bold text-white text-right">{workout.reps}</span>
            </div>

            <div className="flex justify-between items-center text-[13px] border-b border-[#292d35] pb-3">
              <span className="text-[#9298a3] uppercase tracking-[1px] text-[11px] font-bold">Duration</span>
              <span className="font-bold text-white text-right">{workout.duration} min</span>
            </div>

            <div className="flex justify-between items-center text-[13px] border-b border-[#292d35] pb-3">
              <span className="text-[#9298a3] uppercase tracking-[1px] text-[11px] font-bold">Calories</span>
              <span className="font-bold text-white text-right">{workout.caloriesBurned} kcal</span>
            </div>

            <div className="flex justify-between items-center text-[13px]">
              <span className="text-[#9298a3] uppercase tracking-[1px] text-[11px] font-bold">Rating</span>
              <span className="font-bold text-white text-right">⭐ {workout.rating}</span>
            </div>
          </div>

          {/* Instructions Section */}
          {workout.instructions && workout.instructions.length > 0 && (
            <div className="mb-8">
              <h3 className="text-[12px] font-bold uppercase tracking-[1.5px] text-white mb-3">
                Instructions
              </h3>
              <ol className="space-y-2 text-[13px] sm:text-[14px] text-[#9298a3]">
                {workout.instructions.map((workouts, index) => (
                  <li key={index} className="leading-relaxed">
                    {index + 1}. {workouts}
                  </li>
                ))}
              </ol>
            </div>
          )}

       {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button className="w-full py-3.5 px-6 rounded-[16px] bg-[#c6ff00] text-black font-bold text-[13px] hover:bg-[#b0e000] transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Add to today's plan</span>
            </button>
            <button className="w-full py-3.5 px-6 rounded-[16px] bg-[#15171c] text-white font-medium text-[13px] border border-[#292d35] hover:bg-[#1f232b] transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
              <svg className="w-5 h-5 text-[#9298a3] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              <span>Save for later</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WorkOutDetals;