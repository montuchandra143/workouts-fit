"use client";

import { WorkOutContext } from "@/context/WorkProvider";
import { IWorkout } from "@/type/workout.type";
import Image from "next/image";
import Link from "next/link"; 
import React, { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";

const MyPlan = () => {
  const { todayPlan = [], setTodyPlan, savePlan = [], setSavePlan } = useContext(WorkOutContext);
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const [sortBy, setSortBy] = useState<string>("Duration");


  const sortItems = (items: IWorkout[]) => {
    return [...items].sort((a, b) => {
      if (sortBy === "Duration") {
        return (b.duration || 0) - (a.duration || 0);
      } else if (sortBy === "Calories") {
        return (b.caloriesBurned || 0) - (a.caloriesBurned || 0);
      } else if (sortBy === "Rating") {
        return (b.rating || 0) - (a.rating || 0);
      }
      return 0;
    });
  };

  const displayedTodayPlan = sortItems(todayPlan);
  const displayedSavedPlan = sortItems(savePlan);

  const totalExercises = todayPlan.length;
  const totalMinutes = todayPlan.reduce(
    (acc: number, item: IWorkout) => acc + (item.duration || 0),
    0
  );
  const totalCalories = todayPlan.reduce(
    (acc: number, item: IWorkout) => acc + (item.caloriesBurned || 0),
    0
  );

  const handleRemoveToday = (id: number) => {
    const updated = todayPlan.filter((item: IWorkout) => item.id !== id);
    setTodyPlan(updated);
  };

  const handleRemoveSaved = (id: number) => {
    const updated = savePlan.filter((item: IWorkout) => item.id !== id);
    setSavePlan(updated);
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-white px-4 sm:px-6 lg:px-12 py-8 md:py-12">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <div className="space-y-1">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider uppercase text-white">
            MY PLAN
          </h1>
          <p className="text-[#8b919e] text-sm sm:text-base font-normal">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="bg-[#121418] border border-[#1e222d] rounded-2xl p-6 sm:p-8 grid grid-cols-3 divide-x divide-[#1e222d]">
          <div className="pr-4 sm:pr-8 space-y-1">
            <p className="text-xs sm:text-sm font-medium text-[#8b919e]">Exercises</p>
            <p className="text-3xl sm:text-5xl font-black text-[#a3e635] tracking-tight">
              {totalExercises}
            </p>
          </div>
          <div className="px-4 sm:px-8 space-y-1">
            <p className="text-xs sm:text-sm font-medium text-[#8b919e]">Minutes</p>
            <p className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {totalMinutes}
            </p>
          </div>
          <div className="pl-4 sm:pl-8 space-y-1">
            <p className="text-xs sm:text-sm font-medium text-[#8b919e]">Calories</p>
            <p className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {totalCalories}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center bg-[#121418] p-1 rounded-xl border border-[#1e222d]">
            <button
              onClick={() => setActiveTab("today")}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeTab === "today"
                  ? "bg-[#1a1d24] text-white"
                  : "text-[#8b919e] hover:text-white"
              }`}
            >
              Today's Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeTab === "saved"
                  ? "bg-[#1a1d24] text-white"
                  : "text-[#8b919e] hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm text-[#8b919e]">
            <span>Sort By</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#121418] border border-[#1e222d] text-white px-3 py-2 rounded-xl outline-none cursor-pointer"
            >
              <option value="Duration">Duration</option>
              <option value="Calories">Calories</option>
              <option value="Rating">Rating</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {activeTab === "today" ? (
            displayedTodayPlan.length === 0 ? (
              <div className="py-24 px-4 text-center border border-[#1e222d] rounded-2xl bg-[#121418] flex flex-col items-center justify-center space-y-4">
                <h3 className="text-xl sm:text-2xl font-black tracking-widest text-white uppercase">
                  NOTHING HERE YET
                </h3>
                <p className="text-[#8b919e] text-sm sm:text-base max-w-sm">
                  Browse the library and add a lift to get today moving.
                </p>
                <Link
                  href="/" 
                  className="mt-2 px-6 py-3 rounded-full bg-[#c6ff00] text-black text-sm font-bold hover:bg-[#b0e000] transition-colors shadow-lg"
                >
                  Go to workouts
                </Link>
              </div>
            ) : (
              displayedTodayPlan.map((item: IWorkout, index: number) => (
                <div
                  key={`${item.id}-${index}`}
                  className="bg-[#121418] border border-[#1e222d] rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-[#2a2f3d] transition-all"
                >
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    {item.image && (
                      <div className="relative w-24 h-16 sm:w-28 sm:h-18 rounded-xl overflow-hidden shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name || "Workout Image"}
                          fill
                          sizes="(max-width: 640px) 96px, 112px"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-wide uppercase">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#8b919e]">
                        {item.equipment || item.muscleGroups?.join(", ")}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-[#8b919e] pt-1">
                        <span className="flex items-center gap-1">⏱️ {item.duration} min</span>
                        <span className="flex items-center gap-1">🔥 {item.caloriesBurned} kcal</span>
                        <span className="flex items-center gap-1">⭐ {item.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-[#1e222d]">
                    <button className="px-4 py-2 rounded-xl border border-[#2a2f3d] text-xs font-semibold text-white hover:bg-[#1a1d24] transition-colors cursor-pointer">
                      View Details
                    </button>
                    <button className="px-4 py-2 rounded-xl bg-[#c6ff00] text-black text-xs font-bold hover:bg-[#b0e000] transition-colors flex items-center gap-1.5 cursor-pointer">
                      <span><GiCheckMark /></span> Mark as Done
                    </button>
                    <button
                      onClick={() => handleRemoveToday(item.id)}
                      className="p-2 text-[#8b919e] hover:text-red-500 transition-colors cursor-pointer"
                      title="Remove"
                    >
                      <IoClose size={20} />
                    </button>
                  </div>
                </div>
              ))
            )
          ) : (
            displayedSavedPlan.length === 0 ? (
              <div className="py-24 px-4 text-center border border-[#1e222d] rounded-2xl bg-[#121418] flex flex-col items-center justify-center space-y-4">
                <h3 className="text-xl sm:text-2xl font-black tracking-widest text-white uppercase">
                  NOTHING HERE YET
                </h3>
                <p className="text-[#8b919e] text-sm sm:text-base max-w-sm">
                  No saved workouts found in your list.
                </p>
                <Link
                  href="/"
                  className="mt-2 px-6 py-3 rounded-full bg-[#c6ff00] text-black text-sm font-bold hover:bg-[#b0e000] transition-colors shadow-lg"
                >
                  Go to workouts
                </Link>
              </div>
            ) : (
              displayedSavedPlan.map((item: IWorkout, index: number) => (
                <div
                  key={`${item.id}-${index}`}
                  className="bg-[#121418] border border-[#1e222d] rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-[#2a2f3d] transition-all"
                >
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    {item.image && (
                      <div className="relative w-24 h-16 sm:w-28 sm:h-18 rounded-xl overflow-hidden shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name || "Workout Image"}
                          fill
                          sizes="(max-width: 640px) 96px, 112px"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-wide uppercase">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#8b919e]">
                        {item.equipment || item.muscleGroups?.join(", ")}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-[#8b919e] pt-1">
                        <span className="flex items-center gap-1">⏱️ {item.duration} min</span>
                        <span className="flex items-center gap-1">🔥 {item.caloriesBurned} kcal</span>
                        <span className="flex items-center gap-1">⭐ {item.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-[#1e222d]">
                    <button className="px-4 py-2 rounded-xl border border-[#2a2f3d] text-xs font-semibold text-white hover:bg-[#1a1d24] transition-colors cursor-pointer">
                      View Details
                    </button>
                    <button
                      onClick={() => handleRemoveSaved(item.id)}
                      className="p-2 text-[#8b919e] hover:text-red-500 transition-colors cursor-pointer"
                      title="Remove"
                    >
                      <IoClose size={20} />
                    </button>
                  </div>
                </div>
              ))
            )
          )}
        </div>

      </div>
    </div>
  );
};

export default MyPlan;