import React, {useState} from 'react';
import {topCreators} from '../../../../helpers/backend-data/top-creators/topCreators';
import Creator from '../../../Blocks/Creator';

const TopCreators = () => {
   const [creators, setCreators] = useState(topCreators);
   return (
      <section className="top-creators container mx-auto py-[2.5rem]">
         <div className="flex justify-between mb-[3rem]">
            <div>
               <h2>Top Creators</h2>
               <p>Checkout Top Rated Creators on the NFT Marketplace</p>
            </div>
            <button>View rankings</button>
         </div>
         <div className="grid grid-cols-4 gap-10">
            {creators.map(creator => {
               return (
                  <Creator
                     id={creator.id}
                     creatorPic={creator.creatorPic}
                     creatorName={creator.creatorName}
                     totalSales={creator.totalSales}
                  />
               );
            })}
         </div>
      </section>
   );
};

export default TopCreators;
