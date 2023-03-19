import React, {useState} from 'react';
import {trendingCollection} from '../../../../helpers/backend-data/trendingCollection/trendingCollection';
import Collection from '../../../Blocks/Collection';
import './TrendingCollection.css';

const TrendingCollection = () => {
   const [collections, setCollections] = useState(trendingCollection);
   return (
      <section className="py-[2.5rem]">
         <h2>Trending collection</h2>
         <p>Checkout our weekly updated trending collection</p>
         <div className="trending-collections grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
            {collections.map(col => {
               return (
                  <Collection
                     imgMain={col.imgMain}
                     imgSec={col.imgSec}
                     imgThird={col.imgThird}
                     colCounter={col.colCounter}
                     colName={col.colName}
                     creatorName={col.creatorName}
                     creatorPic={col.creatorPic}
                  />
               );
            })}
         </div>
      </section>
   );
};

export default TrendingCollection;
