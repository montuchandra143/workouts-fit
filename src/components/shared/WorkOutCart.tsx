import { IWorkout } from "@/type/workout.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IWorkOutCartProps {
  workout: IWorkout;
}

const WorkOutCart = ({ workout }: IWorkOutCartProps) => {
  return (
      <Link href={`/workout/${workout.id}`}>
      <article className="group overflow-hidden rounded-[16px] border border-[#292d35] bg-[#15171c] transition-all duration-200 hover:-translate-y-1 hover:border-[#3a3f48] cursor-pointer">
        <div className="relative h-[193px] w-full overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="px-6 pb-5 pt-5">
          <div className="mb-[14px] flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#c6ff00] px-[12px] py-[4px] text-[11px] font-black uppercase leading-none text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h3
            className="text-[20px] uppercase leading-[1.1] text-white"
            style={{
              fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
            }}
          >
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
              <span>⭐ {workout.rating}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default WorkOutCart;