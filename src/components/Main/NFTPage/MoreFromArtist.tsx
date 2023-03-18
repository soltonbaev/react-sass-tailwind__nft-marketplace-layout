import React from 'react';
import {orbitianNfts} from '../../../helpers/backend-data/artists/orbitian/orbitian';
import Nft from '../../Blocks/Nft';

const MoreFromArtist = () => {
   return (
      <section className="container mx-auto px-10">
         <div className="flex justify-between">
            <h2>More From This Artist</h2>
            <button>Go To Artist Paage</button>
         </div>

         <div className="nfts__wrapper container mx-auto px-10 py-[4rem] grid sm:grid-cols-1 lg:grid-cols-3 gap-4 ">
            {orbitianNfts
               .filter(nft => nft.id > 1)
               .map(nft => {
                  return (
                     <Nft
                        bgColor="bg-primary"
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
