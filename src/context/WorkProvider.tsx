"use client"
import { createContext, ReactNode, useState } from "react";

export const WorkOutContext = createContext({});


const WorkProvider = ({children}: {children:ReactNode}) => {
    const [todayPlan, setTodyPlan] = useState([]);
    const [savePlan, setSavePlan] = useState([]);

    const sharedData = {
        todayPlan, setTodyPlan, savePlan, setSavePlan
    };
    return (
        <WorkOutContext.Provider value={sharedData}>{children}</WorkOutContext.Provider>
    );
};

export default WorkProvider;