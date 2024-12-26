import {Meteors} from "../magic-ui/components/ui/meteors.jsx";
import BusinessCard from "./Vcard.jsx";
 
export function MeteorDemo() {
  return (
    <div 
         className=" max-w-[500px] bg-cover bg-center  h-fit rounded-3xl shadow-lg overflow-hidden bg-white relative">
        {/* <div className="absolute inset-0 rounded-3xl backdrop-blur-xl bg-black/25 z-10"></div> */}
      
      <Meteors number={0} />

      <BusinessCard />
    </div>
  );
}