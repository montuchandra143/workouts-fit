import React from 'react';

const getWorkOut = async()=>{
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = res.json();
    return data;

}
const Workouts = async() => {
    const wordoutData = await getWorkOut();
    console.log(wordoutData);
    return (
        <div>
           {
            wordoutData.map((workout, index)=>{
                return(
                    <div key={index}>{workout.name}</div>
                )
            })
           }
        </div>
    );
};

export default Workouts;