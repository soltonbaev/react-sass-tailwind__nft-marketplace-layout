import React, {useState} from 'react';
import './MoreFromArtist.css';
import {
   getNft,
   orbitianNfts,
} from '../../../helpers/backend-data/artists/orbitian/orbitian';
import Nft from '../../Blocks/Nft';

const MoreFromArtist = () => {
   const [nfts, setNfts] = useState(orbitianNfts);
   return (
      <section className="more-from-artist container mx-auto p-4 md:px-20">
         <div className="flex flex-col md:flex-row gap-10 justify-between m-10">
            <h2>More From This Artist</h2>
            <button className="btn-outlined">Go to Artist Page</button>
         </div>
         <div className="orbitian-nfts grid xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
            {nfts
               .filter(nft => nft.id > 1)
               .map(nft => {
                  return (
                     <Nft
                        bgColor="#3B3B3B"
                        image={nft.image}
                        title={nft.title}
                        creatorPic={nft.creatorPic}
                        creatorName={nft.creatorName}
                        priceShown={true}
                        price={nft.price}
                        highestBid={nft.highestBid}
                     />
                  );
               })}
         </div>
      </section>
   );
};

export default MoreFromArtist;
