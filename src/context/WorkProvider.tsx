"use client"
import { createContext, ReactNode, useState } from "react";
import { IWorkout } from "@/type/workout.type";

export interface WorkOutContextType {
    todayPlan: IWorkout[];
    setTodyPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
    savePlan: IWorkout[];
    setSavePlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}

export const WorkOutContext = createContext<WorkOutContextType>({
    todayPlan: [],
    setTodyPlan: () => {},
    savePlan: [],
    setSavePlan: () => {},
});

const WorkProvider = ({ children }: { children: ReactNode }) => {
    const [todayPlan, setTodyPlan] = useState<IWorkout[]>([]);
    const [savePlan, setSavePlan] = useState<IWorkout[]>([]);

    const sharedData: WorkOutContextType = {
        todayPlan, 
        setTodyPlan, 
        savePlan, 
        setSavePlan
    };

    return (
        <WorkOutContext.Provider value={sharedData}>
            {children}
        </WorkOutContext.Provider>
    );
};

export default WorkProvider;