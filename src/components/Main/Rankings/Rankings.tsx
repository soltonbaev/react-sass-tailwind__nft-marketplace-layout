import React from 'react';
import Artists from './Artists';

const Rankings = () => {
   return (
      <main className="rankings container mx-auto px-10 py-10">
         <div className="py-10">
            <h1>Top Creators</h1>
            <p>Check out top ranking NFT artists on the NFT Marketplace.</p>
         </div>
         <div className="grid grid-cols-4 gap-1 py-5 ">
            <div className="text-center">
               <span className="hidden md:block border-b p-[1.2rem] ">
                  Today
               </span>
               <span className="md:hidden border-b p-[1.2rem]">1day</span>
            </div>
            <div className="text-center">
               <span className="hidden md:block text-inactive p-[1.2rem]">
                  This Week
               </span>
               <span className="md:hidden text-inactive p-[1.2rem]">7d</span>
            </div>
            <div className="text-center">
               <span className="hidden md:block text-inactive p-[1.2rem]">
                  This month
               </span>
               <span className="md:hidden text-inactive p-[1.2rem]">30d</span>
            </div>

            <div className="text-inactive p-[1.2rem] text-center">All Time</div>
         </div>

         <Artists />
      </main>
   );
};

export default Rankings;
