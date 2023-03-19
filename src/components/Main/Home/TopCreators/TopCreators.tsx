import React, {useState} from 'react';
import {topCreators} from '../../../../helpers/backend-data/top-creators/topCreators';
import Creator from '../../../Blocks/Creator';
import './TopCreators.css';

const TopCreators = () => {
   const [creators, setCreators] = useState(topCreators);
   return (
      <section className="top-creators container mx-auto py-[2.5rem]">
         <div className="flex gap-4 justify-between flex-col md:flex-row mb-[3rem]">
            <div>
               <h2>Top Creators</h2>
               <p>Checkout Top Rated Creators on the NFT Marketplace</p>
            </div>
            <button className="btn-outlined">View rankings</button>
         </div>
         <div className="creators grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
