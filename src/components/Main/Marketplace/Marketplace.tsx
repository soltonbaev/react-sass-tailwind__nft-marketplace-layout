import React from 'react';
import MoreFromMarketplace from './MoreFromMarketplace';

const Marketplace = () => {
   return (
      <main className="marketplace">
         <div className="container mx-auto p-4 md:px-20 md:py-10 pb-20">
            <h1>Browse Marketplace</h1>
            <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
            <input
               className="p-[1.1rem] w-[100%] bg-[#2B2B2B] rounded-[1.25rem] border-[1px] border-[#3B3B3B]"
               placeholder="Search your favourite NFTs"
            ></input>
         </div>
         <MoreFromMarketplace />
      </main>
   );
};

export default Marketplace;
