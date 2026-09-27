import PlanSave from "@/components/workplan/PlanSave";
import TodyPlan from "@/components/workplan/TodyPlan";
import { IWorkout } from "@/type/workout.type";
import Image from "next/image";
import React from "react";

interface WorkOutDetalsProps {
  params: Promise<{
    id: string;
  }>;
}

const getWorkOutDetails = async (id: string): Promise<IWorkout> => {
  const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`);
  const data = await res.json();
  return data;
};

const WorkOutDetals = async ({ params }: WorkOutDetalsProps) => {
  const { id } = await params;
  const workout = await getWorkOutDetails(id);

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-white flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

  
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

       
        <div className="lg:col-span-7 flex flex-col justify-center">

          <h1
            className="text-[28px] sm:text-[38px] lg:text-[42px] uppercase leading-[1.1] tracking-[2px] text-white mb-3"
            style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
          >
            {workout.name}
          </h1>
          <p className="text-[#9298a3] text-[13px] sm:text-[14px] mb-5 leading-relaxed">
            {workout.description}
          </p>

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

          {workout.instructions && workout.instructions.length > 0 && (
            <div className="mb-8">
              <h3 className="text-[12px] font-bold uppercase tracking-[1.5px] text-white mb-3">
                Instructions
              </h3>
              <ol className="space-y-2 text-[13px] sm:text-[14px] text-[#9298a3]">
                {workout.instructions.map((stepText, index) => (
                  <li key={index} className="leading-relaxed">
                    {index + 1}. {stepText}
                  </li>
                ))}
              </ol>
            </div>
          )}

      
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
             <TodyPlan workout={workout} />
             <PlanSave  workout={workout}/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WorkOutDetals;