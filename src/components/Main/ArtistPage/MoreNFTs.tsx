import React, {useState} from 'react';
import {animaKidNFTs} from '../../../helpers/backend-data/discoverNFTs/media/AnimaKid/animaKid';
import Nft from '../../Blocks/Nft';
import './MoreNFTs.css';

const MoreNFTs = () => {
   const [nfts, setNfts] = useState(animaKidNFTs);
   return (
      <>
         <div className="artist__tabs border-t border-[#3b3b3b] ">
            <div className="tab__btns container p-4 md:px-20 md:py-10 mx-auto items-center grid grid-cols-3 ">
               <div className="flex items-center justify-center gap-4 border-b p-[1.5rem]">
                  <span className="font-bold">Created</span>
                  <span className="rounded-[1.25rem] hidden sm:block px-[10px] py-[5px] bg-[#858584]">
                     302
                  </span>
               </div>
               <div className="flex items-center justify-center gap-4 p-[1.5rem]">
                  <span className="text-[#858584] font-bold">Owned</span>
                  <span className="rounded-[1.25rem] hidden sm:block px-[10px] py-[5px] bg-secondary">
                     67
                  </span>
               </div>
               <div className="flex items-center justify-center gap-4 p-[1.5rem]">
                  <span className="text-[#858584] font-bold">Collection</span>
                  <span className="rounded-[1.25rem] hidden sm:block px-[10px] py-[5px] bg-secondary">
                     4
                  </span>
               </div>
            </div>
         </div>
         <div className="nfts bg-secondary">
            <div className="nfts__wrapper container mx-auto p-4 md:px-20 py-[4rem] grid sm:grid-cols-1 lg:grid-cols-3 gap-4 ">
               {nfts.map(nft => {
                  return (
                     <Nft
                        bgColor="#2B2B2B"
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

export default MoreNFTs;
