import {Meteors} from "../magic-ui/components/ui/meteors.jsx";
import BusinessCard from "./Vcard.jsx";
 
export function MeteorDemo() {
  return (
    <div 
    style={
      {boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
    } 
         className="w-full max-w-[500px]  bg-cover bg-white  h-fit rounded-3xl flex justify-center items-center  overflow-hidden  relative">
        {/* <div className="absolute inset-0 rounded-3xl backdrop-blur-xl bg-black/25 z-10"></div> */}
      
      <Meteors number={0} />

      <BusinessCard />
    </div>
  );
}