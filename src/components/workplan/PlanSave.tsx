'use client';

import { WorkOutContext, WorkOutContextType } from '@/context/WorkProvider';
import { IWorkout } from '@/type/workout.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const PlanSave = ({ workout }: { workout: IWorkout }) => {
   const context = useContext(WorkOutContext) as WorkOutContextType;

   if (!context) {
       throw new Error("WorkOutContext must be used within a WorkOutProvider");
   }

   const { savePlan = [], setSavePlan } = context;

   const handlePlanSave = () => {
        const isAlreadySaved = savePlan.some((item: IWorkout) => item.id === workout.id);

        if (isAlreadySaved) {
            toast.error(`${workout.name} is already saved for later!`, {
                position: "top-right",
                autoClose: 3000,
                style: {
                    background: '#ef4444', 
                    color: '#ffffff',      
                    fontWeight: '600',
                }
            });
            return;
        }

        console.log("Save Plan...............", workout);
        setSavePlan([...savePlan, workout]);
        
        toast.success(`${workout.name} has been saved for later!`, {
            position: "top-right",
            autoClose: 3000,
        });
   };
   
   return (
        <div>
            <button 
                className="w-full py-3.5 px-6 rounded-[16px] bg-[#15171c] text-white font-medium text-[13px] border border-[#292d35] hover:bg-[#1f232b] transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                onClick={handlePlanSave}
            >
                <svg className="w-5 h-5 text-[#9298a3] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <span>Save for later</span>
            </button>
        </div>
   );
};

export default PlanSave;