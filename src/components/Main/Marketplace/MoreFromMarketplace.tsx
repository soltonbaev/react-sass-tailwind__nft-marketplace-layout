import React, {useState} from 'react';
import {marketplaceNFTs} from '../../../helpers/backend-data/marketplace/marketplace';
import Nft from '../../Blocks/Nft';

const MoreFromMarketplace = () => {
   const [nfts, setNfts] = useState(marketplaceNFTs);
   return (
      <>
         <div className="artist__tabs border-t border-[#3b3b3b] ">
            <div className="tab__btns container p-4 md:px-20 mx-auto items-center grid grid-cols-2 ">
               <div className="flex items-center justify-center gap-4 border-b p-[1.5rem]">
                  <span className="font-bold">NFTs</span>
                  <span className="rounded-[1.25rem] px-[10px] py-[5px] bg-[#858584]">
                     302
                  </span>
               </div>
               <div className="flex items-center justify-center gap-4 p-[1.5rem]">
                  <span className="text-[#858584] font-bold">Collections</span>
                  <span className="rounded-[1.25rem] px-[10px] py-[5px] bg-secondary">
                     67
                  </span>
               </div>
            </div>
         </div>
         <div className="nfts bg-secondary">
            <div className="nfts__wrapper container mx-auto p-4 md:px-20 py-[4rem] grid sm:grid-cols-1 lg:grid-cols-3 gap-4 ">
               {nfts.map(nft => {
                  return (
                     <Nft
                        bgColor="var(--color-primary)"
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
      </>
   );
};

export default MoreFromMarketplace;
