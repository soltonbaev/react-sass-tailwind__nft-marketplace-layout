import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {disconverNFTs} from '../../../../helpers/backend-data/discoverNFTs/discoverNFTs';
import Nft from '../../../Blocks/Nft';

const DiscoverNfts = () => {
   const [nfts, setNfts] = useState(disconverNFTs);
   return (
      <div className="py-[2rem]">
         <div className="flex justify-between">
            <div>
               <h2>Discover More NFTs</h2>
               <p>Explore new trending NFTs</p>
            </div>
            <div>
               <Link to="/marketplace">
                  <button className="btn-outlined flex items-center gap-2">
                     <img src="./icons/buttons/Eye.svg" />
                     See All
                  </button>
               </Link>
            </div>
         </div>
         <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
            {nfts.map(nft => {
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
      </div>
   );
};

export default DiscoverNfts;
