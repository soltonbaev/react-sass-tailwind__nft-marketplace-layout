import React from 'react';

const Timer = () => {
   return (
      <div className="bg-[#3B3B3B] w-[295px] p-[1.875rem] rounded-[1.25rem]">
         <div className="space-mono-font text-[0.75rem]">Auction ends in:</div>
         <div className="text-[3rem] space-mono-font">
            <div className="flex">
               <div>
                  <div>59</div>
                  <div className="text-[0.75rem]">Hours</div>
               </div>
               <div>:</div>
               <div>
                  <div>59</div>
                  <div className="text-[0.75rem]">Minutes</div>
               </div>
               <div>:</div>
               <div>
                  <div>59</div>
                  <div className="text-[0.75rem]">Seconds</div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Timer;
