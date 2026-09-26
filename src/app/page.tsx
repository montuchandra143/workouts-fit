import Banner from "@/components/homepage/Banner";
import Workouts from "@/components/homepage/Workouts";
import Image from "next/image";

export default function Home() {
  return (
   <div>
     <Banner></Banner>
     <Workouts></Workouts>
   </div>
  );
}
