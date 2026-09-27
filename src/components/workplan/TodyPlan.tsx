'use client';

import { WorkOutContext, WorkOutContextType } from '@/context/WorkProvider';
import { IWorkout } from '@/type/workout.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const TodyPlan = ({ workout }: { workout: IWorkout }) => {
 const context = useContext(WorkOutContext) as WorkOutContextType;

 if (!context) {
     throw new Error("WorkOutContext must be used within a WorkOutProvider");
 }

 const { todayPlan = [], setTodyPlan } = context;

 const handleToday = () => {
    const isAlreadyExists = todayPlan.some((item: IWorkout) => item.id === workout.id);

    if (isAlreadyExists) {
        toast.error(`${workout.name} is already selected in today's plan!`, {
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

    console.log("Today Plan...............", workout);
    setTodyPlan([...todayPlan, workout]);
    
   
    toast.success(`${workout.name} has been added to today's plan!`, {
        position: "top-right",
        autoClose: 3000,
    });
 };

 return (
    <div>
        <button 
            className="w-full py-3.5 px-6 rounded-[16px] bg-[#c6ff00] text-black font-bold text-[13px] hover:bg-[#b0e000] transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer" 
            onClick={handleToday}
        >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Add to today's plan</span>
        </button>
    </div>
 );
};

export default TodyPlan;