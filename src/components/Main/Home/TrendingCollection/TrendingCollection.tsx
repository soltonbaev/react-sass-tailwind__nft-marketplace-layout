import React, {useState} from 'react';
import {trendingCollection} from '../../../../helpers/backend-data/trendingCollection/trendingCollection';
import Collection from '../../../Blocks/Collection';

const TrendingCollection = () => {
   const [collections, setCollections] = useState(trendingCollection);
   return (
      <section className="py-[2.5rem]">
         <h2>Trending collection</h2>
         <p>Checkout our weekly updated trending collection</p>
         <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
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
