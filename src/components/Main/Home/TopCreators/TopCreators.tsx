import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {topCreators} from '../../../../helpers/backend-data/top-creators/topCreators';
import Creator from '../../../Blocks/Creator';
import './TopCreators.css';

const TopCreators = () => {
   const [creators, setCreators] = useState(topCreators);
   return (
      <section className="top-creators py-[2.5rem]">
         <div className="flex gap-4 justify-between flex-col md:flex-row mb-[3rem]">
            <div>
               <h2>Top Creators</h2>
               <p>Checkout Top Rated Creators on the NFT Marketplace</p>
            </div>
            <Link to="/rankings">
               <button className="btn-outlined flex items-center gap-2">
                  <img src="./icons/buttons/RocketLaunch.svg" />
                  View rankings
               </button>
            </Link>
         </div>
         <div className="creators grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center justify-center">
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
